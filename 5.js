class Device{
    constructor(name) {
        this.name = name;
        this.electric = electric;
        this.switchon = switchon;
    }
}

class ElectricDevice extends Device{
    constructor(name, power, electric, switchon ){
    super(name);
    this.power = power;
    this.electric = electric;
    this.switchon = switchon;
    this. showPower = function(){
        console.log(power)
    }
  }


    function electricDeviceWork(){
        let work = false
        if (this.electric && this.switchon) {
            work = true;
        } else {
           work = false;
               }
     return work;
  }
}

function sumPower(ElecDiv){
      let sum = 0;
     for(let value of ElecDiv){
      if (value.electricDeviceWork){
          sum += value.power;
      }else{
          sum;
      }
     }
    return sum;
  }

const lamp = new ElectricDevice("lampa", 30, true, true);
const comp = new ElectricDevice("compyter", 20, true, true);
let ElecDiv = [lamp, comp];
console.log(lamp.electricDeviceWork);
console.log(sumPower(ElecDiv));
lamp.showPower();
comp.showPower();