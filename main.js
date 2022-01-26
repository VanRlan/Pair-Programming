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
function getgcd(x, y) {
    var gcd = 0;
    for (let i = 1; i <= x && i <= y; i++) {
        // check if is factor of both integers
        if (x % i == 0 && y % i == 0) {
            gcd = i;
        }
    }
    return gcd
}
console.log("GCD " + getgcd(78, 126));

// function filterList(x) {
//     return x.filter(x => typeof x === 'number');
//   }
// console.log(filterList([1, 'a', 'b', 13, 15, 0, 'c', 20]));

// MEDIUM (4)
let car = {
    make: 'Bmw',
    model: 'm3',
    year: 2020,
    mileage: 5000,

    driveToWork: () => {
        var carMilBegin = car.mileage;
        car.mileage = car.mileage + 33;
        console.log("old mileage: " + carMilBegin + " New mileage: " + car.mileage);
    },
    driveAroundTheWorld: () => {
        var carMilBegin = car.mileage;
        car.mileage = car.mileage + 24000;
        console.log("old mileage: " + carMilBegin + " New mileage: " + car.mileage);

    },
    runErrands: () => {
        var carMilBegin = car.mileage;
        car.mileage = car.mileage + 30;
        console.log("old mileage: " + carMilBegin + " New mileage: " + car.mileage);

    },
}
car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

// HARD
function brackets(str) {
    if (str === "{}" || str === "[]" || str === "()") {
        return true;
    } else {
        return false;
    }
}

str = "[Boom Shaka Laka]";
str = str.toLowerCase().replace(/[a-z]/g, "");
str = str.toLowerCase().replace(/\s+/g, '');
console.log(brackets(str));