
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log('Hello, ' + this.name);
}

function Student(name, subject){
    Person.call(this, name);
    this.subject = subject;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.study = function() {
    console.log(this.name + ' studies ' + this.subject);
}

const student1 = new Student('Anna', 'Mathematics');
student1.greet();
student1.study();