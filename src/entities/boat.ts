import {Vehicle} from "./vehicle.js";
import {ConditionType} from "../types/condition.type";

export class Boat extends Vehicle {
    public static vehicleName = 'Boat';
    public length: number;

    constructor(brandName: string, modelName: string, year: number, length: number,  condition?: ConditionType) {
        super(brandName, modelName, year, condition);
        this.length = length;

    }
    public toString(): string{
        return 'Катер марки: ' + this.brandName + ', модель: ' + this.modelName + ', год выпуска: '
            + this.year + '. Катер ' + this.getConditionString()
            + '. Длина: ' + this.length
            + (this._price ? '. Стоимость ' + this._price : '.');
    }

    public getTypes(): string[] {
        return ['река', 'море', 'океан', 'озеро'];
    }

    static getVehicleName(): string {
        return 'Boat';
    }
}