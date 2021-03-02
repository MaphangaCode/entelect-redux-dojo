import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { IAppStore } from './store';
import { FoodItem } from '../domain/food-item';
import { RootAction } from './root-action';
import { ActionType } from './action-type';

@Injectable()
export class ActionDispatcherService {

    constructor(private ngRedux: NgRedux<IAppStore>) {}

    addFoodItem(foodItem: FoodItem): void {
        const addFoodItemAction: RootAction = {
            type: ActionType.ADD_FOOD_ITEM,
            data: foodItem
        };

        this.ngRedux.dispatch(addFoodItemAction);
    }
}