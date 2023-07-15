const user={
    name: 'RAJU',
    email: 'raju12@mail.com',
    password: '45678'

};

console.log(user.email);
console.log(typeof user);

console.log(user['password']);

user.address='Lucknow';
console.log(user);
user.password='asdfbvcfrtrdf';
console.log(user);

for (let k of Object.keys(user)){
    console.log(k);
}
for (let k of Object.entries(user)){
    console.log(k);
}
for (let k of Object.values(user)){
    console.log(k);
}

const laptop=[
    { brand: 'HP', model: 'Pavillion', price: 29999, colors: ["black","silver"]},
    { brand: 'LENEVO', model: 'Thinkpad', price: 79999, colors: ["grey","red"]},
    { brand: 'ASUS', model: 'Vivoboook', price: 89999, colors: ["blue","grey"]},
    {
        brand:"ASUS",
        model: "ultrabook",
        price: 89999,
        colors:['silver','black', 'white'],


    
    },
];

console.log(laptop [3].price);
console.log(laptop [3].colors[0]='gray' );
console.log(laptop);
for(let lap of laptop){
    console.log(lap.brand);
}

const res1 = laptop.filter( (l) => {return l.price < 60000});


console.log(res1);

console.log(['red', 'blue', 'black'].includes('green'));

const res2 =laptop.filter((lappy)=>{return lappy.colors.includes('black')})
console.log(laptop);
console.log(res2);

//Q1. Find the sum of all laptop prices.
console.log('--------Q1.-----'  );

let totalprice = 0;

for (let i = 0; i < laptop.length; i++) {
  totalprice +=  laptop[i].price;
  
}

console.log(totalprice);

//Q2.Add 10% discount to all laptop price. (use map)
const discountedLaptops = laptop.map(laptop => {
    const discountedPrice = laptop.price * 0.9; return {...laptop, price: discountedPrice };
  });
  
  console.log(discountedLaptops);


  //Q3.Filter all the laptop having price more than 40000 and 60000 (use filter)

  const res3 = laptop.filter( (l) => {return l.price >40000 && l.price<60000});
  console.log(res3);
