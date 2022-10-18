const movies = require('./movise.json').movies
let playList = []

function addMovie(movies, id) {
    return playList.push(movies[movies.findIndex(e => e?.id === id)])
}

function deleteMovie(id) {
    return playList = playList.filter(e => e.id !== id)
}

function swapMovie(index_one, index_two) {
    return [playList[index_one], playList[index_two]] = [playList[index_two], playList[index_one]]
}

addMovie(movies, 1)
addMovie(movies, 2)
addMovie(movies, 3)
addMovie(movies, 4)
addMovie(movies, 5)

console.log(playList)

swapMovie(2, 4)

playList.forEach(e => console.log(e.id))