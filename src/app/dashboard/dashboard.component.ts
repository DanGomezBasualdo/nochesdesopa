import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { InventoryService } from '../inventory.service';
import { Item } from '../item';
import { ParsedItem } from '../parsedItem';
import d3 from 'd3/build/d3';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  items: Item[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  constructor(
    private heroService: HeroService,
    private inventoryService: InventoryService,
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
      .subscribe(items => this.items = this.parseItems(items))
  }

  parseItems(items): any {
    let parsedItems = [];
    for (var item of items) {
      let parsedItem: ParsedItem = {
        "id": item.id,
        "name": item.name + ' ' + item.size,
        "value": item.quantity
      };
      parsedItems.push(parsedItem);
    }
    return parsedItems;
  }

  onSelect(event) {
    alert('Listo para repartir?');
    /* TODO: This needs to remove from the "needs" list when ready to dispatch a request
    this.needs = pull(this.needs, need);
    this.requestReady.push(need);
    This should also remove from stock the objects, to be added again if not delivered.
    If need is met, this should be removed permanently and added to the historic satisfied needs counter.
    this.items = pull(this.items, need);
    */
  }

}
