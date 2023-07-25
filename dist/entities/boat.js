import { Vehicle } from "./vehicle.js";
export class Boat extends Vehicle {
    constructor(brandName, modelName, year, length, condition) {
        super(brandName, modelName, year, condition);
        this.length = length;
    }
    toString() {
        return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName + ', год выпуска: '
            + this.year + '. Катер ' + this.getConditionString()
            + '. Длина: ' + this.length
            + (this._price ? '. Стоимость ' + this._price : '.');
    }
    getTypes() {
        return ['река', 'море', 'океан', 'озеро'];
    }
    static getVehicleName() {
        return 'Boat';
    }
}
Boat.vehicleName = 'Boat';
