var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var mysensor = new five.Sensor({pin: "A0"});
  
  mysensor.on("data", function() {
    console.log(mysensor.value);
  });
});
