const someWebpackModule = `module.exports = {
    context: '',
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

class City {
	constructor(cityName) {
		this.cityName = cityName;
	}
	method() {}
	static init(name) {
		const defaultCity = name || 'Kharkiv';

		return new City(defaultCity);
	}
}

var Kharkiv = City.init('Kiev');
// { cityName: 'Kharkiv' }

/* Распарсите строку и замените TASK - 1
 %%HOMEDIR%% -> './JavaScript-Basic
 %%APP_DIR%% -> 'fixtures/src
 %%APPNAME%% -> 'app.js'

 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам

 Сделайте несколько экземпляров данной функции
 *
 *
 * */

/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

/*
 *
 * TASK - 3
 *
 * Измените startTimer таким образом, чтобы числа отобразились последовательно
 * с 10 до 1
 * Изменять функцию serverResponse и шапку цикла - нельзя
 *
 * */

let startTimer = () => {
	let timer = 1000;
	let serverResponse = i => {
		return setTimeout(function() {
			console.log('zzzz');
			console.log(i);
		}, (timer = timer / 2));
	};
	for (let i = 10; i >= 1; i--) {
		serverResponse(i);
	}
};

// @ SUPER

/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

/*
 debounce

 */

class DataBase {
	constructor() {
		this.timerInterval = 5000;
		this.counter = 5;
	}
	query() {
		if (this.timer) {
			clearTimeout(this.timer);
			// clearInterval(this.interval);
		}
		// this.interval = setInterval(() => {
		//   console.log(this.counter--);
		// }, 1000);
		this.timer = setTimeout(() => {
			this.counter = 5;
			console.log('The web server is down');
			// clearInterval(this.interval);
		}, this.timerInterval);
	}
}

const dataBase = new DataBase();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')