import { FoodItem } from '../domain.model';

export enum ActionTypeEnum {
    ADD_FOOD_ITEM
}

export interface RootAction {
    type: ActionTypeEnum;
}

export interface AddFoodItemAction extends RootAction {
    foodItem: FoodItem;
}