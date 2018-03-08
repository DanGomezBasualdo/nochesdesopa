import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  item: Item;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getItem(id);
  }

  getItem(id): void {
    this.inventoryService.getItem(id)
      .subscribe(item => this.item = item)
  }

}
