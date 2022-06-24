const Calculate = {
    sum(num){
      let newSum = 0
      for(let i = 0; i < num.length; i++){
        newSum += num[i];
      }
      return newSum;
    }
  };
  
  
  module.exports = Calculate;
  