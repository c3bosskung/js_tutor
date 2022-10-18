const books = require('./bookList').bookList;
//เริ่มเขียนต่อจากตรงนี้

function findByTitle(title) {
    return books.filter(e => e?.title.includes(title))
}
function findByAuthors(author) {
    return books.filter((e) => {
        for (a of e.authors) {
            return a.includes(author)
        }
    })
}
function findByCategories(categories) {
    return books.filter((e) => {
        for (a of e.categories) {
            return a.includes(categories)
        }
    })
}
function findByPublishedDate(date) {
    return books.filter(e => e.publishedDate?.$date === date)
}

console.log(findByTitle("Android in Action, Second Edition"));
console.log(findByAuthors("W. Frank Ableson"))
console.log(findByCategories("Java"));
console.log(findByPublishedDate("2004-11-01"));