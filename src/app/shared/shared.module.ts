import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list/list.component';
import { Item } from './item';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, CreateNewItemComponent],
  entryComponents: [CreateNewItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [ListComponent,CreateNewItemComponent]
})
export class SharedModule { }
