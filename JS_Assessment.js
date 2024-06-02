// Create a variable to hold NFTs
let nftCollection = [];

// Function to mint NFT
function mintNFT(id, employeeName, salary, experience, designation, department) {
    // Create NFT object with metadata
    let newNFT = {
        id: id,
        employeeName: employeeName,
        salary: salary,
        experience: experience,
        designation: designation,
        department: department,
    };
    // Store NFT in collection
    nftCollection.push(newNFT);
}

// Function to list NFTs

function listNFTs() {
    // Iterate through collection and print metadata using a for loop
    for (let i = 0; i < nftCollection.length; i++) {
        let nft = nftCollection[i];
        console.log("EmployeeID: " + nft.id);
        console.log("EmployeeName: " + nft.employeeName);
        console.log("Salary: " + nft.salary);
        console.log("Experience: " + nft.experience);
        console.log("Designation: " + nft.designation);
        console.log("Department: " + nft.department);
        console.log("-----------------------");
    }
}


// Function to get total supply
function getTotalSupply() {
    // Return the length of the collection
    return nftCollection.length;
}

// Mint some NFTs
mintNFT(1, "Jack", "200000", "7 years", "CEO", "Board");
mintNFT(2, "Rebecca", "175000", "5 years", "CTO", "Human Resource");
mintNFT(3, "Randall", "100000", "5 years", "COO", "Administration");
mintNFT(4, "Kevin", "100000", "4 years", "CMO", "Marketing");

// List NFTs
console.log("Listing NFTs:");
console.log("-----------------------");
listNFTs();

// Print total supply
console.log("Total NFTs minted: " + getTotalSupply());
