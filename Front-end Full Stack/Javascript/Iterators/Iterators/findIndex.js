const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];


const foundAnimal = animals.findIndex(e => e === 'elephant')
console.log(foundAnimal)

const startsWithS = animals.findIndex(e => e[0] === 's')

console.log(startsWithS)