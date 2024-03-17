// // javascript app that actually talks to the blockchain

// import Web3 from 'web3';
// App = {
//     load: async () => {
//         console.log("app loading")
//         await App.loadWeb3() // load web3 library. use configuration that is specified by metamask. using web3js
//         // await App.loadAccount()
//     },
//     // loadWeb3: async () => {
//     //     if (typeof web3 !== 'undefined') {
//     //         // connect browser to blockchain using metamask. use web3js library to talk to ethereum blockchain, read and write data from the blockchain inside the app
//     //       App.web3Provider = web3.currentProvider
//     //       web3 = new Web3(web3.currentProvider)
//     //     } else {
//     //       window.alert("Please connect to Metamask.")
//     //     }
//     //     // Modern dapp browsers...
//     //     if (window.ethereum) {
//     //       window.web3 = new Web3(ethereum)
//     //       try {
//     //         // Request account access if needed
//     //         await ethereum.enable()
//     //         // Acccounts now exposed
//     //         web3.eth.sendTransaction({/* ... */})
//     //       } catch (error) {
//     //         // User denied account access...
//     //       }
//     //     }
//     //     // Legacy dapp browsers...
//     //     else if (window.web3) {
//     //       App.web3Provider = web3.currentProvider
//     //       window.web3 = new Web3(web3.currentProvider)
//     //       // Acccounts always exposed
//     //       web3.eth.sendTransaction({/* ... */})
//     //     }
//     //     // Non-dapp browsers...
//     //     else {
//     //       console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     //     }
//     //   },
//     // loadWeb3: async () => {
//     //     if (typeof web3 !== 'undefined') {
//     //         App.web3Provider = web3.currentProvider;
//     //         web3 = new Web3(web3.currentProvider);
//     //     } else {
//     //         window.alert("Please connect to Metamask.");
//     //     }
//     //     // Modern dapp browsers...
//     //     if (window.ethereum) {
//     //         web3 = new Web3(ethereum);
//     //         try {
//     //             // Request account access if needed
//     //             await ethereum.enable();
//     //             // Accounts now exposed
//     //             web3.eth.sendTransaction({/* ... */});
//     //         } catch (error) {
//     //             // User denied account access...
//     //         }
//     //     }
//     //     // Legacy dapp browsers...
//     //     else if (window.web3) {
//     //         App.web3Provider = web3.currentProvider;
//     //         web3 = new Web3(web3.currentProvider);
//     //         // Accounts always exposed
//     //         web3.eth.sendTransaction({/* ... */});
//     //     }
//     //     // Non-dapp browsers...
//     //     else {
//     //         console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//     //     }
//     // },

//     loadWeb3: async () => {
//         // Modern dapp browsers...
//         if (window.ethereum) {
//             window.web3 = new Web3(window.ethereum);
//             try {
//                 // Request account access if needed
//                 await window.ethereum.enable();
//                 console.log('Web3 successfully initialized with Ethereum provider.');
//             } catch (error) {
//                 // User denied account access...
//                 console.error('Failed to enable Ethereum provider:', error);
//             }
//         }
//         // Legacy dapp browsers...
//         else if (window.web3) {
//             window.web3 = new Web3(window.web3.currentProvider);
//             console.log('Web3 successfully initialized with legacy provider.');
//         }
//         // Non-dapp browsers...
//         else {
//             console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
//         }
//     },
    
    
//     //   loadAccount: async () => {
//     //     // Set the current blockchain account
//     //     App.account = web3.eth.accounts[0]
//     //   },
    
//     }


//     $(() => {
//         $(window).load(() => {
//             App.load()
//         })
//     })

    // Detect the MetaMask Ethereum provider

import detectEthereumProvider from '@metamask/detect-provider';

const provider = await detectEthereumProvider();

if (provider) {
  startApp(provider);
} else {
  console.log('Please install MetaMask!');
}

function startApp(provider) {
  if (provider !== window.ethereum) {
    console.error('Do you have multiple wallets installed?');
  }
}

// Prompt users to connect to MetaMask

const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  const account = accounts[0];
  showAccount.innerHTML = account;
}