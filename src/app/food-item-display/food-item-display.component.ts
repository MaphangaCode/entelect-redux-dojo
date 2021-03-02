import { Component, OnInit } from "@angular/core";
import { FoodItem } from '../domain/food-item';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'food-item-display-app',
    templateUrl: './food-item-display.component.html'
})
export class FoodItemDisplayComponent {

    @select('foodItems')
    foodItemsObs: Observable<FoodItem[]>;

    foodItems: FoodItem[] = [];

    // ngOnInit(): void {
    //     this.foodItemsObs.subscribe((foodItems) => {
    //         console.log('this ran');
    //         console.log(foodItems);
    //         this.foodItems = foodItems;
    //     });
    // }
}