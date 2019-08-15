import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PantryPage } from './pantry.page';
import { CreateNewItemComponent } from '../modals/create-new-item/create-new-item.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: PantryPage }])
  ],
  declarations: [PantryPage]
})
export class PantryModule {}
