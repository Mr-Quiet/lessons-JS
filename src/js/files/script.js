'use strict';

// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
		- count - сюда передается ответ на первый вопрос
		- movies - в это свойство поместить пустой объект
		- actors - тоже поместить пустой объект
		- genres - сюда поместить пустой массив
		- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
		- 'Один из последних просмотренных фильмов?'
		- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:10 
		movies: {
				'logan': '8.1'
		}

Проверить, чтобы все работало без ошибок в консоли */


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


// Код возьмите из предыдущего домашнего задания



/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания


let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	while (!numberOfFilms || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};





function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', '');
		const rateFilm = prompt('На сколько оцените его?', '');
		if (!lastWatchFilm || !rateFilm || lastWatchFilm < 50) {
			i--;
			continue;
		}
		personalMovieDB.movies[lastWatchFilm] = rateFilm;
	}
}

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	}
	if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	}
	if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	}
	if (typeof (personalMovieDB.count) !== 'number' || !personalMovieDB.count) {
		console.log('Произошла ошибка');
	}
}
rememberMyFilms();
detectPersonalLevel();

function showMyDB(MovieDB) {
	if (!MovieDB.privat) {
		console.log(MovieDB);
	}
}

function writeYourGenres(MovieDB) {
	for (let i = 1; i <= 3; i++) {
		MovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
	}
}

showMyDB(personalMovieDB);
writeYourGenres(personalMovieDB);


//========================================================================================================================================================


// console.log('Vadim');
// const obj = {};
// const arr = [];

// class Solder {
// 	constructor(health = 400, armour = 100) {
// 		this.health = health;
// 		this.armour = armour;
// 	}
// 	showParam() {
// 		console.log(this.health);
// 		console.log(this.armour);
// 	}
// };

// console.log(solder);

// class SupSolder extends Solder {
// 	shoot() {
// 		console.log('Kill their');
// 	}
// };

// const john = new Solder(100, 100);
// const vadia = new SupSolder();
// console.log(john);
// vadia.shoot();
// vadia.showParam();
// john.showParam();

// console.log(vadia);



// const promise = (url) => new Promise((resolve, reject) => {
// 	fetch(url)
// 		.then(res => res.json())
// 		.then(json => resolve(json))
// 		.catch(err => reject(err.message))
// });

// const promise1 = (url) => new Promise((resolve, reject) => {
// 	fetch(url, {
// 		method: 'PUT',
// 		body: JSON.stringify({
// 			id: 1,
// 			title: 'foo',
// 			body: 'bar',
// 			userId: 1,
// 		}),
// 		headers: {
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
// 	})
// 		.then(res => res.json())
// 		.then(json => resolve(json))
// 		.catch(err => reject(err.message))
// });


// const asynProm = async (url) => {
// 	try {
// 		const res = await fetch(url);
// 		const json = await res.json();
// 		return json;
// 	}
// 	catch (err) {
// 		console.log(err.message);
// 	}
// };
// console.log(promise('https://jsonplaceholder.typicode.com/users/1').then(res => console.log(res)));

// const btn = document.querySelector('.btn');
// const cnt = document.querySelector('.cnt');
// let counter = 1;
// btn.addEventListener("click", function (e) {
// 	console.log(promise(`https://jsonplaceholder.typicode.com/users/${counter <= 10 ? counter++ : counter = 1}`).then(res => console.log(res)));
// 	promise(`https://jsonplaceholder.typicode.com/users/${counter <= 10 ? counter++ : counter = 1}`).then(res => cnt.innerHTML = `${res.username}\t`)
// });