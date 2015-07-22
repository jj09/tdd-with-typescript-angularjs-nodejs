/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="VotingService.ts" />


module Voting {
	'use strict';	

	class VotingController {
		private scope: ng.IScope;
		private votingService: Voting.IVotingService;		

		constructor($scope: ng.IScope, votingService: Voting.IVotingService) {
			this.scope = $scope;
			this.votingService = votingService;
			this.getVotes();
		}

		vote(index: number): void {
			this.votingService.vote(index, (data) => {
				this.scope['votes'] = data;
			});
		}

		getVotes(): void {
			this.votingService.getVotes((data) => {
				this.scope['votes'] = data;
			});
		}		
	}

	getModule().controller('votingController', [
		'$scope', 
		'votingService', 
		($scope, votingService) => new VotingController($scope, votingService)
	]);
}
