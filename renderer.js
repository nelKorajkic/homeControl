// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log("Loaded Render.js");

var gpio = require("pi-gpio");

gpio.read(40, function(err, value) {
    if(err) throw err;
    console.log(value);
    if (value === 0) {
      gpio.open(40, "output", function(err) {		// Open pin 40 for output
          gpio.write(40, 1, function() {			// Set pin 40 high (1)
              gpio.close(40);						// Close pin 40
          });
      });
    }
    else {
      console.log("The pin is already set to 1 (high)");
    }
});




//When you turn on the system check to see if any lights are on
function setDefaultsForLights() {

}

$('input[type=checkbox]').on('click', function(){
    // console.log(this.name);
    console.log("test2");
});

$(document).on('click.bs.toggle', 'div[data-toggle^=toggle]', function(e){
  var $checkbox = $(this).find('input[type=checkbox]');
  console.log($checkbox[0].name);
});
