import { Food } from '..';

export interface FoodPortion extends Food {
    quantity: number;
}