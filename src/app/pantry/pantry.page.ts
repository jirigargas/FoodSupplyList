import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ModalController } from '@ionic/angular';
import { CreateNewItemComponent } from '../modals/create-new-item/create-new-item.component';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  items: Item[]

  constructor(private modalCtrl: ModalController) { }

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

  async addNewItem() {
    const modal = await this.modalCtrl.create({
      component: CreateNewItemComponent
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    var existingItem = this.items.find(x => x.name === data.name);
    if (existingItem) {
      existingItem.count += data.count;
      // TODO update existing item
    } else {
      this.items.push(<Item>data);
      // TODO insert new item to database
    }
  }
}
