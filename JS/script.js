'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   ganers: [],
   privat: false
};
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

if(personalMovieDB.count < 10){
   alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30){
   alert('Вы класический зритель');
} else if (personalMovieDB.count > 50){
   alert('Вы киономан');
} else {
   alert('Произошла ошибка');
}

console.log(personalMovieDB);

