// create a variable to hold your NFT's
var variable_hold_nft = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintNFT(name_, eyeColor_, shirtType_, bling_) {
  var obj = {
    "name": name_,
    "eyeColor": eyeColor_,
    "shirtType": shirtType_,
    "bling": bling_,
  };
  variable_hold_nft.push(obj); // Store the created NFT in the initial array
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < variable_hold_nft.length; i++) {
    console.log("Name: " + variable_hold_nft[i].name);
    console.log("Eye Color: " + variable_hold_nft[i].eyeColor);
    console.log("Shirt Type: " + variable_hold_nft[i].shirtType);
    console.log("Bling: " + variable_hold_nft[i].bling);
    console.log("--x--x--x--x--x--x--x--x--");
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return variable_hold_nft.length;
}

// call your functions below this line
// pass the parameters to the mintNFT function
mintNFT("Gryffindor", "Brown", "coat", "sword");
mintNFT("Hufflepuff", "Yellow", "hoodie", "diamond earrings");
mintNFT("Ravenclaw", "purple", "PoloTee", "crown");
mintNFT("Slytherin", "Green", "t-shirt", "snake");

listNFTs(); // Print details of all NFTs
console.log("Total number of NFTs: " + getTotalSupply()); // Print total number of NFTs
