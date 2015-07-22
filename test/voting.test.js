/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
var chai = require('chai');
var voting = require('../controllers/voting');
var expect = chai.expect;
describe('voting app', function () {
    describe('init', function () {
        it('should initialize with 0 votes', function () {
            // Arrange			
            // Act
            voting.init(['Awesome', 'Ok', 'Bad']);
            // Assert
            expect(voting.getTotalVotes()).equals(0);
        });
        it('should be able to get votes', function () {
            // Arrange
            voting.init(['Awesome', 'Ok', 'Bad']);
            // Act
            var result = voting.getVotes();
            // Assert
            expect(result.map(function (item) { return item.label; })).eql(['Awesome', 'Ok', 'Bad']);
            expect(result.map(function (item) { return item.votes; }).reduce(function (a, b) { return a + b; })).to.be.equal(0);
        });
    });
    describe('voting', function () {
        beforeEach(function () {
            // Arrange
            voting.init(['Awesome', 'Ok', 'Bad']);
        });
        it('should increase total number of votes', function () {
            // Act
            voting.vote(1);
            // Assert
            expect(voting.getTotalVotes()).equals(1);
        });
    });
});
