exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test-ui/e2e.test.js'],
  capabilities: {
    browserName: 'firefox'
  }
};