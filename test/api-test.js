var mocha   = require('mocha'),
    expect  = require('chai').expect,
    request = require('request');
    
describe('timestamp microservice', function() {
  describe('API test', function() {
    it('"/" should return a response', function() {
        request
          .get('https://fcc-api-projects-davi3blu3.c9users.io/')
          .on('response', function(response) {
            expect(response);
          })
    });
    
    it('"/:date" should return an object', function() {
        request
          .get('https://fcc-api-projects-davi3blu3.c9users.io/')
          .on('response', function(response) {
            expect(response).to.be.an("object");
          })
    });
    
  });
});