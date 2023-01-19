// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/math/SafeMath.sol";

contract NFTLending {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    address public owner;
    IERC20 public stablecoin;
    mapping (address => uint) public balances;
    mapping (uint => bool) public nfts;
    mapping (uint => address) public nftOwners;

    constructor(IERC20 _stablecoin) public {
        owner = msg.sender;
        stablecoin = _stablecoin;
    }

    function lend(uint _nftId) public {
        require(nftOwners[_nftId] == msg.sender, "NFT is not owned by the borrower.");
        require(!nfts[_nftId], "NFT is already used as collateral.");

        nfts[_nftId] = true;
        nftOwners[_nftId] = msg.sender;

        uint amount = stablecoin.balanceOf(msg.sender);
        stablecoin.transfer(address(this), amount);
        balances[msg.sender] = amount;
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
