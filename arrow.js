function arrow(){
	console.log("This is Normal function");
}

arrow();

const x =( ) => {
	console.log("This is x => function");
}


const  y = ( ) => {
	return 10;
}

arrow();
x();
console.log(y());

const  z = (a) => {
	return a*a;
}

console.log(z(10));

const  z1 = (a) => {return a*a};
console.log(z1(50));


function hello(param,p){
	return param(p);
}

console.log( 'Returned from hello = ', hello( (a)=>{
	return a*a;
} , 9) );

console.log( 'Returned from hello = ', hello( a => {
	return a*a;
} , 3) );

console.log( 'Returned from hello = ', hello( a => 
	{ return a*a }
 , 2) );

console.log( 'Returned from hello = ', hello( a => a*a 
 , 4) );

let b = (b1) => {return b1+b1};
console.log(b); //Function Type
console.log(b(10)); //Calling

console.log('C wala code before Running....');
console.log(typeof(c => c+c));
console.log('C wala code after Running....');


(function(){
	console.log('custom anonymous function');
})();


console.log( (c=>c+c)(25) );
let result = (c=>c+c)(25);
console.log('Result = ',result);

let w=c=>c+c;
console.log( 'iam=',w(90));


let w1=w2=w3=w4=w5=w6=c=>c+c; //Synthesis or Induction.
console.log('called from w6 =',w6(4));
console.log('called from w5 =',w5(5));
console.log('called from w1 =',w1(6));


let x1=(c,a=0)=>c+a; //Synthesis or Induction.
console.log('called from x1 = ',x1(10));
console.log('called from x1 = ',x1(10,20));
//X1 => reference for calling
//c => arguments
//c+c => return of c+c


let x2=(c,a=0)=>wish(c,a); //Synthesis or Induction.
console.log('called from x2 = ',x2(9));
console.log('called from x2 = ',x2(9,4));

//Higher order Function.
function wish(c,a){
	console.log('return from wish 1');
	console.log('return from wish 2');
	console.log('return from wish 3');
	console.log('return from wish 4');
	console.log('return from wish 5');
	return c+a;
}


let x3=(c,a=0)=>(function(c,a){
	
	console.log('return from wish 1 with x3');
	console.log('return from wish 2 with x3');
	console.log('return from wish 3 with x3');
	console.log('return from wish 4 with x3');
	console.log('return from wish 5 with x3');
	return c+a;
	
})(c,a);

console.log('called from x3 = ',x3(7));
console.log('called from x3 = ',x3(7,10));
//calling
//argument Password
//multiple statement
//return 

let x4=(c,a=0)=>{
	
	console.log('return from wish 1 with x4');
	console.log('return from wish 2 with x4');
	console.log('return from wish 3 with x4');
	console.log('return from wish 4 with x4');
	console.log('return from wish 5 with x4');
	return c+a;
	
};
console.log('called from x4 = ',x4(6));
console.log('called from x4 = ',x4(6,6));










