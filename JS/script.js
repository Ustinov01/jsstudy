let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


start();
let personalMovideDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false    
}





function rememberMyFilms() {
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
}
 rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovideDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов') 
    } else if (personalMovideDB.count >= 10 && personalMovideDB.count < 30) {
        console.log('Вы классический зритель') 
    } else if (personalMovideDB.count >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();



function showMyDB(hidden) {
    if (hidden == false) {
        console.log(personalMovideDB);
    }
}

showMyDB(personalMovideDB.privat);


function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let question = prompt(`Ваш любимый жанр под номером ${i + 1}`)
        personalMovideDB.genres[i] = question;
    }
}

writeYourGenres();