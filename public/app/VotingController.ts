/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="app.ts" />

module Voting {
	'use strict';

	class VotingController {
		private scope: ng.IScope;
		private http: ng.IHttpService;

		constructor($scope: ng.IScope, $http: ng.IHttpService) {
			this.scope = $scope;
			this.http = $http;
			this.getVotes();
		}

		vote(index: number): void {
			this.http.post('/api/vote/' + index, null).success(data => {
				this.scope['votes'] = data;
			})
		}

		getVotes(): void {
			this.http.get('/api/getVotes').success(data => {
				this.scope['votes'] = data;
			});
		}
	}

	getModule().controller('votingController', [
		'$scope',
		'$http',
		($scope, $http) => new VotingController($scope, $http)
	]);
}

