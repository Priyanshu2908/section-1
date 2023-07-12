
for (let i=100; i<=500; i++){
    if(i%7 ===0 && i%11===0){
        console.log(i);
    }
}

let n=81;
for(let i=1;i<=n/2;i++){
    if(i*i==n)
    console.log('perfect number');
}
p=10;
while(p>0){
    console.log(p);
    p--;
};
q=10;
do{
    console.log(q);
    q--;
}while(q>0);

num1 =234567;
let reverse=0;

while(num1>0){
    let d=num1%10;
    reverse = reverse*10 +d;
    num1 = parseInt(num1/10);
}
console.log(reverse);

// Q1.WAP to print all perfect square in range of 50-350.

for(let i=50; i<=350; i++){
    if((i**0.5)===parseInt(i**0.5)){
        console.log('Perfect Square');
    }
}
//Q2.WAP to convert celcius to fahrenheit and vice.
let celcius= 30.22;
console.log('fahrenheit of' + celcius+'='+(celcius*(9/5)+32));

let fahrenheit=90;
console.log('celcius of' + fahrenheit+'='+(fahrenheit-32)*(5/9));

//Q3. WAP to check the number is palindrome or not.
let num=12344321;
let r= 0;
let t=num;
while(num>0){
    let b=num%10;
    r=r*10+b;
    num=parseInt(num/10);
}
if(r===t){
console.log('palindrome nmuber', r);
}
else{
    console.log('not palindome');
}
//Q4.WAP tp print sum of all digits of a number.
let num2=123456;
let s=0;

while (num2>0){
    let digit= num2%10;
    s =s + digit;
    num2= parseInt(num2/10);
}
console.log(s);
//Q5. WAP to print fibonacci series.
let a=0;
let b=1;
console.log(a);
console.log(b);

for(let i=0; i<10; i++){
    let c= a+b;
    console.log(c);
    a=b;
    b=c;
}

const temp =30;
far_temp = (temp*9/5)+32;
console.log('temperatre for '+temp+'  degree c in fahrenheit is '+far_temp+'degree f');
console.log(`temperatre for ${temp}  degree c in fahrenheit is ${far_temp} degree f`);

let(a,b<100);
console.log(``);