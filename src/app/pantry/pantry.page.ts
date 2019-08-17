import { Component, ViewChild } from '@angular/core';
import { ELocation } from '../shared/item';
import { ListComponent } from '../shared/list/list.component';

@Component({
  selector: 'app-pantry',
  templateUrl: 'pantry.page.html',
  styleUrls: ['pantry.page.scss']
})
export class PantryPage {

  @ViewChild("list", { static: false }) list: ListComponent;
  viewItemLocation: ELocation = ELocation.Pantry;

  constructor() { }

  ionViewWillEnter() {
    this.list.init();
  }

}
