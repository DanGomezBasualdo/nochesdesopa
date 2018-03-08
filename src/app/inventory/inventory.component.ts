import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  items: Item[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.inventoryService.getItems()
      .subscribe(items => this.items = items)
  }

}
