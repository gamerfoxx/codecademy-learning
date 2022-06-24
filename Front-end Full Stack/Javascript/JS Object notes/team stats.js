let team = {
    _players: [
      {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 21
  },
  {
    firstName: 'Jake',
    lastName: 'Peralta',
    age: 35
  },
  {
    firstName: 'Raymond',
    lastName: 'Holt',
    age: 54
  }],
    _games: [
      {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Team1',
    teamPoints: 62,
    opponentPoints: 21
  },
  {
    opponent: 'Team2',
    teamPoints: 49,
    opponentPoints: 57
  }
    ],
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(firstName, lastName, age){
      let player= {
        firstName,
        lastName,
        age
      };
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame("name 1", 23, 47);
  team.addGame("name 2", 29, 27);
  team.addGame("name 3", 33, 42);

  console.log(team._players)
  console.log(team._games)