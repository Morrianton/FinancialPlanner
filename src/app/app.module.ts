import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FinancialCalculatorsComponent } from './financial-calculators/financial-calculators.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    FinancialCalculatorsComponent,
    InterestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
