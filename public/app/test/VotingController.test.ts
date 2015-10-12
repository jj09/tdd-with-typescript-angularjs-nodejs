/// <reference path='../../../typings/angularjs/angular-mocks.d.ts' />
/// <reference path='../../../typings/jasmine/jasmine.d.ts' />
/// <reference path='../votingController.ts' />

describe('VotingController', () => {
	var $rootScope;
	var scope;
	var $httpBackend;
	var voteUrl = '/api/vote';
	var getVotesUrl = '/api/getVotes';
	var ctrl = null;

	beforeEach(angular.mock.module('voting'));

	beforeEach(inject((_$httpBackend_, $rootScope) => {
		$httpBackend = _$httpBackend_;
		scope = $rootScope.$new();
	}));

	it('Should get votes', inject(($controller) => {
		// Arrange
		var expectedResult = [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 0 }, { label: "Bad", votes: 0 }];
		$httpBackend
			.expectGET(getVotesUrl)
			.respond(200, expectedResult);
	
		// Act
		ctrl = $controller('votingController', {
			$scope: scope
		});
		$httpBackend.flush();		
	
		// Assert
		expect(scope.votes).toEqual(expectedResult);
	}));

	it('Should vote', inject(($controller) => {
		// Arrange
		$httpBackend
			.expectGET(getVotesUrl)
			.respond(200, [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 0 }, { label: "Bad", votes: 0 }]);
		ctrl = $controller('votingController', {
			$scope: scope
		});

		var expectedResult = [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 1 }, { label: "Bad", votes: 0 }];

		$httpBackend
			.expectPOST(voteUrl + '/1', null)
			.respond(200, expectedResult);
	
		// Act		
		ctrl.vote(1);
		$httpBackend.flush();
	
		// Assert
		expect(scope.votes).toEqual(expectedResult);
	}));


});
