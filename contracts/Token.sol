// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenERC20 is ERC20 {

    address public owner;
    uint256 public totalSupplyTokens;
    
    constructor(uint256 _amount) ERC20("TestMskCity", "TMC") {
        _mint(msg.sender, _amount * 10 ** decimals());
        owner = msg.sender;
        totalSupplyTokens = _amount;
    }
}