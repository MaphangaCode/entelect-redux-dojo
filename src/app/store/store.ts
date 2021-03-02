import { FoodItem } from '../domain/food-item';

export interface IAppStore {
    foodItems: FoodItem[];
}

export const DEFAILT_STORE: IAppStore = {
    foodItems: []
};