import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgMultiLevelMenuComponent } from './ng-multi-level-menu.component';



@NgModule({
  declarations: [NgMultiLevelMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NgMultiLevelMenuComponent]
})
export class NgMultiLevelMenuModule { }
