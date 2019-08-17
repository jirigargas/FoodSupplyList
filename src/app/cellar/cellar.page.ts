import { Component, ViewChild } from '@angular/core';
import { ELocation } from '../shared/item';
import { ListComponent } from '../shared/list/list.component';

@Component({
  selector: 'app-cellar',
  templateUrl: 'cellar.page.html',
  styleUrls: ['cellar.page.scss']
})
export class CellarPage {

  @ViewChild("list", { static: false }) list: ListComponent;
  viewItemLocation: ELocation = ELocation.Cellar;

  constructor() { }

  ionViewWillEnter() {
    this.list.init();
  }

}
