/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />

import chai = require('chai');
import voting = require('../controllers/voting');

var expect = chai.expect;

describe('voting app', () => {
	describe('init', () => {
		it('should init properly', () => {
			// Arrange			
		
			// Act
			voting.init(['Awesome', 'Ok', 'Bad']);
		
			// Assert
			expect(voting.getVotes().length).equals(3);
		});

		it('should be able to get votes', () => {
			// Arrange
			voting.init(['Awesome', 'Ok', 'Bad']);			
		
			// Act
			var result = voting.getVotes();
		
			// Assert
			expect(result.map(item => item.label)).eql(['Awesome', 'Ok', 'Bad']);
			expect(result.map(item => item.votes).reduce((a,b) => a+b)).to.be.equal(0);
		});
	});

	describe('voting', () => {
		it('should be able to vote', () => {
			// Arrange
			voting.init(['Awesome', 'Ok', 'Bad']);
		
			// Act
			voting.vote(1);
		
			// Assert
			expect(voting.getVotes()[1].votes).equals(1);
		});
	});

});