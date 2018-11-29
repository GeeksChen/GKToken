pragma solidity ^0.4.4;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract GeekToken is StandardToken {
  string public name = "GeekToken";
  string public symbol = "GKT";
  uint8 public decimals = 4;
  uint256 public INITIAL_SUPPLY = 10000;
  uint256 totalSupply_;
  function GeekToken() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
