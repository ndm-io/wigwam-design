const expect = require('chai').expect;

const controllers = require('../server/src/routes/controllers');

describe('Server Router Controllers', function () {

   describe('Api routes', function () {

       it('is an array of objects', function () {

           expect(controllers).to.be.a('array');

       });

       it('has objects with route, method and handler keys', function () {

           controllers.map(function (controller) {
               expect(controller).to.have.all.keys('route', 'method', 'handler');
           });

       });

       it('has objects with handler functions', function () {

           controllers.map(function (controller) {
               const handler = controller.handler;
               expect(handler).to.be.a('function');
           });

       });

       it('has routes which begin with /api', function () {

           controllers.map(function (controller) {
               const route = controller.route;
               expect(route.substring(0,4)).to.equal('/api');
           });

       });

   });

});