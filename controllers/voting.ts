import Vote = require('../models/Vote');

var votes: Vote[] = [];

export function init(labels: string[]): void {
	votes = labels.map(label => new Vote(label));
}

export function getVotes(): Vote[] {
	return votes;
}

export function vote(index: number): void {
	votes[index].votes++;
}