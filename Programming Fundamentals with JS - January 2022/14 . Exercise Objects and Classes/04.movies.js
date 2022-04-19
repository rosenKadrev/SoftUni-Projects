// function movies(input) {

//     let listOfMovies = [];
//     for (let lines of input) {
//         if (lines.includes('addMovie')) {
//             let nameOfMovie = lines.split('addMovie ')[1];
//             listOfMovies.push({ name: nameOfMovie });
//         } else if (lines.includes('directedBy')) {
//             let info = lines.split('directedBy ');
//             let name = info[0].trim();
//             let director = info[1];
//             let movie = listOfMovies.find((movieObj) => movieObj.name === name);
//             if (movie) {
//                 movie.director = director;
//             }
//         } else if (lines.includes('onDate')) {
//             let info = lines.split('onDate ');
//             let name = info[0].trim();
//             let date = info[1];
//             let movie = listOfMovies.find((movieObj) => movieObj.name === name);
//             if (movie) {
//                 movie.date = date;
//             }
//         }
//     }
//     for (let movie of listOfMovies) {
//         if (movie.name && movie.director && movie.date)
//             console.log(JSON.stringify(movie));
//     }
// }
// movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
// movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo'])


// function movies(array) {
//     let movieObject = {};
//     for (let lines of array) {
//         if (lines.includes('addMovie')) {
//             let nameOfMovie = lines.split('addMovie ')[1];
//             movieObject[nameOfMovie] = { name: nameOfMovie };
//         } else if (lines.includes('directedBy')) {
//             let directedByArray = lines.split('directedBy ');
//             movieObject[directedByArray[0].trim()] = {
//                 ...movieObject[directedByArray[0].trim()],
//                 director: directedByArray[1]
//             };

//         } else if (lines.includes('onDate')) {
//             let date = lines.split('onDate ');
//             movieObject[date[0].trim()] = {
//                 ...movieObject[date[0].trim()],
//                 date: date[1]
//             };
//         }
//     }
//     for (let key in movieObject) {
//         if (Object.keys(movieObject[key]).length == 3) {
//             console.log(JSON.stringify(movieObject[key]));
//         }
//     }
// }
// movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
// movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo'])



function movies(arrWithMoviesInfo) {

    let newObjForFill = {};

    for (let movieInfo of arrWithMoviesInfo) {

        if (movieInfo.includes('addMovie')) {
            let filmName = movieInfo.split('addMovie ')[1];
            newObjForFill[filmName] = { name: filmName };
        } else if (movieInfo.includes('directedBy')) {
            let filmProducerAndName = movieInfo.split(' directedBy ');
            let newFilmName = filmProducerAndName[0];
            let filmProducer = filmProducerAndName[1];
            newObjForFill[newFilmName] = {
                ...newObjForFill[newFilmName],
                director: filmProducer
            }
        } else if (movieInfo.includes('onDate')) {
            let filmDateAndName = movieInfo.split(' onDate ');
            let newFilmNameOne = filmDateAndName[0];
            let filmDate = filmDateAndName[1];
            newObjForFill[newFilmNameOne] = {
                ...newObjForFill[newFilmNameOne],
                date: filmDate
            }
        }
    }
    for (let key in newObjForFill) {
        let value = newObjForFill[key];
        if (value.name && value.director && value.date) {
            console.log(JSON.stringify(value));
        }
    }
}
movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'])
    // movies(['addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo'])