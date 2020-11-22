import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFoodItemComponent } from './add-food-item/add-food-item.component';
import { FoodItemDisplayComponent } from './food-item-display/food-item-display.component';

@NgModule({
  declarations: [
    AppComponent,
    AddFoodItemComponent,
    FoodItemDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
