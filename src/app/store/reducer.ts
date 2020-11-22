import { IAppState } from './state.model';
import { RootAction } from './action';

export function rootReducer(appState: IAppState, action: RootAction): IAppState {
    console.log('reducer called');
    return appState;
}