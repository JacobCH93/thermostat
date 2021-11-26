var readlineSync = require('readline-sync');
const Thermostat = require('../classes/thermostat');

const thermostat = new Thermostat();

while (true) {

  var command = readlineSync.question('Temperature is ' + thermostat.getTemperature() + ' Enter command > ');

  if (command === 'up') {
    thermostat.getUp()
    console.log('Temperature is ' + thermostat.getTemperature());
  }else if (command === 'down') {
    thermostat.down()
    console.log('Temperature is ' + thermostat.getTemperature());
  }else if (command === 'psm on') {
    console.log('Temperature is ' + thermostat.getTemperature());
    thermostat.getOnPsm(true)
  }else if (command === 'psm off') {
    console.log('Temperature is ' + thermostat.getTemperature());
    thermostat.getPowerSaving(false)
  }else{
      
  }
}