let _ = {
  clamp(num, lower, upper){
  let lowerClampedValue = Math.max(num, lower);
  let clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue
},

  inRange(number, start, end){
   if(end === undefined){
      end = start
      start = 0
    }
    if(start > end){
      var temp = end
      end = start
      start = temp
    }
    let isInRange = start <= number && number < end
    console.log(isInRange)
    return isInRange
  },

  words(string){
  let words = string.split(" ");
  return words
},
pad(string, length){
  if( length <= string.length){
    return string
    }else{
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
      return paddedString
    }
  },
  has(object, key){
    let hasValue = (object[`${key}`] !== undefined)
    return hasValue
},
invert(object){
  let invertedObject = {};
  for(key in object){
    let originalValue = key.key
    invertedObject[originalValue] = Object.entries(key)
  }
  return invertedObject;
}
}
// function clamp(num, lower, upper){
//   if(num < lower){
//     return lower;
//   }else if(num > upper){
//     return upper;
//   }else{
//     return num;
//   }
// }
//   function inRange(num, start, end){
//     if(end === undefined){
//       end = start;
//       start = 0;
//     }
//     if(num < start || num > end){
//       return false
//     }else{
//       return true
//     }
//   }
// function words(str){
//   let newStr = str.split(" ");
//   return newStr
// }
// function pad(string, length){
//   let end=false;
//   if(string.length < length){
//     for(let i = string.length; i < length; i++){
//       if(end===false){
//         string = string + " "
//       }else{
//         string = " " +string
//       }
//     }
//   }
//   return string
// }
// function has(obj, key){
//   if(key === undefined){
//     return false
//   }
//   if(obj.includes(key)){
//     return true;
//   }else{
//     return false
//   }
// }

function invert(object){
  let invertedObject = {};
  for(key in object){
    let originalValue = key.key
    invertedObject[originalValue] = Object.entries(key)
  }
  return invertedObject;
}

// console.log(inRange(5, 7))

// Do not write or modify code below this line.
module.exports = _;