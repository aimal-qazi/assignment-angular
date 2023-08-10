import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPostComponent } from './show-post/show-post.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShowPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShowPostComponent,
      },
    ]),
  ],
})
export class PosteModule {}
