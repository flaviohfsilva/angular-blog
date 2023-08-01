import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { SidenavComponent } from '../components/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SearchTaskPipe } from '../search-task.pipe';
import { SidenavModule } from './sidenav/sidenav.module';
import { EditTakesModule } from './edit-takes/edit-takes.module';





@NgModule({
  declarations: [
    SearchTaskPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SidenavModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports: [
    SidenavModule,
    EditTakesModule,
  ]
})
export class ComponentsModule { }
