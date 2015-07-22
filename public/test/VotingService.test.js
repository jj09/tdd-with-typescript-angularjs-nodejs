/// <reference path='../../typings/angularjs/angular-mocks.d.ts' />
/// <reference path='../../typings/jasmine/jasmine.d.ts' />
/// <reference path='../VotingService.ts' />
describe('Voting Service', function () {
    var $httpBackend;
    var votingService;
    var voteUrl = '/api/vote';
    var getVotesUrl = '/api/getVotes';
    beforeEach(inject(function (_$httpBackend_, _votingService_) {
        angular.mock.module('voting');
        $httpBackend = _$httpBackend_;
        votingService = _votingService_;
    }));
    describe('Getting votes', function () {
        it('Should call backend', function () {
            // Arrange
            $httpBackend.expectGET(voteUrl).respond(200);
            // Act
            votingService.getVotes(null);
            // Assert
            $httpBackend.verifyNoOutstandingExpectation();
        });
    });
});
