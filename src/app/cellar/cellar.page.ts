import { Component } from '@angular/core';
import { ELocation, Item } from '../shared/item';
import { ItemStoreService } from '../shared/item-store.service';

@Component({
  selector: 'app-cellar',
  templateUrl: 'cellar.page.html',
  styleUrls: ['cellar.page.scss']
})
export class CellarPage {

  items: Item[];

  constructor(private itemStore: ItemStoreService) { }

  async ionViewWillEnter() {
    this.items = await this.itemStore.getItemsByLocation(ELocation.Cellar);
  }

  save(item: Item) {
    console.log("saving ", item);
    this.itemStore.save(item);
  }

}
