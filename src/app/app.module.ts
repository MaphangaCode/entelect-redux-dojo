import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { FoodItemDisplayComponent } from './food-item-display/food-item-display.component';
import { IAppStore, DEFAILT_STORE } from './store/store';
import { rootReducer } from './store/root-reducer';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodItemComponent,
    FoodItemDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngRedux: NgRedux<IAppStore>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, DEFAILT_STORE, [], enhancers);
  }
}
