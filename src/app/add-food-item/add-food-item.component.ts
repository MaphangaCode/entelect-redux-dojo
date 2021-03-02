import { Component, OnInit } from "@angular/core";
import { FoodItemType } from '../domain/food-item-type';
import { ActionDispatcherService } from '../store/action-dispatcher.service';
import { FoodItem } from '../domain/food-item';

@Component({
    selector: 'add-food-item-app',
    templateUrl: 'add-food-item.component.html'
})
export class AddFoodItemComponent implements OnInit {

    foodItemTypeList: string[] = [];
    foodItemName: string;
    foodItemType: string;

    constructor(private actionDispatcherService: ActionDispatcherService) { }

    ngOnInit(): void {
        for (let foodItemType in FoodItemType) {
            this.foodItemTypeList.push(foodItemType);
        }
    }

    addFoodItem(): void {
        if (this.foodItemName && this.foodItemType) {
            
            const foodItem: FoodItem = {
                name: this.foodItemName,
                type: this.foodItemType
            };

            this.actionDispatcherService.addFoodItem(foodItem);
            
            this.foodItemName = null;
            this.foodItemType = null;
        }
    }
}