import { Injectable } from "@angular/core";
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './state.model';
import { FoodItem } from '../domain.model';
import { AddFoodItemAction, ActionTypeEnum } from './action';

@Injectable()
export class ActionDipatcherService {

    constructor(private redux: NgRedux<IAppState>) {}

    addFoodItem(foodItem: FoodItem): void {
      const foodItemAction: AddFoodItemAction = {
          foodItem: foodItem,
          type: ActionTypeEnum.ADD_FOOD_ITEM
      };

      this.redux.dispatch(foodItemAction);
    }
}