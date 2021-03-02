import { Component, OnInit } from "@angular/core";
import { FoodItem } from '../domain/food-item';

@Component({
    selector: 'food-item-display-app',
    templateUrl: './food-item-display.component.html'
})
export class FoodItemDisplayComponent {
    foodItems: FoodItem[] = [];
}