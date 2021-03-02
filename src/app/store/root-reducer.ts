import { IAppStore } from './store';
import { RootAction } from './root-action';
import { ActionType } from './action-type';

export function rootReducer(appState: IAppStore, action: RootAction): IAppStore {
    switch(action.type) {
        case ActionType.ADD_FOOD_ITEM:
            return { foodItems: [...appState.foodItems, action.data] };
        default:
            return appState;    
    }
}