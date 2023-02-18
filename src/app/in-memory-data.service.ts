import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Deku', real: 'Izuku Midoriya', quirk: 'One For All'},
      { id: 2, name: 'Dynamight', real: 'Katsuki Bakugo', quirk: 'Explosion'},
      { id: 3, name: 'Shoto', real: 'Shoto Todoroki', quirk: 'Half-Cold Half-Hot'},
      { id: 4, name: 'Uravity', real: 'Ochaco Uraraka', quirk: 'Zero Gravity'},
      { id: 5, name: 'Chargebolt', real: 'Denki Kaminari', quirk: 'Electrification'},
      { id: 6, name: 'Earphone Jack', real: 'Kyoka Jiro', quirk: 'Earphone Jack'},
      { id: 7, name: 'Froppy', real: 'Tsuyu Asui', quirk: 'Frog'},
      { id: 8, name: 'Creati', real: 'Momo Yaoyorozu', quirk: 'Creation'},
      { id: 9, name: 'Suneater', real: 'Tamaki Amajiki', quirk: 'Manifest'},
      { id: 10, name: 'Tsukuyomi', real: 'Fumikage Tokoyami', quirk: 'Dark Shadow'},
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
