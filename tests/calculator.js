let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {

    it('addition test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/')

        //element(by.model('first')).sendKeys('2');
        homepage.enterFirstName('4');

        //element(by.model('second')).sendKeys('3');
        homepage.enterSecondName('3');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','5'));
        homepage.verifyResult('7');


        browser.sleep(4000)
    });


});