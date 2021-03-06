/*1. Переместите 0 в конец массива, остальные числа должны остаться
неизменными
	.сoncat();
example:
	[1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
	[ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
	[ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
*/

let arr1 = [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ]
//["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0];

function moveZeroToEnd(arr) {
	let zeros = [];
	let myArray = [];
	for(let i=0; i<arr.length;i++) {
		let elem = arr[i];
		if(elem === 0){
			zeros.push(elem);
		} else {
			myArray.push(elem);
		}
	}
	return myArray.concat(zeros);
}
console.log(moveZeroToEnd(arr1));