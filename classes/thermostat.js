class Thermostat{

constructor() { this.temp = 20,
     this.mintemp = 10, 
   this.psm = true,
this.maxpsm = 25,
this.max = 32};

getTemperature() {
    return this.temp; 
}

getMinTemp() {
    return this.mintemp;

}
get up() { if (this.psm == true && this.temp < this.maxpsm)
    ++this.temp;
    else if (this.psm == false && this.temp < this.max) ++this.temp;
}

get down() { if (this.temp > this.mintemp) { 
    --this.temp;
}   
}
getPowerSaving() {
    return this.psm = !this.psm;
}

getOnPsm(){
    return this.psm = true;
}

get reset() {
 return this.temp = 20;
}

getTempUsage() {
    if (this.temp < 18) return `Low-usage`;
    else if (this.temp <= 25) return `Medium-usage`;
    else if (this.temp >  25) return`High-usage`
}
}
module.exports = Thermostat;