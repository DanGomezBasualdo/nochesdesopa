import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InventoryService } from '../inventory.service';
import { Item } from '../item';
import d3 from 'd3/build/d3';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  items: Item[];

  constructor(
    private heroService: HeroService,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    this.getItems();
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getItems(): void {
    this.inventoryService.getItems()
      .subscribe(items => this.items = items)
  }

}
