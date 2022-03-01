module.exports = function(deployer) {
  var Lab01Token = artifacts.require("./Lab01Token.sol");
    deployer.deploy(Lab01Token);
};