module.exports = {
    before(browser) {
        browser
            .page.shop()
            .navigate()
            .waitForElementVisible('body', 'Заголовок загружен')       
            .assert.titleEquals('TestGym')
            .assert.textContains("h4", "Каталог"); 

    }, 

    after(browser) {  
      browser.end();  
    },


    'Search for word': function(browser) {  
       let word = browser.globals.searchText;
      
        browser
            .page.shop()    
            .search('Яблоко')
            .waitForElementVisible('body', 'Заголовок загружен')
            .assert.urlContains('/testshop.sedtest-school')
            .assert.titleContains('TestGym', 'title ok')
            .assert.textContains('@href', 'Супер яблоко');

        },
};