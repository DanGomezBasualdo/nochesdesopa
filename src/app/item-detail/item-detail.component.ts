import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { InventoryService } from '../inventory.service';
import { Location } from '@angular/common';

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
    private location: Location,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getItem(id);
  }

  getItem(id): void {
    this.inventoryService.getItem(id)
      .subscribe(item => this.item = item)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.inventoryService.updateItem(this.item)
     .subscribe(() => this.goBack());
  }

  moveExcess(): void {
    if (this.item.quantity > this.item.maxStock) {
        const amountToSubstract = this.item.quantity - this.item.maxStock;
        this.item.quantity -= amountToSubstract;
        // TODO: addToNewStock(amountToSubstract) to increase the other stock.
        alert('Se movieron ' + amountToSubstract + ' ' + this.item.name + ' al stock secundario');
    }
  }

}
