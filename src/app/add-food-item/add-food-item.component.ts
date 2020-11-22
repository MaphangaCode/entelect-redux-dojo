import { Component } from "@angular/core";
import { ActionDipatcherService } from '../store/action.dispatcher.service';
import { FoodItem } from '../domain.model';


@Component({
    selector: 'add-food-item-app',
    templateUrl: 'add-food-item.component.html'
})
export class AddFoodItemComponent {

    foodItemName: string;
    foodItemType: string;

    constructor(private actionDispatcherService: ActionDipatcherService) {}
    
    addFoodItem(): void {
        const foodItem: FoodItem = {
            name: 'Onion',
            type: 'Veggie'
        };

        this.actionDispatcherService.addFoodItem(foodItem);
    }
}