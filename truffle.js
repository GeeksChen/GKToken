const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts")

  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // 匹配任何network id
    }
  },
  rinkeby: {
    host: "localhost", // Connect to geth on the specified
    port: 8545,
    network_id: "*",
  }
};
