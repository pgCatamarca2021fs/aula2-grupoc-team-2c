import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardContainerComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class HomeModule { }
