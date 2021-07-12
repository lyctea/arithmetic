const duck = {
    name: 'Maurice',
    color: 'white',
    greeting: function() {
      console.log(`Quaaaack! My name is ${this.name}`);
    }
  }
  
  Reflect.has(duck, 'color');
  // true
  Reflect.has(duck, 'haircut');
  // false

  console.log(Reflect.ownKeys(duck))