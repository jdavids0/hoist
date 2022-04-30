console.log(example);
var example = "I'm the example!";

var example = "I'm the example!";
console.log(example)

/* 1.
console.log(hello);                                   
var hello = 'world';    */   

var hello = 'world';
console.log(hello)

/* 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} */

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
// expected ouput == 'magnet'

// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// pretty sure this is just how the interpreter would read it - nothing needs to be hoisted
// expected output == 'super cool' (function is never called)

/* 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} */
// ReferenceError == eat is not defined

var food = 'chicken';
function eat (){
    var food = 'gone';
    food = 'half-chicken';
    console.log(food);
}
console.log(food)
eat();
// expected output == 
// half-chicken
// chicken

/* 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); */

var mean = function(){
    var food = 'fish';
    food = 'chicken';
    console.log(food);
    console.log(food);
}
// expected output == 
// chicken
// chicken
mean();
console.log(food)
console.log(food)
// expected output = ReferenceError food not defined (bc not defined outside function)

/* 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); */

var genre = 'disco';
function rewind(){
    var genre = 'r&b';
    genre = 'rock';
    console.log(genre);
    console.log(genre);
}

// expected output ==
// rock
// rock
rewind();
console.log(genre);
// expected output == disco

/* 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); */

function learn(){
    var dojo = 'burbank';
    dojo = 'seattle';
    console.log(dojo);
    console.log(dojo);
}
dojo = 'san jose';
console.log(dojo);
learn();
console.log(dojo);
// expected output ==
// seattle
// seattle
// san jose
// should it be san jose, seattle, seattle - not sure about order

8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// expected output ==
// name: Chicago, students: 65, hiring: true
// TypeError - can't change the value of a const