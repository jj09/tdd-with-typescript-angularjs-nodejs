/// <reference path='../../../typings/angularjs/angular-mocks.d.ts' />
/// <reference path='../../../typings/jasmine/jasmine.d.ts' />
/// <reference path='../votingService.ts' />
/// <reference path='../votingController.ts' />
describe('VotingController', function () {
    var votingService;
    var $rootScope;
    var scope;
    var $httpBackend;
    var voteUrl = '/api/vote';
    var getVotesUrl = '/api/getVotes';
    var ctrl = null;
    beforeEach(angular.mock.module('voting'));
    beforeEach(inject(function (_$httpBackend_, _votingService_, $rootScope) {
        $httpBackend = _$httpBackend_;
        votingService = _votingService_;
        scope = $rootScope.$new();
    }));
    it('Should get votes from service', inject(function ($controller) {
        // Arrange
        var expectedResult = [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 0 }, { label: "Bad", votes: 0 }];
        $httpBackend.expectGET(getVotesUrl).respond(200, expectedResult);
        // Act
        ctrl = $controller('votingController', {
            $scope: scope,
            votingService: votingService
        });
        $httpBackend.flush();
        // Assert
        expect(scope.votes).toEqual(expectedResult);
    }));
    it('Should vote', inject(function ($controller) {
        // Arrange
        $httpBackend.expectGET(getVotesUrl).respond(200, [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 0 }, { label: "Bad", votes: 0 }]);
        ctrl = $controller('votingController', {
            $scope: scope,
            votingService: votingService
        });
        var expectedResult = [{ label: "Awesome", votes: 0 }, { label: "Ok", votes: 1 }, { label: "Bad", votes: 0 }];
        $httpBackend.expectPOST(voteUrl + '/1', null).respond(200, expectedResult);
        // Act		
        ctrl.vote(1);
        $httpBackend.flush();
        // Assert
        expect(scope.votes).toEqual(expectedResult);
    }));
});
