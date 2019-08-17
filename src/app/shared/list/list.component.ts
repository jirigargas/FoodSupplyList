import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item, ELocation } from '../item';
import { CreateNewItemComponent } from '../create-new-item/create-new-item.component';
import { ItemStoreService } from '../item-store.service';
import { UUID } from '../uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {

  @Input() viewItemLocation: ELocation;

  items: Item[];
  interactionDisabled: boolean = false;

  constructor(
    private itemStore: ItemStoreService,
    private modalCtrl: ModalController
  ) { }

  async init(): Promise<void> {
    this.items = await this.itemStore.getItemsByLocation(this.viewItemLocation);
  }

  async addCount(item: Item): Promise<void> {
    if (this.interactionDisabled) return;
    this.interactionDisabled = true;

    item.count += 1;
    await this.itemStore.save(item);

    this.interactionDisabled = false;
  }

  async substractCount(item: Item): Promise<void> {
    if (this.interactionDisabled) return;
    this.interactionDisabled = true;

    if (item.count !== 0) {
      item.count -= 1;
    }

    await this.itemStore.save(item);

    this.interactionDisabled = false;
  }

  async changeLocation(item: Item): Promise<void> {
    if (item.count === 0) return;
    if (this.interactionDisabled) return;
    this.interactionDisabled = true;

    if (item.count !== 0) {
      item.count -= 1;
      await this.itemStore.save(item);
      var opositeLocation = item.location === ELocation.Cellar ? ELocation.Pantry : ELocation.Cellar;
      var items = await this.itemStore.getItemsByNameAndLocation(item.name, opositeLocation);

      if (items.length === 1) {
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

    this.interactionDisabled = false;
  }

  async addNewItem(): Promise<void> {
    if (this.interactionDisabled) return;
    this.interactionDisabled = true;

    const modal = await this.modalCtrl.create({
      component: CreateNewItemComponent
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    var existingItem = this.items.find(x => x.name === data.name);

    this.interactionDisabled = true;
    if (existingItem) {
      existingItem.count += data.count;
      await this.itemStore.save(existingItem);
    } else {
      const newItem = <Item>data;
      this.items.push(newItem);
      await this.itemStore.save(newItem);
    }

    this.interactionDisabled = false;
  }
}
