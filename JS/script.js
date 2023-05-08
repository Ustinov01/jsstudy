const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovideDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
}



for (let i = 0; i < 2; i++) {
let a = prompt('Один из последних просмотренных фильмов?', '');
let b = prompt('На сколько оцените его?');
if (a != '' && b != '' && a != null && b != null && a.length < 50) {
    personalMovideDB.movies[a] = b;
    console.log('done');
} else {
    console.log('error');
    i--;
}

}
if (personalMovideDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов') 
} else if (personalMovideDB.count >= 10 && personalMovideDB.count < 30) {
    console.log('Вы классический зритель') 
} else if (personalMovideDB.count >= 30) {
    console.log('Вы киноман')
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovideDB);


