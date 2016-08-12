import { Component } from '@angular/core';

/*
 Notice the routerLink binding in the anchor tag.

 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    title = 'Tour of Heroes';
}