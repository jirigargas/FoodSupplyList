import { Injectable } from '@angular/core';
import { Item, ELocation } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemStoreService {

  items: Item[] = [
    { name: 'item1', count: 2, location: ELocation.Pantry },
    { name: 'item1', count: 5, location: ELocation.Cellar },
    { name: 'item2', count: 4, location: ELocation.Cellar },
    { name: 'item2', count: 2, location: ELocation.Pantry },
    { name: 'item3 with long realy name', count: 1, location: ELocation.Cellar }
  ]

  constructor() { }

  public getItemsByLocation(location: ELocation): Item[] {
    return this.items.filter(x => x.location == location);
  }
}
