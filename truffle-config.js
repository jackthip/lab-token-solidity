const HDWalletProvider = require("@truffle/hdwallet-provider");
const private_key = '';

module.exports = {
 networks: {
    testnet: {
        provider: () => new HDWalletProvider(private_key, "https://nd-729-980-322.p2pify.com/d11c6f19caee2f4b36dd49a782272ace"),
        network_id: 97,
        confirmations: 3,
        timeoutBlocks: 200,
        skipDryRun: true
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
   },

 compilers: {
    solc: {
    version: "0.8.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
    }
  },
  plugins: [
        'truffle-contract-size'
      ]
};