//Task 1
// const arrStr1 = ['a', 'b', 'c', 'd'];
// const arrStr2 = [];

// for (let i = 0; i < arrStr1.length; i++) {
// 	arrStr2[i] = arrStr1[i];
// 	arrStr2[0] = arrStr1[3];
// 	arrStr2[1] = arrStr1[0];
// 	arrStr2[2] = arrStr1[3];
// 	arrStr2[3] = arrStr1[0];
// }
// console.log(arrStr2);


//Task 2
// const arrStr1 = ['a', 'b', 'c', 'd'];
// const arrStr2 = [];

// arrStr1.reverse();

// for (let i = 0; i < arrStr1.length; i++) {
// 	arrStr2[i] = arrStr1[i];
// }
// console.log(arrStr2);


//Task 3
// const arrStr1 = ['a', 'b', 'a', 'b'];

// arrStr1.unshift(arrStr1[1]);
// arrStr1.splice(4,1);

// for (let i = 0; i < arrStr1.length; i++) {
	
// }
// console.log(arrStr1);


//Task 4
// const arrStr1 = ['a', 'b', 'c', 'd'];
// const arrStr2 = [];

// for (let i = 0; i < arrStr1.length; i++) {
// 	arrStr2.push(arrStr1[i] + (i + 1) );

// }
// console.log(arrStr2);


//Task 5
const arrStr1 = ['a', 'b', 'c', 'd'];
const arrStr2 = [];

arrStr1.push(arrStr1[0]);

for (let i = 0; i < arrStr1.length; i++) {
	arrStr2.push(arrStr1[i] + arrStr1[i+1]);

}
console.log(arrStr2);



//Task 6
