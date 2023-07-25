import {ConditionType} from "./types/condition.type.js";
import {Car} from "./entities/car.js";
import {Boat} from "./entities/boat.js";



const mercedesC2022 = new Car('Mercedes', 'C-class', 2022, ConditionType.new);
console.log(mercedesC2022.toString());
mercedesC2022.price = -1;


const bmw3202021 = new Car('BMW', '320', 2021);
console.log(bmw3202021.toString())
bmw3202021.price = 10000;

mercedesC2022.setUsedCondition();

const yamaha212s2022 = new Boat('Yamaha', '212s', 2022, 20);
yamaha212s2022.price = 100000;
console.log(yamaha212s2022.toString());

