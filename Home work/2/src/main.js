/**
 * Created by Dreams on 18.05.2017.
 */
/*

 1. Составить предложение из нижестоящих переменных:
 "Сколько нужно программистов чтобы сделать проект ? 1, 25, команда"
 */

let numbers = [25, 1];
let project = 'проект';
let team = `команда`;
let howMuch = 'Сколько';
let sentence = 'нужно программистов чтобы сделать проект ?';

let task1 = howMuch + " " + sentence + numbers[1] + ', '+ numbers[0]+ ', '+ team;
console.log(task1);

/*
 2. Составьте предложение из представленного массива
 и выведите предложение в консоль;
 "Так, когда Будда достиг Просветления, он обнаружил, что больше не ощущает себя мишенью.
 Он не был больше ни телом, к которому рано или поздно ..."
 */

let array = [
	'Он',
	'был больше ни телом, к которому рано или поздно',
	'он обнаружил',
	'не',
	'Так, когда Будда достиг Просветления',
	'...',
	'что больше',
	'ощущает себя мишенью',
	'не'
];

let homeSentence = `"${array[4]}, ${array[2]}, ${array[6]} ${array[3]} ${array[7]}.\n
Он не был больше ни телом, к которому рано или поздно ${array[5]}"`;
console.log(homeSentence);

/*
 3. Добавьте свойста 4 новых свойства в объект используя
 квадратные скобки и точку.
 */

let myObj = {};
myObj['name'] = 'Класс';
myObj['count'] = 15;
myObj.male = 10;
myObj.female = 5;

console.log(myObj);

/*
 4. Используя метод .slice, добавьте недостающие символы в строку
 */

let sliceString = 'Ytube';
var $ = sliceString.slice(0,1)+'ou' + sliceString.slice(1,2).toUpperCase() + sliceString.slice(2,5);
console.log($);// YouTube


let frameworks = [4.7, 'Angular', '4Angular', 'React/Redux'];
let x = 'Google released new version ' + frameworks[1] + ' ' + Math.floor(frameworks[0]) +
		'\. But real speed is ' + `${frameworks[frameworks.length - 1]}!`;

console.log(x);


//https://dorey.github.io/JavaScript-Equality-Table/
