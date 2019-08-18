import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list/list.component';
import { CreateNewItemComponent } from './create-new-item/create-new-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ListComponent, CreateNewItemComponent],
  entryComponents: [CreateNewItemComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,    
    TranslateModule.forChild()
  ],
  exports: [ListComponent,CreateNewItemComponent]
})
export class SharedModule { }
