import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
// import { MessageService } from '../message.service';

// import {HEROES} from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes : Hero[];
  title = 'origin';

  // selectedHero: Hero;

  changelink($event){
    this.title = 'new';
  }



  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  };

  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}

  // onSelect(hero: Hero): void {
  // this.selectedHero = hero;
  // this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // };

  // getHeroes(): void {
  // this.heroes = this.heroService.getHeroes();
  // };
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  };

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
}
}
