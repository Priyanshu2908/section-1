const myarr = [ 235, 'nice', 73.355, true, console.log, [23, 25] ];

console.log(myarr.length);
console.log(typeof myarr);

const movies = [ 'Avengers', 'Flash', 'Pushpa', 'War', 'Jawaan', 'FastX', 'OMG' ];

// Indexing
console.log(movies[2]);
console.log(movies[100]);
console.log(movies.at(-2));
console.log(movies.indexOf('Flash'));

// Slicing
console.log(movies.slice(2, 6));
console.log(movies.slice(2));
console.log(movies.slice(-4));



// adding new element
movies.push('shershaah');  // adds element at the end of array
movies.unshift('Avatar');  // adds element at the start of array

console.log(movies);

// removing element
movies.pop();  //removes element from the end of array
movies.shift();  //removes element from the start of array

console.log(movies);

movies.splice(3, 2);

console.log(movies);

// Spread operator
console.log( [ ...movies, 'Batman', 'Batman 2', 'Batman 3' ] );
console.log( [ ...movies.slice(0, 4), ...movies.slice(5) ] );


const nums = [2, 4, 62, 6, 2, 8];

// WAP to print square of all numbers in array

for(let i=0; i<nums.length; i++){
    console.log( nums[i] ** 2 );
}

console.log('---------------');

const newNums = [];


for(let n of nums){
    // console.log(n**2);
    console.log(newNums);
    newNums.push(n**2);
}

console.log(newNums);

//using Map function.
console.log('-----Using Map Function----');
const result = nums.map((n) => {return n**2});
console.log(result);

const prices=[1329, 38267, 4002, 402, 5793, 352];
console.log(1329 * 0.05+1329);

//use map function to add 5% gst to all prices.

const newprices= prices.map((p)=> {return p * 0.05 + p})
console.log(newprices);



const prices2=['$2423.23','$583.39','$63.99','23.99','$12.9','$900.99'];
console.log(parseInt('$2433.23'.slice(1)));
const numprices= prices2.map((p)=> parseInt(p.slice(1)));
console.log(numprices);

//using Filter Function
const filteredPrices= prices.filter((p)=>{return p>=500 && p<=5000});
console.log(filteredPrices);

const laptops=['Dell Vostro', 'Acer Predator', 'Asus vivobook', 'HP Pavillion', 'Lenevo Thinkpad', 'Apple macbook'];

console.log('Dell Vostro'.includes('dell'));
const keyword='Asus';
const searchData = laptops.filter((title)=> {return title.toLowerCase().includes(keyword.toLowerCase())});
console.log(searchData);

