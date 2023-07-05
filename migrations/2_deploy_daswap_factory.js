var daswapFactory = artifacts.require("DaswapFactory");

module.exports = function(deployer, network, accounts) {
  let owner = accounts[0];
  console.log('owner of token contracts: ' + owner)
  // Deploy the Migrations contract as our only task
  deployer.deploy(daswapFactory, owner, {from:owner});
};