import { Injectable } from '@angular/core';
import { Item, ELocation } from './item';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  constructor(private storage: Storage) { }

  public async getItemsByLocation(location: ELocation): Promise<Item[]> {
    var items = await this.storage.get("items");
    if(!items) return [];

    return items.filter(x => x.location == location);
  }

  public async getItemsByNameAndLocation(name: string, location: ELocation): Promise<Item[]> {
    var items = await this.storage.get("items");
    if(!items) return [];

    return items.filter(x => x.name === name && x.location === location);
  }

  public async save(item: Item): Promise<void> {
    var items = <Item[]>await this.storage.get("items");
    if(!items) items = [];
    
    var newItems = items.filter(x => x.id !== item.id);
    newItems.push(item);
    this.storage.set("items", newItems);
  }

}
