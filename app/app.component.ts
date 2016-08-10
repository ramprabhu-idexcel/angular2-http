// Here we import the Angular 2 core so that our component code can have access to the @Component decorator
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

export class Number {
    number1: number;
    number2: number;
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


// Component is a decorator function that takes a metadata object as argument
// This particular metadata object has two fields, a selector and a template
@Component({
    selector: 'my-app',
    template:`
        <h1>{{ title }}</h1>
        <div *ngIf="selectedHero">
            <h2>{{ selectedHero.name }} details!</h2>
            <div><label>id: </label>{{ selectedHero.id }}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="selectedHero.name" placeholder="name">
            </div>
        </div>
        <h2>My Heroes</h2>
        <ul class="heroes">
            <li *ngFor="let hero of heroes" [(class.selected)]="hero === selectedHero" (click)="onSelect(hero)">
              <span class="badge">{{ hero.id }}</span> {{ hero.name }}
            </li>
        </ul>
        <div *ngIf="totalSum">
          <h2>Total Sum: {{ totalSum }}</h2>
        </div>
        <div>
          <label>First Number: </label>
          <input [(ngModel)]="number1" type="number" placeholder="number1">
        </div>
        <div>
          <label>Second Number: </label>
          <input [(ngModel)]="number2" type="number" placeholder="number2">
        </div>
        <br/>
        <div>
          <button (click)="Calculate('+')">Sum(+)</button>
          <button (click)="Calculate('-')">Sub(-)</button>
          <button (click)="Calculate('*')">Mul(*)</button>
          <button (click)="Calculate('/')">Div(/)</button>
        </div>

        `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .heroes {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .heroes li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .heroes li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .heroes li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .heroes .text {
        position: relative;
        top: -3px;
      }
      .heroes .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
    }
    `]
})

export class AppComponent {
    title = 'Tour of Heroes';
    // calculator program
    number1 = 10;
    number2 = 20;
    totalSum: sum = (this.number1 + this.number2);
    // list of hero's
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
    heroes = HEROES;

    // calculator function
    Calculate(action: string) {
        switch (action) {
            case '+':
                this.totalSum = this.number1 + this.number2;
                break;
            case '-':
                this.totalSum = this.number1 - this.number2;
                break;
            case '*':
                this.totalSum = this.number1 * this.number2;
                break;
            case '/':
                this.totalSum = this.number1 / this.number2;
                break;
            default:
        }
    }
}
