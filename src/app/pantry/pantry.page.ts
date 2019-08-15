import { Component } from '@angular/core';
import { Item, ELocation } from '../shared/item';
import { ItemStoreService } from '../shared/item-store.service';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  items: Item[];

  constructor(private itemStore: ItemStoreService) { }

  async ionViewWillEnter() {
    this.items = await this.itemStore.getItemsByLocation(ELocation.Pantry)
  }

  save(item: Item) {
    console.log("saving ", item);
    this.itemStore.save(item);
  }
}
