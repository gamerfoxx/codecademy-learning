const remindMeTo = task => {
    return `Remember to ${task}!!!`;
  }
  
  console.log(remindMeTo('call mom'));
  
  const remindMeLater = (task) => {
    return() => {
      return remindMeTo(`${task}`);
    }
  }
  
  const reminder = remindMeLater('eat');
  console.log(reminder());