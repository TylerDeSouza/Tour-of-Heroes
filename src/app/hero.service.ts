import { Injectable } from '@angular/core';
import { Hero } from '../app/heroes/hero';
import { HEROES } from '../app/heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
