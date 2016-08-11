import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-calc-detail',
    template: `
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
        `
})


export class CalculatorComponent {
    // calculator program
    number1 = 10;
    number2 = 20;
    totalSum: number;

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