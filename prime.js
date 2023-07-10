
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