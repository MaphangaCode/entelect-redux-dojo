import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { FoodItemDisplayComponent } from './food-item-display/food-item-display.component';
import { IAppState, DEFAULT_APP_STATE } from './store/state.model';
import { rootReducer } from './store/reducer';
import { ActionDipatcherService } from './store/action.dispatcher.service';

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
  providers: [ActionDipatcherService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, DEFAULT_APP_STATE);
  }
}
