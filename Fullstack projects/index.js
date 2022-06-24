
      const generatePlace = () => {
        let places =[`Paris`, `Peru`, `Canada`, `United States`, `Mexico`]
        let num = Math.floor(Math.random() * (places.length));
        return places[num]
      }

      const generateTime = () => {
        return Math.floor(Math.random() * 24);
      }

      const generateMood = () => {
        let mood =[`Happy`, `Sad`, `Excited`, `Depressed`, `Anxious`]
        let num = Math.floor(Math.random() * (mood.length));
        return mood[num]
      }

      
      const generateMessage = (place, time, mood) => {
        return `You will be in ${place}, at ${time}:00, when you are feeling ${mood}`
      }

      console.log(generateMessage(generatePlace(), generateTime(), generateMood()))