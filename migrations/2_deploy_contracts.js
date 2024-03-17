const ToDoList = artifacts.require("ToDoList.sol"); //abstraction of smart contract from ToDoList.json

module.exports = function(deployer) {
  deployer.deploy(ToDoList);
};


//when youre deploying a smart contract to blochchain, u are changing the blockchain state (similiar to database)

//balance of ether goes down by a bit. each time u deploy contract to blockchain it costs ether. pay the gas fee. truffle default uses first account to pay those fees
