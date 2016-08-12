import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';

@Injectable()

// It could get the data from a web service or local storage or from a mock data source.
export class HeroService {

    // Below is mock API service
    getHeroes() {
        return HEROES;
    }

    getHero(id: number) {
        return this.getHeroes().find(hero => hero.id === id);
    }

}