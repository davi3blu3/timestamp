var mocha   = require('mocha'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../server'),
    should = chai.should();
  
chai.use(chaiHttp);
    
describe('timestamp API tests', function() {
    it('should return a response', function() {
      chai.request(server)
        .get('/')
        .end((err, res) => {
            expect(err)
            res.should.have.status(200);
            done();
        });
    });
});