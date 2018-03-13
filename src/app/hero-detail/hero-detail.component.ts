import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
import { Hero } from '../hero';
import { pull } from 'lodash';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  newNeed: string;


  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }

  addNeed(need): void {
    if (need && need !== '') {
      if (!this.hero.needs) {
        this.hero.needs = [];
      }
      this.hero.needs.push(need);
      this.newNeed = '';
    } else {
      alert('no puede ser vacío!')
    }
  }

  markedDelivered(need): void {
    // TODO: should keep a record of all delivered
    this.hero.needs = pull(this.hero.needs, need);
  }

  markedCanceled(need): void {
    // TODO: should discard request without adding a record
    this.hero.needs = pull(this.hero.needs, need);
    // TODO: should re-add to inventory if not properly delivered
  }

}
