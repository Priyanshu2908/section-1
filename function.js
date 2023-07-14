function addNums(a,b){
   var c= a+b;

};

addNums(2345,345);


//  console.log(c);

const getPercentage = function(m1,m2,m3,m4){
    let total= m1+m2+m3+m4;
    let percentage = total/5;
    console.log(percentage, '%');
    
}
getPercentage(32,54,65,76);

//new in ES6
const getFact = (num)=>{
    let f=1;
    for(let i=1;i<num;i++){
        f*=1;

    };
    console.log(f);
    return f;
}
const result= getFact(5);

console.log(result);