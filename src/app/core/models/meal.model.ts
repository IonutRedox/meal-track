import { FoodPortion } from '..';

export class Meal {
    id: string;
    title: string;
    foodPortions: FoodPortion[];

    constructor(id: string, title: string, foodPortions: FoodPortion[]) {
        this.id = id;
        this.title = title;
        this.foodPortions = foodPortions;
    }

    get calories(): number {
        return this.foodPortions.reduce((acc, curr) => acc + (curr.quantity * curr.food.calories) / 100, 0);
    }
}