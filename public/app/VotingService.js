/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="app.ts" />
var Voting;
(function (Voting) {
    'use strict';
    var VotingService = (function () {
        function VotingService($http) {
            this.http = $http;
        }
        VotingService.prototype.vote = function (index, cb) {
            this.http.post('/api/vote/' + index, null).success(cb);
        };
        VotingService.prototype.getVotes = function (cb) {
            this.http.get('/api/getVotes').success(cb);
        };
        return VotingService;
    })();
    Voting.VotingService = VotingService;
    Voting.getModule().service('votingService', [
        '$http',
        function ($http) { return new VotingService($http); }
    ]);
})(Voting || (Voting = {}));
