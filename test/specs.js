var expect = require('chai').expect;
var system = require('../Air-Traffic-Control-System');

//configuration from system module
// system = {
//   airCTRL: AirTrafficController,
//   genAC: AirCraft,
//   getACs: getAirCraft 
// }

describe('AirCraft', function(){  
  describe('constructor', function(){
    var ac = new system.genAC('p','s');
    it('should return an object', function(){
      expect(ac).to.be.a('object');
    });
    it('should have a "type" and "size" properties', function(){
      expect(ac).have.keys(['type','size']);
    })
  });
  describe('types', function(){
    var passenger = new system.genAC('p','s');
    it('should accept "p" type', function(){
      expect(passenger.type).to.eql('p');
    });
    var cargo = new system.genAC('c', 's');
    it ('should accept "c" type', function(){
      expect(cargo.type).to.eql('c');
    });
  });
  describe('sizes', function(){
    var small = new system.genAC('p','s');
    it('should accept "s" size', function(){
      expect(small.size).to.eql('s');
    });
    var large = new system.genAC('c', 'l');
    it ('should accept "l" size', function(){
      expect(large.size).to.eql('l');
    });
  });
});

//TODO
describe('AirTrafficController', function(){
  describe('constructor', function(){
    it('', function(){
      //TODO
    });
  });
});