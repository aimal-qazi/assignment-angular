import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { Task1Service } from './task1.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowComponent,
      },
    ]),
  ],
  providers: [Task1Service],
})
export class ProductModule {}
