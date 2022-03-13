import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardContainerComponent,
    CardComponent,
    CarouselComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class HomeModule { }
