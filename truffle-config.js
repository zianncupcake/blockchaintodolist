module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", //development network that is connected to ganache
      port: 7545, //port that ganache is running on
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}