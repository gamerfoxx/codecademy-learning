// Write your code here:

const reverseArray = (arr) => {
    let revArr = [];
    let j = 0;
    for(i = arr.length-1 ; i >= 0; i--){
      revArr[j] = arr[i]
      j++
    }
    return revArr
    }
    
    
    
    
    
    
    // When you're ready to test your code, uncomment the below and run:
    
    const sentence = ['sense.','make', 'all', 'will', 'This'];
    
    console.log(reverseArray(sentence)) 
    // Should print ['This', 'will', 'all', 'make', 'sense.'];
    
    
    
    