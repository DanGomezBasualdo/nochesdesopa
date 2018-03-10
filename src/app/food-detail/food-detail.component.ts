import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../food';
import { InventoryService } from '../inventory.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
  food: Food;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getFood(id);
  }

  getFood(id): void {
    this.inventoryService.getFood(id)
      .subscribe(food => this.food = food)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.inventoryService.updateFood(this.food)
     .subscribe(() => this.goBack());
  }

  moveExcess(): void {
    if (this.food.quantity > this.food.maxStock) {
        const amountToSubstract = this.food.quantity - this.food.maxStock;
        this.food.quantity -= amountToSubstract;
        // TODO: addToNewStock(amountToSubstract) to increase the other stock.
        alert('Se movieron ' + amountToSubstract + ' ' + this.food.name + ' al stock secundario');
    }
  }

}
