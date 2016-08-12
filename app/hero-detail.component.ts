import { Component, OnInit } from '@angular/core';

/* ActivateRoute service and use the HeroService to fetch the hero with that id */
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.hero = this.heroService.getHero(id);
        });
    }

    goBack() {
        window.history.back();
    }

}