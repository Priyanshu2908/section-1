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
    { brand: 'HP', model: 'Pavillion', price: 69999, colors: ["black","silver"]},
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

