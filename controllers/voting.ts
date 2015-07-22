import Vote = require('../models/Vote');

var votes: Array<Vote>;

export function init(data: Array<string>): void {
	votes = data.map(label => new Vote(label));
}

export function getVotes(): Array<Vote> {
	return votes;
}

export function vote(index: number): void {
	votes[index].votes++;
}
