import { Component, OnInit } from "@angular/core";
import { FoodItem } from '../domain.model';

@Component({
    selector: 'food-item-display-app',
    templateUrl: './food-item-display.component.html'
})
export class FoodItemDisplayComponent implements OnInit {
    foodItems: FoodItem[] = new Array();

    ngOnInit() {
        //todo get rid of this and read from the store
        const foodItem: FoodItem = {
            name: 'Banana',
            type: 'Fruit'
        };

        this.foodItems.push(foodItem);
    }
}