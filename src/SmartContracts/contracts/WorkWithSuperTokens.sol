 // SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import { ISuperToken, IERC20 } from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperToken.sol";
import { IFakeDAI } from "./IFakeDAI.sol";

contract WorkWithSuperTokens {

    ISuperToken public goerlifDAIx = ISuperToken(0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00);

    function gainfDAIx() external {
        IFakeDAI fDAI = IFakeDAI( goerlifDAIx.getUnderlyingToken() );
        fDAI.mint(address(this), 10000e18);
        fDAI.approve(address(goerlifDAIx), 20000e18);
        goerlifDAIx.upgrade(10000e18);

    }

    function losefDAIx(uint256 amount) external {
        goerlifDAIx.downgrade(amount);
    }

    function getfDAIBalance() external view returns(uint256) {
        IFakeDAI fDAI = IFakeDAI( goerlifDAIx.getUnderlyingToken() );
        return fDAI.balanceOf(address(this));
    }

    function getfDAIxBalance() external view returns(uint256) {
        return goerlifDAIx.balanceOf(address(this));
    }
}