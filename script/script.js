const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMoviesDB.movies[prompt('Какой фильм вы смотрели последним?', '')] = prompt('Ваша оценка этому фильму');
personalMoviesDB.movies[prompt('Какой фильм вы смотрели последним?', '')] = prompt('Ваша оценка этому фильму');
console.log(personalMoviesDB.movies[0]);