import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    this.inventoryService.getItem()
      .subscribe(item => this.item = item)
  }

}
