import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { InventoryComponent } from './inventory/inventory.component'
import { FoodComponent } from './food/food.component'
import { ItemDetailComponent } from './item-detail/item-detail.component'
import { FoodDetailComponent } from './food-detail/food-detail.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'food', component: FoodComponent},
  { path: 'detail/:id', component: HeroDetailComponent},
  { path: 'food-detail/:id', component: FoodDetailComponent},
  { path: 'item-detail/:id', component: ItemDetailComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
   exports: [
     RouterModule
   ],
   imports: [
     RouterModule.forRoot(routes)
   ]
})
export class AppRoutingModule { }
