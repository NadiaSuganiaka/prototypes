function Animal (name) {
    this.name = name; 
    }
    
    Animal.prototype.speak = function(){
        console.log(`${this.name} makes a noise.`);   
    }
    

function Dog(name) {
    Animal.call(this, name);
}   

Object.setPrototypeOf(Dog, Animal);
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
}
    
    
const dog = new Dog('Rex');
dog.speak();
