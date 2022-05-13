'use strict';

let numberOfFilms;

function start(){
   numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
   while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
      numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}

start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   ganers: [],
   privat: false
};

function rememberMyFilms(){
   for(let i = 0; i < 2; i++){
      let   a = prompt('Один и последних просмотренных фильмов?'),
            b = prompt('На сколько оцените его?');
   
      if (a != null && b != null && a != '' && b != '' && a.length < 50){
         personalMovieDB.movies[a] = b;
         console.log('Done');
      } else{
         console.log('error');
         i--;
      }
   }
}

rememberMyFilms();

function detectPersonalLevel(){
   if(personalMovieDB.count < 10){
      alert('Просмотрено довольно мало фильмов');
   } else if (personalMovieDB.count < 30){
      alert('Вы класический зритель');
   } else if (personalMovieDB.count > 50){
      alert('Вы киономан');
   } else {
      alert('Произошла ошибка');
   }
}

detectPersonalLevel();

function showMyDb(hidden){
   if(!hidden){
      console.log(personalMovieDB);
   }
}

showMyDb(personalMovieDB.privat);

function writeYouGeners(){
   for(let i = 1; i <= 3; i++){
      personalMovieDB.ganers[i - 1] = prompt(`Введите ваш любимый жанр под номером ${i}`);
   }
}

writeYouGeners();







