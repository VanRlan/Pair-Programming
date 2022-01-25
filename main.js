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


// let arr = [1, 2, 3, 4, 5, 6, 7];

// function findNumFive(arr) {
//     let Num = 0
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] === 5) {
//             Num = arr[i]
//         }
//     }
//     return Num
// }
// console.log(findNumFive(arr));