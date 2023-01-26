// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTLending {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;
    uint public borrowAmount;
    address public owner;
    IERC20 public stablecoin;
    ERC721 public currentnft;
    mapping (address => uint) public balances;
    mapping (uint => bool) public nfts;
    mapping (uint => address) public nftOwners;

    constructor(IERC20 _stablecoin) {
        owner = msg.sender;
        stablecoin = _stablecoin;
    }

    function addNft(address _nftaddr, uint256 _id) public {
        currentnft = ERC721(_nftaddr);
        nftOwners[_id]=msg.sender;
    }

    function lend(uint256 _borrowAmount) public {
        stablecoin.transferFrom(msg.sender, address(this), _borrowAmount);
    }

    function borrow(uint256 _nftId, uint _borrowAmount) public {
        // require(nftOwners[_nftId] == msg.sender, "NFT is not owned by the borrower.");
        // require(!nfts[_nftId], "NFT is already used as collateral.");

        // nfts[_nftId] = true;
        // nftOwners[_nftId] = msg.sender;
        stablecoin.transfer( msg.sender, _borrowAmount);
    }

    function repay(uint _nftId) public {
        require(nftOwners[_nftId] == msg.sender, "NFT is not owned by the borrower.");
        require(nfts[_nftId], "NFT is not being used as collateral.");

        stablecoin.transfer(msg.sender, balances[msg.sender]);
        balances[msg.sender] = 0;
        nftOwners[_nftId] = address(0);
        nfts[_nftId] = false;
    }

    function liquidate(uint _nftId) public {
        require(nfts[_nftId], "NFT is not being used as collateral.");
        require(nftOwners[_nftId] != msg.sender, "NFT is not owned by the lender.");

        stablecoin.transfer(msg.sender, balances[nftOwners[_nftId]]);
        nftOwners[_nftId] = address(0);
        nfts[_nftId] = false;
        balances[nftOwners[_nftId]] = 0;
    }
}