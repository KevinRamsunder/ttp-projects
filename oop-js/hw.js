// cheat sheet

// object literal
var obj = {
    name: 'kevin',
    age: 21
}

// constructor
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

// instances
var kevin = new Person('kevin', 21);
var bob = new Person('bob', 5);

// accessing
console.log(kevin.name, kevin.age)

// prototypes
Person.prototype.addHairColor = function(hairColor) {
    this.hairColor = 'black';
}

kevin.addHairColor('black')
console.log(kevin.hairColor)

// -------------------------------------------------

// list properties of an object
function listProperties(obj) {
    console.log(obj);
}

listProperties(obj);

// multiplier
var Multiplier = function() {

}

Multiplier.prototype.multiply = function(numberSupplied) {
    if(this.currentValue === undefined) {
        this.currentValue = numberSupplied * 1;
        return this.currentValue;
    } else {
        this.currentValue = this.currentValue * numberSupplied;
        return this.currentValue;
    }   
}

Multiplier.prototype.getCurrentValue = function() {
    return this.currentValue;
}


// problem 4
var Album = function() {
    this.photos = []
}

Album.prototype.addPhoto = function(photo) {
    this.photos.push(photo);
}

Album.prototype.getPhoto = function(index) {
    return this.photo[index];
}

Album.prototype.listPhotos = function() {
    console.log(this.photos);
}

var Photo = function(name, date, location) {
    this.name = name;
    this.date = date;
    this.location = location;
}

// problem 5
var Person = function(name, age) {
    this.name = 'person ' + name;
    this.age = 'person ' + age;
}

var Student = function(name, age, schoolName) {
    this.schoolName = schoolName;
    Person.apply(this, [name, age]);
}

var Teacher = function(name, age, expertise) {
    this.expertise = expertise;
    Person.apply(this, [name, age]);
}

var School = function(name) {
    this.name = name;
    this.students = [];
    this.teachers = [];
}

School.prototype.addStudent = function(s) {
    this.students.push(s);
}

School.prototype.addTeacher = function(s) {
    this.teachers.push(s);
}

var i = new Student('bob', 15, 'bob school')
var j = new Teacher('mr. bob sr', 55, 'bob school');
console.log(i.name)
console.log(j.name)