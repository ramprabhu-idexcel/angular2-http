// Here we import the Angular 2 core so that our component code can have access to the @Component decorator
import { Component } from '@angular/core';

import { Hero } from './hero';

// Multiple components will need access to hero data and we don't want to copy and paste the same code over and over.
// we'll create a single reusable data service
import { HeroService } from './hero.service';

import { OnInit } from '@angular/core';

import { Router } from '@angular/router';

// Component is a decorator function that takes a metadata object as argument
// This particular metadata object has two fields, a selector and a template
@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls:  ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    // list of hero's
    selectedHero: Hero;

    onSelect(hero: Hero) { this.selectedHero = hero; }

    heroes: Hero[];

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroes = this.heroService.getHeroes();
    }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

