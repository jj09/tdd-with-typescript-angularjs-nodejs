/// <reference path="../typings/angular-protractor/angular-protractor.d.ts" />
/// <reference path="../typings/jasmine/jasmine.d.ts" />

describe('Voting', () => {
    it('should increase vote count', () => {
        // Arrange
        browser.get('http://localhost:3000');
        var firstElement = element(by.css('#votes ul:first-child a'));

        // Act
        firstElement.click();

        // Assert
        expect(firstElement.getText()).toEqual('Awesome (1)');
    });
});