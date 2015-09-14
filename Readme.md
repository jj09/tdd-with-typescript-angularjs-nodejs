# TDD with TypeScript, AngularJS, and Node.js

Code samples from presentation 

http://jj09.net/tdd-with-typescript-angularjs-and-node-js/

Website

http://tddvoting.azurewebsites.net/

## installation

    npm install
    tsd reinstall

## continuous compilation, server side tests running (mocha), and client side tests running (karma and jasmine) 

    gulp

## running node tests with mocha

    mocha
    gulp test
    
## running AngularJS tests with Karma and Jasmine

    karma start
    
## running web app

    node server.js
    
## running end to end tests with Protractor

    webdriver-manager update 
    webdriver-manager start
    protractor protractor.conf.js