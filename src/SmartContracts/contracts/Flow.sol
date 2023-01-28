// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import { ISuperfluid, ISuperToken, ISuperApp } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./IFlowToken.sol";
abstract contract NFTLending {

    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    using SuperTokenV1Library for ISuperToken;
    ISuperToken public flowTokenX;
    //fDAIx:0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00

    IERC20 public flowToken;
    //fDAI:0x88271d333C72e51516B67f5567c728E702b3eeE8

    uint public borrowAmount;
    uint public lendAmount;
    address public owner;
    ERC721 public currentnft;
    mapping (address => uint) public balances;
    mapping (uint => bool) public nfts;
    mapping (uint => address) public nftOwners;
    mapping (address => uint256) public loanAmount;
    mapping (address =>mapping(uint256 => address)) lenders;

    constructor(ISuperToken _flowTokenX, IERC20 _flowToken) {
        owner = msg.sender;
        flowTokenX = _flowTokenX;
        flowToken = _flowToken;
    }

    function addNft(address _nftaddr, uint256 _id) public {
        currentnft = ERC721(_nftaddr);
        nftOwners[_id]=msg.sender;
    }

    function lend(address borrower, address nftaddress, uint256 nftid) public {
        require(flowToken.balanceOf[msg.sender]>=loanAmount[borrower], "AMount less than borrowing");
        flowToken.transferFrom(msg.sender, borrower, loanAmount[borrower]);
        lenders[borrower][nftid]=msg.sender;
    }

    function borrow(uint256 _nftId,uint256 _borrowAmount, ERC721 borrownft) public {
        require(!nfts[_nftId], "NFT is already used as collateral.");
        require(borrownft.ownerOf(_nftId) == msg.sender, "NFT is not owned by the owner");

        nfts[_nftId] = true;
        borrownft.transferFrom(msg.sender, address(this), _nftId);
        loanAmount[msg.sender]=_borrowAmount;
    }

    function repay(uint _nftId, uint256 _repayAmount) public {
        // require(nftOwners[_nftId] == msg.sender, "NFT is not owned by the borrower.");
        // require(nfts[_nftId], "NFT is not being used as collateral.");
        flowToken.transfer(lenders[msg.sender][_nftId], _repayAmount);
        loanAmount[msg.sender]-=_repayAmount;
        
        createFlowToContract(msg.sender,flowrate);
    }

    function liquidate(uint _nftId) public {
        require(nfts[_nftId], "NFT is not being used as collateral.");
        require(nftOwners[_nftId] != msg.sender, "NFT is not owned by the lender.");
        flowToken.transfer(msg.sender, balances[nftOwners[_nftId]]);
        nftOwners[_nftId] = address(0);
        nfts[_nftId] = false;
        balances[nftOwners[_nftId]] = 0;
    }

    /// @notice Create flow from contract to specified address.
    /// @param receiver Receiver of stream.
    /// @param flowRate Flow rate per second to stream.
    function createFlowToContract(
        address receiver,
        int96 flowRate
    ) public {

        flowTokenX.createFlow(receiver, flowRate);
    }

    /// @notice Update flow from contract to specified address.
    /// @param receiver Receiver of stream.
    /// @param flowRate Flow rate per second to stream.
    function updateFlowToContract(
        address receiver,
        int96 flowRate
    ) public {

        flowTokenX.updateFlow(receiver, flowRate);
    }

    /// @notice Delete flow from contract to specified address.
    /// @param receiver Receiver of stream.
    function deleteFlowToContract(address receiver) public {

        flowTokenX.deleteFlow(address(this), receiver);
    }
}