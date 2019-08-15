import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Item } from 'src/app/shared/item';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-item',
  templateUrl: './create-new-item.component.html',
  styleUrls: ['./create-new-item.component.scss'],
})
export class CreateNewItemComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      count: new FormControl(1, Validators.min(1))
    })
  }

  ngOnInit() { }

  save() {
    this.modalCtrl.dismiss(<Item>this.form.value)
  }
}
