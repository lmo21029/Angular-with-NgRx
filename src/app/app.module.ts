import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { basketActionReducer } from './ngrx/reducer/basket.reducer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ basket: basketActionReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
