module.exports = {
    before(browser) {
        browser
            .url('http://testshop.sedtest-school.ru/')
            .waitForElementVisible('body', 'Заголовок загружен')       
            .assert.titleEquals('TestGym')
            .assert.textContains("h4", "Каталог");
    },        

    after(browser) {  
        browser.end();  
    },

'Search for word': function(browser) {
    let word = browser.globals.searchText;  
        
        browser.checkInput('[name="search"]')

        browser
            .setValue('[name="search"]', ['Ручка', browser.Keys.ENTER]); 

         browser
            .waitForElementVisible('body', 'Заголовок загружен')
            .assert.urlContains('/testshop.sedtest-school')
            .assert.titleContains('TestGym', 'title ok')
            .assert.textContains(".card-title a", "Ручка"); 
       
        },

};    