// EASY (1)
const evenAndOddNum = [2, 4, 7, 11, 15, 16];

const odd = evenAndOddNum.filter(number => {
    return number % 2 !== 0;
});

const even = evenAndOddNum.filter(number => {
    return number % 2 === 0;
});

console.log(odd);
console.log(even);

// EASY (2)
function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}
const isPrime = checkPrime(9);
console.log(isPrime);

let checkForPrimeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(checkForPrimeNum);
checkForPrimeNum.push(11, 13);

checkForPrimeNum.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
        console.log(`${element} is a prime number`);
    } else {
        console.log(`${element} is NOT a prime number`);
    }
});

// MEDIUM (1)
// const enterVowel = prompt('Enter a vowel');

// function vowelChecker(x) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     if (vowels.indexOf(x) < 0) {
//         console.log('That is not a vowel')
//     } else {
//         console.log('That is a vowel')
//     }
//     // return enterVowel
// }
// vowelChecker(enterVowel);

const enterVowel = prompt('Enter a vowel');

function vowelCheck(x) {
    let isVowel = false;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.indexOf(x) >= 0) {
        isVowel = true;
    }
    return isVowel;
}

if (vowelCheck(enterVowel)) {
    console.log('That is a vowel');
} else {
    console.log('That is not a vowel');
}

// MEDIUM (2)
function anagram(str1, str2) {
    str1 = str1.toUpperCase().split('').sort().join('');
    str2 = str2.toUpperCase().split('').sort().join('');
    return str1 === str2;
};

console.log(anagram('debit card', 'bad credit'));
console.log(anagram('anime', 'naruto'))

// MEDIUM (3)
function num(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

console.log(num(24, 12));
console.log(num(8, 4));

function filterList(x) {
    return x.filter(x => typeof x === 'number');
  }
console.log(filterList([1, 'a', 'b', 13, 15, 0, 'c', 20]));

// MEDIUM (4)
// let car = {
//     make: 'Toyota',
//     model: 'Supra',
//     year: 2022,
//     mileage: 5000,
//     color: 'red',

//     driveToWork: () => {
//         alert(`Old Mileage: ${car.mileage}`);
//         console.log(car.mileage);
//         car.mileage = car.mileage + 8

//         alert(`New Mileage: ${car.mileage}`);
//     },

//     driveAroundTheWorld: () => {
//         alert(`Old Mileage: ${car.mileage}`);

//         car.mileage = car.mileage + 24000

//         alert(`New Mileage: ${car.mileage}`);
//         alert('Car needs a tune-up!')
//     },

//     runErrands: () => {
//         alert('Car is ready to go!');
//     },
// }

// HARD

function brackets(str){
    if(str === "{}" || str === "[]" || str === "()"){
        return true;
    }
    else{
        return false;
    }

}
str = "[Hello World]";
str = str.toLowerCase().replace(/[a-z]/g,"");
str = str.toLowerCase().replace(/\s+/g, '');
console.log(brackets(str));