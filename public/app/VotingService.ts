/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="app.ts" />

module Voting {
	'use strict';

	export interface IVotingService {
		vote(index: number, cb: (data) => void): void;
		getVotes(cb: (data) => void): void;
	}

	export class VotingService implements IVotingService {
		private http: ng.IHttpService;

		constructor($http: ng.IHttpService) {
			this.http = $http;
		}

		vote(index: number, cb: (data) => void): void {
			this.http.post('/api/vote/' + index, null).success(cb);
		}

		getVotes(cb: (data) => void): void {
			this.http.get('/api/getVotes').success(cb);
		}
	}

	getModule().service('votingService', [
		'$http', 
		($http) => new VotingService($http)
	]);
}
