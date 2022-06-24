const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty(){
  try{
    let food = await cookBeanSouffle();
    console.log(`${food} is served!`);
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();

