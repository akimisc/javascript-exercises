function getTheTitles(books) {
    let titlesList = [];

    for (let i = 0; i < books.length; i++) {
        titlesList.push(books[i].title);
    }
    return titlesList;
}

module.exports = getTheTitles;
