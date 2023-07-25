import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CalendarComponent } from './calendar/calendar.component';
import { StickWallComponent } from './stick-wall/stick-wall.component';
import { PageRoutingModule } from './page-routing-module';
import { HomeComponent } from './home/home.component';
import { SidenavModule } from '../components/sidenav/sidenav.module';



@NgModule({
  declarations: [
    HomeComponent,
    CalendarComponent,
    StickWallComponent
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    SidenavModule
  ]
})
export class PageModule { }
