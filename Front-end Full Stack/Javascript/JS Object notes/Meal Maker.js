let menu ={
    _courses: {
      appetizers: [], 
      mains: [], 
      desserts:[]
    },
    get courses(){
      return{
        appetizers: this.appetizers,
        mains: this.mains, 
        desserts: this.desserts
      }
    },
    get appetizers(){
  
    },
    set appetizers(appetizers){
  
    },
    get mains(){
  
    }, 
    set mains(mains){
  
    }, 
    get desserts(){
  
    },
    set desserts(desserts){
  
    },
    addDishToCourse(courseName, dishName, dishPrice){
      let dish ={
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      const total = appetizer.price + mains.price + desserts.price
  
      return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}. The price is ${total} $`
    }
  }
  
  menu.addDishToCourse('appetizers', "carrot sticks", 4);
  menu.addDishToCourse('mains', "steak", 14);
  menu.addDishToCourse('desserts', "cake", 24);
  
  console.log(menu.generateRandomMeal())
  