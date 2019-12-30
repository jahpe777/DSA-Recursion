//1
function sheep(num) {

    if(num == 0){
        console.log('All sheep jumped over the fence')
    }
    else {
        console.log(`${num}: Another sheep jumps over the fence`);
        sheep(num -1)
    }
}

let num = 3
sheep(num)


//2

// what is the quickest solution
// gets you the job

function powerCalculator(base, exp) {

    if(Math.pow(base, exp) >= 0) {
        console.log(Math.pow(base, exp))
    }
    else {
        console.log('exponent should be >= 0')
    }
}

powerCalculator(2,4)

// there's not enough time

function powerCalculator(baseInt, exp){
    if(exp < 0){
      return 'exponent should be greater than or equal to 0'
    }
    if(exp === 0){
      return 1;
    } 
      return baseInt * powerCalculator(baseInt, exp - 1)
  }
  console.log(`${powerCalculator(10, 4)}`)


//3
function reverseString(str) {
    if(str === '') {
        return '';
    }
    return reverseString(str.slice(1)) + str.charAt(0)
}
reverseString('James');


//4

function triangleNumber(n){
if(n === 1){
    return 1;
}
return n + triangleNumber(n-1)

}
console.log(triangleNumber(9))

//5

function stringSplitter() {

}

//6

fibonacci = (num) => {
    if(num <= 1) {
        return num;
    }
    return fibonacci(num - 2) + fibonacci(num - 1)
}
console.log(fibonacci(7))

//7

factorial = (num) => {
    if(num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}
console.log(factorial(5))

//8

function maze()

//9

//10

//11
const org = [
    {id: 'Zuckerberg', boss: null},
    {id: 'Schroepfer', boss: 'Zuckerberg'},
    {id: 'Schrage', boss: 'Zuckerberg'},
    {id: 'Sandberg', boss: 'Zuckerberg'},
    {id: 'Bosworth', boss:'Schroepfer' },
    {id: 'Zhao', boss:'Schroepfer' },
    {id: 'Steve', boss:'Bosworth' },
    {id: 'Kyle', boss:'Bosworth' },
    {id: 'Andra', boss:'Bosworth' },
    {id: 'Richie', boss: 'Zhao'},
    {id: 'Sofia', boss: 'Zhao'},
    {id: 'Jen', boss: 'Zhao'},
    {id: 'VanDyck', boss:'Schrage' },
    {id: 'Swain', boss:'Schrage' },
    {id: 'Sabrina', boss:'VanDyck' },
    {id: 'Michelle', boss:'VanDyck' },
    {id: 'Josh', boss:'VanDyck' },
    {id: 'Blanch', boss:'Swain' },
    {id: 'Tom', boss:'Swain' },
    {id: 'Joe', boss:'Swain' },
    {id: 'Goler', boss:'Sandberg' },
    {id: 'Hernandez', boss:'Sandberg' },
    {id: 'Moissinac', boss:'Sandberg' },
    {id: 'Kelley', boss:'Sandberg' },
    {id: 'Eddie', boss:'Goler' },
    {id: 'Julie', boss:'Goler' },
    {id: 'Annie', boss:'Goler' },
    {id: 'Rowi', boss:'Hernandez'},
    {id: 'Inga', boss:'Hernandez'},
    {id: 'Morgan', boss:'Hernandez'},
    {id: 'Amy', boss:'Moissinac'},
    {id: 'Chuck', boss:'Moissinac'},
    {id: 'Vinni', boss:'Moissinac'},
    {id: 'Eric', boss:'Kelley'},
    {id: 'Ana', boss:'Kelley'},
    {id: 'Wes', boss:'Kelley'},  
];

function hierarchy(org, boss) {
    let node = {};

    org
        .filter(item => item.boss === boss)
        .forEach(item => node[item.id] = hierarchy(org, item.id));
    return node;
}

console.log(JSON.stringify(hierarchy(org, null)));

//12

function binary(num) {
    if(num === 0) {
        return '0';
    }
    
}

console.log(9);