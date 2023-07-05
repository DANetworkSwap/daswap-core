pragma solidity 0.7.0;

// 

import '../daswapERC20.sol';

contract ERC20 is DaswapERC20 {
    constructor(uint _totalSupply)  {
        _mint(msg.sender, _totalSupply);
    }
}
