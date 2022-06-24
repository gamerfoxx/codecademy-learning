const robotFactory = (model, mobile) => {
    return{
      model,
      mobile,
      beep(){
        console.log('Beep Boop')
      }
    }
  }
  const tinCan = robotFactory('P-500', true)
  console.log(tinCan)
  tinCan.beep()