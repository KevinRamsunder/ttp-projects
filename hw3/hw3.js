// vars 
var i = '5';
var j = 5;

// debugging
// debugger;
console.log(i);
alert(j);

// different data types
var k = [5, 6, 7];
var l = {name: 'bob', age: 15};

// arrays
var m = ['a', 'b', 'c'];

// testing ?

// logic
var input = true;
if (input) {
    console.log('input is true');
}

// three function
function func(input) {
    console.log(input);
}

var func2 = function(input) {
    console.log(input);
}

(function(input) {
    console.log(input);
});


// problem 1:
var ii = 5;
var jj = 6;
console.log(ii + jj);

var kk = '5';
var ll = '6';
console.log(kk + ll);

// problem 2:
var qq = [['bob', 'sam', 'jim'], ['bobby', 'sammy', 'jimmy']];
console.log(qq[0][2]);
console.log(qq[1][1]);

// problem 3:
var iii = 51;
if(iii < 10) {
    console.log(iii + ' is less than 10');
} else {
    console.log(iii + ' is not less than 10')
}

// problem 4:
var iii = 5;
if(iii < 10) {
    console.log(iii + ' is less than 10');
} else {
    console.log(iii + ' is not less than 10');
}

// additional problem
function func2(input) {
    if (input === 1) {
        console.log('you entered door 1');
    } else if (input === 2) {
        console.log('you entered door 2');
    } else {
        console.log('i am not sure what door you entered');
    }
}