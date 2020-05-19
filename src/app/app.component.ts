import { Component } from '@angular/core';

import { User } from '../inventory/user';
import { BEGINNING, COLORS, NAMES, NOW, POKEMON } from '../inventory/values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public size = 100;
  public latency = 0;

  private _all: User[];
  private _currentQuery: User[];
  users: User[];

  constructor() {
    this.users = [];
    for (let i = 0; i < this.size; i++) {
      this.users.push({
        id: randomInt(100000),
        name: NAMES[randomInt(NAMES.length)],
        creation: new Date(BEGINNING + randomInt(NOW - BEGINNING)),
        color: COLORS[randomInt(COLORS.length)],
        pokemon: POKEMON[randomInt(POKEMON.length)],
        wins: randomInt(100),
      });
    }
  }
  
}
function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}