const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests
  //Runs before the tests in the 'it' statements
    before(() => {
  path = './message.txt';
  });
  //Runs before the tests in the 'it' statements
    afterEach( () => {
  fs.unlinkSync(path);
  });

  it('writes a string to text file at given path name', () => {
 
   // Setup

   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
 
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
  
 });
});


