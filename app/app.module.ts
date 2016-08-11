import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CalculatorComponent } from './calculator.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeroDetailComponent, CalculatorComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }