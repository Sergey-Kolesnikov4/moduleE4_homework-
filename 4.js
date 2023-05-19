function Device(name) {
    this.name = name;
    this.electric = electric;
    this.switchon = switchon;
}

Device.prototype.electricDeviceWork = function () {
    let work = false
    if (this.electric && this.switchon) {
        work = true;
    } else {
        work = false;
             }
   return (work);
   }

function EleDevice(name, power, electric, switchon) {
  this.name = name;
  this.power = power;
  this.electric = electric;
  this.switchon = switchon;
  this. showPower = function(){
    console.log(power)
  }
}

EleDevice.prototype = new Device();

let sumPower = function(){
    let sum = 0;
   for(let value of ElecDiv){
    if (value.electricDeviceWork()){
        sum += value.power;
    }else{
        sum;
    }
   }
  return sum;
}

const lamp = new EleDevice(name = "Лампа", power = 30, electric = true, switchon = true);
const computer = new EleDevice(name = "Компьютер", power = 20, electric = true, switchon = true);
let ElecDiv = [lamp, comp];

console.log(lamp.electricDeviceWork());

console.log(sumPower(ElecDiv));
lamp.showPower();
comp.showPower();