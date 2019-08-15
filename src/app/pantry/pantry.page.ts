import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  items: Item[]

  constructor() { }

  ionViewWillEnter(): void {
    // TODO load items from db
    this.items = [
      { name: 'item1', count: 2 },
      { name: 'item2', count: 4 },
      { name: 'item3 with long realy name', count: 1 }
    ]
  }

  addCount(item: Item) {
    item.count += 1;
  }

  substractCount(item: Item) {
    if (item.count !== 1) {
      item.count -= 1;
      // TODO save new item state
    } else {
      this.items = this.items.filter(x => x.name !== item.name);
      // TODO remove item from db
    }
  }
}
