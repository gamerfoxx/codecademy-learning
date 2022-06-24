const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);
const robotEntries = Object.entries(robot);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
newRobot
console.log(robotKeys);

// Declare robotEntries below this line:


console.log(robotEntries);

// Declare newRobot below this line:


console.log(newRobot);