import { ethers } from "./ethers.js";
// Your code here...
const provider = ethers.provider.Web3Provider(window.ethereum);
const signer = provider.getSigner();

function addToWhitelist() {
    $("#txStatus").text("Creating whitlist message and sig");

    let address = document.getElementById("addressInput").value;

    let signature = await signer.signMessage(address + "airdrop").then(alert(signature) )
    
}