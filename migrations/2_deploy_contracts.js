var GeekToken = artifacts.require("./GeekToken.sol");

module.exports = function(deployer) {
  deployer.deploy(GeekToken);
};
