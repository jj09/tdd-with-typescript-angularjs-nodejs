/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="app.ts" />
var Voting;
(function (Voting) {
    'use strict';
    var VotingController = (function () {
        function VotingController($scope, $http) {
            this.scope = $scope;
            this.http = $http;
            this.getVotes();
        }
        VotingController.prototype.vote = function (index) {
            var _this = this;
            this.http.post('/api/vote/' + index, null).success(function (data) {
                _this.scope['votes'] = data;
            });
        };
        VotingController.prototype.getVotes = function () {
            var _this = this;
            this.http.get('/api/getVotes').success(function (data) {
                _this.scope['votes'] = data;
            });
        };
        return VotingController;
    })();
    Voting.getModule().controller('votingController', [
        '$scope',
        '$http',
        function ($scope, $http) { return new VotingController($scope, $http); }
    ]);
})(Voting || (Voting = {}));
