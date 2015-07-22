var Vote = require('../models/Vote');
var votes;
function init(data) {
    votes = [];
    data.forEach(function (item) {
        votes.push(new Vote(item));
    });
}
exports.init = init;
function getTotalVotes() {
    var sum = 0;
    votes.forEach(function (vote) {
        sum += vote.votes;
    });
    return sum;
}
exports.getTotalVotes = getTotalVotes;
function vote(index) {
    votes[index].votes++;
}
exports.vote = vote;
function getVotes() {
    return votes;
}
exports.getVotes = getVotes;
