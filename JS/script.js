const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovideDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
}

let a = prompt('Один из последних просмотренных фильмов?', '');
let b = prompt('На сколько оцените его?');
let c = prompt('Один из последних просмотренных фильмов?', '');
let d = prompt('На сколько оцените его?');

personalMovideDB.movies['a'] = b;
personalMovideDB.movies['c'] = d;

console.log(personalMovideDB);