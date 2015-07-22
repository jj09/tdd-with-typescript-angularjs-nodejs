/// <reference path="../../typings/angularjs/angular.d.ts" />

module Voting {
	'use strict';

	angular.module('voting', []);

	export function getModule(): ng.IModule {
		return angular.module('voting');
	}
}
