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

  ionViewWillEnter(){
    this.items = this.itemStore.getItemsByLocation(ELocation.Pantry)
  }

}
