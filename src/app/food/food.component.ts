import { Component, OnInit } from '@angular/core';
import { Food } from '../food';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  foods: Food[];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(): void {
    this.inventoryService.getFoods()
      .subscribe(foods => this.foods = foods)
  }

}
