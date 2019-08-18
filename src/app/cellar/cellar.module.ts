import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellarPage } from './cellar.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CellarPage }]),
    TranslateModule.forChild()
  ],
  declarations: [CellarPage]
})
export class CellarModule {}
