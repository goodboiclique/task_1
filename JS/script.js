'use strict';



const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   ganers: [],
   privat: false,
   start: function(){
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '');
      while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
         personalMovieDB.count  = prompt('Сколько фильмов вы уже посмотрели?', '');
      }
   },
   rememberMyFilms: function(){
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
   },
   detectPersonalLevel: function(){
      if(personalMovieDB.count < 10){
         alert('Просмотрено довольно мало фильмов');
      } else if (personalMovieDB.count < 30){
         alert('Вы класический зритель');
      } else if (personalMovieDB.count > 50){
         alert('Вы киономан');
      } else {
         alert('Произошла ошибка');
      }
   },
   howMyDb: function(hidden){
      if(!hidden){
         console.log(personalMovieDB);
      }
   },
   toggleVisibleMyDB: function(){
      if(personalMovieDB.privat){
         personalMovieDB.privat = false;
      } else{
         personalMovieDB.privat = true;
      } 
   },
   writeYouGeners: function(){
      for(let i = 1; i <= 3; i++){
         let ganre = prompt(`Введите ваш любимый жанр под номером ${i}`);

         if(ganre == '' || ganre == null){
            console.log('Вы ввели неверное значение или не ввели его вовсе');
            i--;
         } else {
            personalMovieDB.ganers[i - 1] = ganre;
         }
      }
      personalMovieDB.ganers.forEach((item, i) => {
         console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
   }
};









