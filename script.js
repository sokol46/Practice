const numberOfFilms = +prompt('How many films did you watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх переглянутих фільмів?', ''),
      b = prompt('Як ви його оціните?', ''),
      c = prompt('Один з останніх переглянутих фільмів?', ''),
      d = prompt('Як ви його оціните?', '');

personalMovieDB.movies[a] = b;    
personalMovieDB.movies[c] = d;
      
console.log(personalMovieDB);