// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log("Loaded Render.js");

var gpio = require('rpi-gpio');

gpio.setup(7, gpio.DIR_IN, readInput);

function readInput() {
    gpio.read(7, function(err, value) {
        console.log('The value is ' + value);
    });
}




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
