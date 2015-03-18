angular.module('airport.services', [])
  .service('ATCSystem', AirTrafficController)
  .factory('GetAirCraft', function() {
    var types = ['p', 'c'];
    var sizes = ['l', 's'];
    return {
      getAC: function() {
        var type = types[Math.round(Math.random())];
        var size = sizes[Math.round(Math.random())];
        return new AirCraft(type, size);
      }
    }
  })

//AC Constructor
function AirCraft(type, size) {
  if ((type === 'p' || type === 'c') && (size === 's' || size === 'l')) {
    this.type = type;
    this.size = size;
  } else {
    throw err;
  };
}

//Air Traffic Controller Constructor
function AirTrafficController() {
  this.status = false;

  this.head = {};
  this.tail = {};
  //linked list for Large, Passenger AC
  this.head.pl = null;
  this.tail.pl = null;
  //linked list for Small, Passenger AC
  this.head.ps = null;
  this.tail.ps = null;
  //linked list for Large, Cargo AC
  this.head.cl = null;
  this.tail.cl = null;
  //linked list for Small, Cargo AC
  this.head.cs = null;
  this.tail.cs = null;
}

AirTrafficController.prototype.boot = function() {
  //system boot used to start the system.
  this.status = true;
  console.log('air traffic controller on line');
}

AirTrafficController.prototype.shutdown = function() {
  this.status = false;
  console.log('air traffic controller off line');
}

AirTrafficController.prototype.enqueue = function(AC) {
  //enqueue aircraft used to insert a new AC into the system.

  if ((this.status) && (AC.type)) {
    var arrivingAC = AC.type + AC.size;
    if (!this.head[arrivingAC]) {
      this.head[arrivingAC] = AC;
    }
    if (this.tail[arrivingAC]) {
      this.tail[arrivingAC].next = AC;
    }
    this.tail[arrivingAC] = AC;
    console.log('AC ' + arrivingAC + ' enqueued successfully');
  } else {
    console.log('offline or invalid AC');
  }
}

AirTrafficController.prototype.dequeue = function() {
  //dequeue aircraft used to remove an AC from the system.
  if (this.status) {
    var departingAC;
    //clear large, passenger ac first
    if (this.head.pl) {
      departingAC = this.head.pl;
      this.head.pl = this.head.pl.next || null;
      console.log(departingAC);
      return departingAC;
    }
    //clear small, passenger ac second
    else if (this.head.ps) {
      departingAC = this.head.ps;
      this.head.ps = this.head.ps.next || null;
      console.log(departingAC);
      return departingAC;
    }
    //clear large, cargo ac third
    else if (this.head.cl) {
      departingAC = this.head.cl;
      this.head.cl = this.head.cl.next || null;
      console.log(departingAC);
      return departingAC;
    }
    //clear small, cargo ac fourth
    else if (this.head.cs) {
      departingAC = this.head.cs;
      this.head.cs = this.head.cs.next || null;
      console.log(departingAC);
      return departingAC;
    }
    console.log('no AC to dequeue');
  } else {
    console.log('offline');
  }
}