const Thermostat = require('../classes/thermostat');

describe ('thermostat',() => {
    it ('returns temp',() => {
        const thermostat =  new Thermostat();
        expect(thermostat.getTemperature()).toBe (20);
    }); 

    it ('increaces temp',() => {
        const thermostat = new Thermostat();
        thermostat.getUp();
        expect(thermostat.getTemperature()).toBe (21);
    });
    it ('decreaces temp',() => {
        const thermostat = new Thermostat();
        thermostat.getDown();
        expect(thermostat.getTemperature()).toBe (19);
    });
    it ('returns min temp',() => {
        const thermostat =  new Thermostat();
        expect(thermostat.getMinTemp()).toBe (10);
    }); 
    it ('power saving limits temp to 25',() => {
        const thermostat =  new Thermostat();
        thermostat.getPowerSaving()
        expect(thermostat.getPowerSaving()).toEqual(true);
    }); 
    it ('Cannot go over max temp',() => {
        const thermostat =  new Thermostat();
        thermostat.temp = thermostat.max;
        thermostat.getUp();
        expect(thermostat.getTemperature()).toBe(32);
    }); 
    it ('Can turn off PSM',() => {
        const thermostat =  new Thermostat();
        expect(thermostat.getPowerSaving()).toEqual(false);
    }); 
    it ('Can turn on PSM',() => {
        const thermostat =  new Thermostat();
        expect(thermostat.getOnPsm()).toEqual(true);
    }); 
    it ('Reset to 20',() => {
        const thermostat =  new Thermostat();
        thermostat.getUp
        thermostat.reset
        expect(thermostat.getTemperature()).toBe(20);
    }); 
    it ('Shows low-usage',() => {
        const thermostat =  new Thermostat();
        thermostat.temp = 17;
        expect(thermostat.getTempUsage()).toEqual(`Low-usage`);
    }); 
    it ('Shows medium-usage',() => {
        const thermostat =  new Thermostat();
        thermostat.temp = 20;
        expect(thermostat.getTempUsage()).toEqual(`Medium-usage`);
    }); 
    it ('Shows medium-usage',() => {
        const thermostat =  new Thermostat();
        thermostat.temp = 28;
        expect(thermostat.getTempUsage()).toEqual(`High-usage`);
    }); 

});