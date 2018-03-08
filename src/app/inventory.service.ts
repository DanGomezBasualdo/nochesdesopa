import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Item } from './item';
import { ITEMS } from './items';
import { MessageService } from './message.service'

@Injectable()
export class InventoryService {

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }

  constructor() { }

}
