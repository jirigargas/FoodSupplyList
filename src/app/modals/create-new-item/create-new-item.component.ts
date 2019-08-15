import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss'],
})
export class CreateNewItemComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  save() {
    this.modalCtrl.dismiss(<Item>{ name: "item4", count: 1 })
  }
}
