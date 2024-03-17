pragma solidity ^0.5.0;

contract ToDoList {
  //declare state variable
  uint public taskCount = 0;

  struct Task {
    uint id; //integer that cant be negative. unsigned integer
    string content;
    bool completed;
  }

  //access storage in blockchain
   //the uint is kind of like a id of the task that will be stored in the blockchain
   // public so that i can access the tasks outside of this mapping
  mapping(uint => Task) public tasks; 


//this function will be called when smart contract run for the first time aka during deployment
  constructor() public {
    createTask("check out zianncupcake on github"); //default task
  }

  function createTask(string memory content) public {
    taskCount ++;
    tasks[taskCount] = Task(taskCount, content, false);
  }

}

// to test: go to truffle console. toDoList = await toDoList.deployed() ==> e.g. toDoList.address