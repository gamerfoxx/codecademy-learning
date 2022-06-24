// Write your code here:
function justCoolStuff(arr1, arr2){
    let result = arr1.filter((e) => arr2.includes(e));
    return result
  }
  
  
  
  
  
  
  // Feel free to uncomment the code below to test your function
  
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
  
  