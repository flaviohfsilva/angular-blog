import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  exports:[
    CalendarComponent
  ]
})
export class CalendarModule {
  // public static routes = routes;
}
