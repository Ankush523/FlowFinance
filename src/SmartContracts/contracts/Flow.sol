//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.14;

import {ISuperfluid, ISuperToken, ISuperApp} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
error Unauthorized();


// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "./IERC721.sol";

contract Flow {
    address public owner;
    using SuperTokenV1Library for ISuperToken;
    ISuperToken public flowtoken;
    //fDAIx:0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00
    //fDAI:0x88271d333C72e51516B67f5567c728E702b3eeE8

    uint256 public interestrate = 10;
    // IERC721 public currentnft;
    // mapping (address => uint) public balances;
    // mapping (uint => bool) public nfts;
    // mapping (uint => address) public nftOwners;
    // mapping (address => uint256) public loanAmount;
    // mapping (address =>mapping(uint256 => address)) lenders;

    uint256 public bid;

    struct Borrower {
        uint256 bid;
        string name;
        address borrower;
        uint256 time;
        uint256 loanAmount;
    }

    struct Lender {
        address lender;
    }

    mapping(uint => Borrower) public borrowers;
    mapping(address => bool) public accountList;
    mapping(address => Lender) public lenders;


    constructor(ISuperToken _flowtoken,address _owner) {
        owner = _owner;
        flowtoken = _flowtoken;
    }

    function allowAccount(address _account) external {
        if (msg.sender != owner) revert Unauthorized();
        accountList[_account] = true;
    }

    function createFlowFromContract(address receiver,int96 flowRate) public {
        if (!accountList[msg.sender] && msg.sender != owner) revert Unauthorized();
        flowtoken.createFlow(receiver, flowRate);
    }

    function updateFlowFromContract(address receiver,int96 flowRate) internal {
        if (!accountList[msg.sender] && msg.sender != owner) revert Unauthorized();
        flowtoken.updateFlow(receiver, flowRate);
    }

    function deleteFlowFromContract(address receiver) external {
        if (!accountList[msg.sender] && msg.sender != owner) revert Unauthorized();
        flowtoken.deleteFlow(address(this), receiver);
    }

    // function addNft(address _nftaddr, uint256 _id) public {
    //     currentnft = IERC721(_nftaddr);
    //     nftOwners[_id]=msg.sender;
    // }

    function lend(uint256 _bid, address _lender) public {
        // require(flowToken.balanceOf(msg.sender)>=loanAmount[borrower], "Amount less than borrowing");
        flowtoken.transferFrom(msg.sender, borrowers[_bid].borrower, borrowers[_bid].loanAmount);
        lenders[_lender].lender = msg.sender; 
        // lenders[borrower][nftid]=msg.sender;
    }

    function borrow(uint256 _nftId,uint256 _borrowAmount) public {
        // require(!nfts[_nftId], "NFT is already used as collateral.");
        // require(currentnft.ownerOf(_nftId) == msg.sender, "NFT is not owned by the owner");
        // nfts[_nftId] = true;
        // currentnft.transferFrom(msg.sender, address(this), _nftId);
        // loanAmount[msg.sender]=_borrowAmount;
    }

    function repay(uint256 _bid, address _lender) public {
        // flowToken.transfer(lenders[msg.sender][_nftId], _repayAmount);
        // loanAmount[msg.sender]-=_repayAmount;
        uint256 principle = borrowers[_bid].loanAmount;
        uint256 time_in_seconds = ((borrowers[_bid].time)*30*24*3600);
        int256 rate = int256( (principle + (( principle * borrowers[_bid].time * interestrate )/100)) / time_in_seconds ); 
        int96 flowrate = int96(rate);
        createFlowFromContract(lenders[_lender].lender,flowrate);
    }

    // function liquidate(uint _nftId) public {
    //     require(nfts[_nftId], "NFT is not being used as collateral.");
    //     require(nftOwners[_nftId] != msg.sender, "NFT is not owned by the lender.");
    //     flowToken.transfer(msg.sender, balances[nftOwners[_nftId]]);
    //     nftOwners[_nftId] = address(0);
    //     nfts[_nftId] = false;
    //     balances[nftOwners[_nftId]] = 0;
    // }
}