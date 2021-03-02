import { Component, OnInit } from "@angular/core";
import { FoodItemType } from '../domain/food-item-type';

@Component({
    selector: 'add-food-item-app',
    templateUrl: 'add-food-item.component.html'
})
export class AddFoodItemComponent implements OnInit {

    foodItemTypeList: string[] = [];
    foodItemName: string;
    foodItemType: string;

    ngOnInit(): void {
        for(let foodItemType in FoodItemType) {
            this.foodItemTypeList.push(foodItemType);
        }
    }
    
    addFoodItem(): void {
        //TODO use this method to put food item into store

        this.foodItemName = null;
        this.foodItemType = null;
    }
}