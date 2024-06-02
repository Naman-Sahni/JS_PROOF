# JS_PROOF
Module 3 Project : Create a NFT Collection
<br>
Written the code based on this
<br>
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT () {

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {

}

// call your functions below this line
<br>

# NFT Collection Script

## Overview
This script manages a collection of NFTs (Non-Fungible Tokens) representing employees. Each NFT includes metadata such as employee ID, name, salary, experience, designation, and department.

## Functions

### `mintNFT(id, employeeName, salary, experience, designation, department)`
- **Purpose:** Creates and stores a new NFT with the provided metadata.
- **Parameters:**
  - `id` (number): Unique identifier for the NFT.
  - `employeeName` (string): Name of the employee.
  - `salary` (string): Salary of the employee.
  - `experience` (string): Work experience of the employee.
  - `designation` (string): Job title of the employee.
  - `department` (string): Department of the employee.

### `listNFTs()`
- **Purpose:** Lists all NFTs in the collection, displaying their metadata.

### `getTotalSupply()`
- **Purpose:** Returns the total number of NFTs in the collection.


