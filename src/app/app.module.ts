import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'task1',
        loadChildren: () =>
          import('./product/product.module').then((mod) => mod.ProductModule),
      },
      {
        path: 'task2',
        loadChildren: () =>
          import('./users/users.module').then((mod) => mod.UsersModule),
      },
      {
        path: 'task3',
        loadChildren: () =>
          import('./poste/poste.module').then((mod) => mod.PosteModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
