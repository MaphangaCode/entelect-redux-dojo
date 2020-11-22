import { FoodItem } from '../domain.model';

export interface IAppState {
    foodItems: FoodItem[];
}

export const DEFAULT_APP_STATE: IAppState = {
    foodItems: new Array()
}