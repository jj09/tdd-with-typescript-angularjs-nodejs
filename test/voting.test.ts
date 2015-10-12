/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />

import chai = require('chai');
var expect = chai.expect;
import voting = require('../controllers/voting');


describe('my voting app', () => {
	beforeEach(() => {
		// Arrange
		voting.init(['Awesome', 'Ok', 'Bad']);
	});

	it('should be able to get votes', () => {
		// Act
		var result = voting.getVotes();

		// Assert
		expect(result).eql([{ label: 'Awesome', votes: 0 }, { label: 'Ok', votes: 0 }, { label: 'Bad', votes: 0 }]);
		expect(result.map(item => item.label)).eql(['Awesome', 'Ok', 'Bad']);
		expect(result.map(item => item.votes).reduce((a, b) => a + b)).to.be.equal(0);
	});

	it('should be able to vote', () => {
		// Act
		voting.vote(0);

		// Assert
		expect(voting.getVotes().map(item => item.votes).reduce((a, b) => a + b)).to.be.equal(1);
		expect(voting.getVotes()[0].votes).to.be.equal(1);
	});
});