# TDD with TypeScript, AngularJS, and Node.js

Code samples from presentation 

http://jj09.net/building-large-scale-web-applications-with-typescript

# installation

    npm install
    tsd reinstall

# continuous compilation and server side tests running

    gulp

# running node tests with mocha

    mocha
    gulp test
    
# running AngularJS tests with Karma and Jasmine

    karma start
    
# running web app

    node server.js
    
# running end to end tests with Protractor

    webdriver-manager update 
    webdriver-manager start
    protractor protractor.conf.js