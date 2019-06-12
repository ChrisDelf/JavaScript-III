/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Bindings - value of "this" will be the windo/console Objects - built into the code
* 2. Implicit Binding - when a function is called by a preceding dot, the object before that dot is this
* 3. New binding - whenever a constructor is used, this refers to the specific instance of the ojbect that is created and returned by the constructor function.
* 4. Explicit Binding - Whenever JavaScript's call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
alert(window.innerHeight);

// Principle 2

// code example for Implicit Binding
var TheObject = function () {
  this.name = "TheObject";
  this.thing = " thing ";

};

TheObject.prototype.doStuff = function (action) {

  console.log(this.name + " is " + action + "! " )
}
var obj = new TheObject();

obj.doStuff(" Bad ");

// Principle 3

// code example for New Binding
var obj2 = new TheObject();

setTimeout(obj2.doStuff.bind(obj2), 1000, 'awesome');


// Principle 4

// code example for Explicit Binding

var swimmer = {name:'Jones', MyFavoriteActivity: ' swimming ' };

TheObject.prototype.doStuff.call (swimmer, swimmer.MyFavoriteActivity);
