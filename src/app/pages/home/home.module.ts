import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CardContainerComponent,
    CardComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: []
})
export class HomeModule { }
