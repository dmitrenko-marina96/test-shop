const pageCommands = {
    search(word) {
        this
            .setValue('@searchBar', [word, browser.Keys.ENTER])
        return this; // Return page object for chaining
    }
};
module.exports = {
    url: 'http://testshop.sedtest-school.ru/',
    commands: [pageCommands],
    elements: {
        searchBar: '[name = search]',
        href: '.card-title a',
        }
    }