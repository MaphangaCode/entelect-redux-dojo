import { IAppStore } from './store';
import { RootAction } from './root-action';

export function rootReducer(appState: IAppStore, action: RootAction): IAppStore {
    return appState;
}