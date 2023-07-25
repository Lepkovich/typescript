import { Vehicle } from "./vehicle.js";
export class Car extends Vehicle {
    toString() {
        return 'Автомобиль марки: ' + this.brandName + ', модель: ' + this.modelName + ', год выпуска: '
            + this.year + '. Автомобиль ' + this.getConditionString()
            + (this._price ? '. Стоимость ' + this._price : '.');
    }
    getTypes() {
        return ['асфальт'];
    }
}
Car.vehicleName = 'Car';
