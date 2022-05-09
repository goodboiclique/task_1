'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   ganers: [],
   privat: false
};

const a = prompt('Один и последних просмотренных фильмов?'),
      b = prompt('На сколько оцените его?'),
      c = prompt('Один и последних просмотренных фильмов?'),
      d = prompt('На сколько оцените его?');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

