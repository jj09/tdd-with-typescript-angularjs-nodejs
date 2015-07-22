/// <reference path="../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="VotingService.ts" />
var Voting;
(function (Voting) {
    'use strict';
    var VotingController = (function () {
        function VotingController($scope, votingService) {
            this.scope = $scope;
            this.votingService = votingService;
            this.getVotes();
        }
        VotingController.prototype.vote = function (index) {
            var _this = this;
            this.votingService.vote(index, function (data) {
                _this.scope['votes'] = data;
            });
        };
        VotingController.prototype.getVotes = function () {
            var _this = this;
            this.votingService.getVotes(function (data) {
                _this.scope['votes'] = data;
            });
        };
        return VotingController;
    })();
    Voting.getModule().controller('votingController', [
        '$scope',
        'votingService',
        function ($scope, votingService) { return new VotingController($scope, votingService); }
    ]);
})(Voting || (Voting = {}));
