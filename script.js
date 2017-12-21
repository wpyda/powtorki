// **simple function**
// function snow() {
//
// }

// // **simple function returns a**
// function snow(a) {
//     return a
// }
//
// var b = 'sniezynka';
// function snow(a) {
//     return b
// }
// // returns sniezynka

// function declaration
// function add(a, b) {
//     return a + b
// }

// // funkcja rekurencyjna, wywolujemy funkcje w funkcji
// function count(x) {
//     console.log(x);
//     if (x > 0) {
//         count(x-1);
//     }
// }
//
// // wyswietla liczby od do
// function countDownFrom(from, to) {
//     if (from < to)
//         throw Error('Djdajdnjand');         // przy else if nizej, console log nadal dziala i wyswietla 'from'
//     console.log(from);
//     if (from > to) {
//         countDownFrom(from-1, to);
//     }
// }

// // funkcje w funckji
// var addSquares = function (x, y) {
//     var square = function (z) {
//         return z*z
//     }
//     return square(x) + square(y)
// }

// var makeAlwaysAddFunction = function (numberThatWillBeAdded) {
//     var alwaysAddFunction = function (x) {
//         return x + numberThatWillBeAdded
//     }
//     return alwaysAddFunction
// }

// var higherOrderFunction = function (otherFunction) {
//     var sum = 1 + 3 + 4;
//     otherFunction(sum)
// };
//
// var loggingFunction = function (message) {
//     console.log(message)
// };
//
// higherOrderFunction(loggingFunction());         // logs 8

// c) logging out all array numbers using for
// var array1 = [1,2,3,4,5];
//
// for(var i = 0; i < array1.length; i++) {
//     console.log(array1[i])
// }

// c) logging out all array numbers using forEach
// var array2 = [10,20,30,40,50];
//
// array2.forEach(function (el, i, arr) {
//     console.log(el)
// });

// var ourOwnForEach = function (array, fnForEveryElement) {
//     for (var i = 0; i <  array.length; i++) {
//         // var element = array[i];          // element
//         // var index = i;                   // index
//         // array                            // array
//         fnForEveryElement(array[i], i, array)
//     }
// };

/// MAP

// var numbers = [10, 20, 30, 40, 50];
//
// numbers.map(function (element, index, array) {
//     return element * 2
// });                                                 // zwraca NOWA tablice [20, 40, 60, 80, 100] - elemety tablicy numberts x2

/// FILTER

// var numbers = [11, 22, 33, 44, 55];
//
// // filter makes NEW array that contains ONLY that elements
// // for which passed function return true
//
// // only even numbers (parzyste)
//
// var newNumbers = numbers.filter(function (el) {
//     return el % 2 === 0;
// });
//
// // only odd numbers (nieparzyste)
//
// var oddNumbers = numbers.filter(function (el) {
//     return el % 2 !== 0;
// });

// var people = [
//     {name: "Mateusz", gender: "male", team: null},
//     {name: "Waldek", gender: "male", team: "FitCode"},
//     {name: "Tomek", gender:"male", team: "FitCode"},
//     {name: "Natalia", gender: "female", team: "FitCode"},
//     {name: "Wojtek", gender: "male", team: "FitCode"},
//     {name: "Grzesiek", gender: "male", team: "WeeBees"},
//     {name: "Paweł", gender: "male", team: "WeeBees"},
//     {name: "Kasia", gender: "female", team: "WeeBees"},
//     {name: "Ola", gender: "female", team: "WeeBees"}
// ];
//
// var onlyFemales = people.filter(function (person) {             // person = element
//     return person.gender === "female"
// });
//
// var onlyMales = people.filter(function (person) {             // person = element
//     return person.gender === "male"
// });
//
// var onlyMalesWeeBees = people.filter(function (person) {             // person = element
//     return person.gender === "male" && person.team === "WeeBees"
// });

/// REDUCE

// var numbers = [1,2,3,4,5,6];
// var sum = numbers.reduce(function (reduced, element, index, array) {
//     return reduced + element
// }, 0);

// var names = ['Ala', 'Ola', 'Ela', 'Kasia'];
// var oneBigName = names.reduce(function (reduced, el, i, arr) {
//     return reduced + el + ' ' + el + ' '
// }, '').slice(0, -1);

// var orderBasket = [
//     {name: 'Vege Ser', price: 1100},
//     {name: 'Parowka sojowa', price: 200},
//     {name: 'Falafel', price: 800}
// ];
//
// var orderTotal = orderBasket.reduce(function (reduced, el, index, array) {
//     return reduced + el.price
// }, 0);

//// PROTOTYPES

var snowFlake = {
    color: 'white',
    img: 'url',
    element: null,
    init: function () {
        var div = document.createElement('div')
        div.style.backgroundColor = this.color
        div.style.width = '100px'
        div.style.height = '100px'
        document.body.appendChild(div)
        this.element = div
    }
}