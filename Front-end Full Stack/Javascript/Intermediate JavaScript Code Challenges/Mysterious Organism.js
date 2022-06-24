// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (num, array) => {
  return{
    specimenNum: num,
    dna: array,
    mutate(){
      const randomDna = Math.floor(Math.random() * 15)
      if(this.dna[randomDna] === 'A'){
        let dnaChange = ['T', 'C', 'G'];
        let newChoice = Math.floor(Math.random() * 3);
        this.dna[randomDna] = dnaChange[newChoice];
      }else if(this.dna[randomDna] === 'T'){
        let dnaChange = ['A', 'C', 'G'];
        let newChoice = Math.floor(Math.random() * 3);
        this.dna[randomDna] = dnaChange[newChoice];
      }else if(this.dna[randomDna] === 'C'){
        let dnaChange = ['A', 'T', 'G'];
        let newChoice = Math.floor(Math.random() * 3);
        this.dna[randomDna] = dnaChange[newChoice];
      }else if(this.dna[randomDna] === 'G'){
        let dnaChange = ['A', 'T', 'C'];
        let newChoice = Math.floor(Math.random() * 3);
        this.dna[randomDna] = dnaChange[newChoice];
      }
    },
    compareDNA(object){
      let numSame = 0;
      for(let i = 0; i < object.dna.length; i++){
        if(this.dna[i] === object.dna[i]){
          numSame++;
        }
      }
      console.log(`Specimen ${object.specimenNum} and ${this.specimenNum} have ${Math.floor(numSame/15 * 100)}% DNA in common`)
    },
    willLikelySurvive(){
      let chanceSurv = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          chanceSurv++;
        }
      }
      if(Math.floor(chanceSurv/15 * 100) >= 60 ){
        return true
      }else{
        return false
      }
    }
  }
  }
  
  let newAeq = pAequorFactory(37, mockUpStrand())
  let newAeq2 = pAequorFactory(38, mockUpStrand())
 newAeq.compareDNA(newAeq2)
  
const thirtypAequor = () => {  
  let Aequor = []
  for(let i = 0; i < 30; i++){
    do{
Aequor[i] = pAequorFactory(i, mockUpStrand)
    }while(Aequor[i].willLikelySurvive() === false)
  }
  
  }
  let newThirty = thirtypAequor();
  console.log(newThirty)