class Network {
    constructor(data, users) {
      this.data = data;
      this.users = users;
    }
    // Insert code below
    movieTime(){
      if(this.data - (this.users * 5) >= 10){
        return true;
      }else{
        return false;
      }
    }
  }

  class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
  }
  
  // Write function below
  function balloonAttack(p1, p2){
    let pOneHits = p1.hitsPerMinute * 10;
    let pTwoHits = p2.hitsPerMinute * 10;
    if(pOneHits > pTwoHits){
      return p1.name;
    }else if(pOneHits < pTwoHits){
      return p2.name;
    }else{
      return "Tie"
    }
  }