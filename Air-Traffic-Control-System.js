/*A software subsystem of an air-traffic control system is defined to manage a queue of aircraft (AC) 
in an airport. The aircraft queue is managed by a process which responds to three types of requests:

- system boot used to start the system.

- enqueue aircraft used to insert a new AC into the system.

- dequeue aircraft used to remove an AC from the system.


AC’s have the following properties:

AC type: Passenger or Cargo

AC size: Small or Large

The process which manages the queue of AC’s satisfies the following:

There is no limit on the number of AC’s it can manage (could be tens of thousands)

Dequeue aircraft requests result in selection of one AC for removal such that:

Passenger AC’s have removal precedence over Cargo AC’s

Large AC’s of a given type have removal precedence over Small AC’s of the same type.

Earlier enqueued AC’s of a given type and size have precedence over later enqueued AC’s of the same type and size.*/



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
  return 'air traffic controller on line'
}

AirTrafficController.prototype.enqueue = function(AC) {
  //enqueue aircraft used to insert a new AC into the system.

  if (this.status && AC) {
    var arrivingAC = AC.type + AC.size;
    if (!this.head[arrivingAC]) {
      this.head[arrivingAC] = AC;
    }
    if (this.tail[arrivingAC]) {
      this.tail[arrivingAC].next = AC;
    }
    this.tail[arrivingAC] = AC;
    return 'AC enqueued successfully';
  } else {
    return 'offline or invalid AC'
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
      return departingAC;
    }
    //clear small, passenger ac second
    if (this.head.ps) {
      departingAC = this.head.ps;
      this.head.ps = this.head.ps.next || null;
      return departingAC;
    }
    //clear large, cargo ac third
    if (this.head.cl) {
      departingAC = this.head.cl;
      this.head.cl = this.head.cl.next || null;
      return departingAC;
    }
    //clear small, cargo ac fourth
    if (this.head.cs) {
      departingAC = this.head.cs;
      this.head.cs = this.head.cs.next || null;
      return departingAC;
    }
    return 'no AC to dequeue';
  } else {
    return 'offline'
  }
}

//valid types: 'p' or 'c';
//valid sizes: 's' or 'l';
function AirCraft(type, size) {
  if ((type === 'p' || type === 'c') && (size === 's' || size === 'l')) {
    this.type = type;
    this.size = size;
  } else {
    throw err;
  };
}

//=================================
//helper function to generate aircraft for testing.
function getAirCraft(num) {
  var types = ['p', 'c'];
  var sizes = ['l', 's'];
  var arr = [];
  while (num > 0) {
    type = types[Math.round(Math.random())];
    size = sizes[Math.round(Math.random())];
    arr.push(new AirCraft(type, size));
    num--;
  }
  return arr;
}

module.exports = {
  airCTRL: AirTrafficController,
  genAC: AirCraft,
  getACs: getAirCraft 
}
