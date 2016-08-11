"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        // calculator program
        this.number1 = 10;
        this.number2 = 20;
    }
    // calculator function
    CalculatorComponent.prototype.Calculate = function (action) {
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
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'my-calc-detail',
            template: "\n        <div *ngIf=\"totalSum\">\n          <h2>Total Sum: {{ totalSum }}</h2>\n        </div>\n        <div>\n          <label>First Number: </label>\n          <input [(ngModel)]=\"number1\" type=\"number\" placeholder=\"number1\">\n        </div>\n        <div>\n          <label>Second Number: </label>\n          <input [(ngModel)]=\"number2\" type=\"number\" placeholder=\"number2\">\n        </div>\n        <br/>\n        <div>\n          <button (click)=\"Calculate('+')\">Sum(+)</button>\n          <button (click)=\"Calculate('-')\">Sub(-)</button>\n          <button (click)=\"Calculate('*')\">Mul(*)</button>\n          <button (click)=\"Calculate('/')\">Div(/)</button>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map