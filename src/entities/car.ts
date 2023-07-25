import {Vehicle} from "./vehicle.js";

export class Car extends Vehicle {
    public static vehicleName = 'Car';
    public toString(): string{
        return 'Автомобиль марки: ' + this.brandName + ', модель: ' + this.modelName + ', год выпуска: '
            + this.year + '. Автомобиль ' + this.getConditionString()
            + (this._price ? '. Стоимость ' + this._price : '.');
    }

    public getTypes(): string[] {
        return ['асфальт'];
    }
}