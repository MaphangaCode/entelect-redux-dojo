import { ActionType } from './action-type';

export interface RootAction {
    type: ActionType;
    data?: any
}