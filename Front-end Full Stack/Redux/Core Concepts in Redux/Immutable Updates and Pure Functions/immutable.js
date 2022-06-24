// original 
// const removeItemAtIndex = (list, index) => {
//     list.splice(index, 1);
//     return list;
//    };
   
//    console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));

const removeItemAtIndex = (list, index) => {
    return [
      ...list.slice(0, index),
      ...list.slice(index+1, list.length)
    ]
    return list;
   };
   
   console.log(removeItemAtIndex(['a', 'b', 'c', 'd'], 1));