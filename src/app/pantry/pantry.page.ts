import { Component } from '@angular/core';
import { Item, ELocation } from '../shared/item';
import { ItemStoreService } from '../shared/item-store.service';
import { UUID } from '../shared/uuid';

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

  async save(item: Item) {
    console.log("saving ", item);
    await this.itemStore.save(item);
  }

  async changeLocation(item: Item) {
    var opositeLocation = item.location === ELocation.Pantry ? ELocation.Cellar : ELocation.Pantry;
    var items = await this.itemStore.getItemsByNameAndLocation(item.name, opositeLocation);

    if(items.length === 1) {
      var opositeItem = items[0];
      opositeItem.count += 1;
      this.itemStore.save(opositeItem);
    } else {
      var newItem = <Item>{
        id: UUID.create(),
        name: item.name,
        count: 1,
        location: opositeLocation
      }
      this.itemStore.save(newItem);
    }    
  }
}
