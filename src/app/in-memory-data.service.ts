import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Thor' },
      { id: 2, name: 'Captain America' },
      { id: 3, name: 'Ironman' },
      { id: 4, name: 'Black Widow' },
      { id: 5, name: 'Black Panther' },
      { id: 6, name: 'Hulk' },
      { id: 7, name: 'Hawkeye' },
      { id: 8, name: 'Vision' },
      { id: 9, name: 'Scarlet Witch' },
      { id: 10, name: 'War Machine' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
