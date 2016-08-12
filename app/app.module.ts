import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// importing http module
import { HttpModule } from '@angular/http';

// importing app component
import { AppComponent }  from './app.component';

// importing hero detail component
import { HeroDetailComponent } from './hero-detail.component';

// importing calculator component
import { CalculatorComponent } from './calculator.component';

// importing heroes component
import { HeroesComponent } from './heroes.component';

// importing hero service
import { HeroService } from './hero.service';

// importing router module
import { routing } from './app.routing';

// importing dashboard component
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule, routing, HttpModule ],
    declarations: [ AppComponent, HeroDetailComponent, CalculatorComponent, HeroesComponent, DashboardComponent ],
    providers: [ HeroService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }