import { Component } from "@angular/core";


@Component({
    selector: 'add-food-item-app',
    templateUrl: 'add-food-item.component.html'
})
export class AddFoodItemComponent {

    foodItemName: string;
    foodItemType: string;
    
    addFoodItem(): void {
        //todo add code to add food item to store and
        //increase counter in store
        console.log('adding food item');
    }
}