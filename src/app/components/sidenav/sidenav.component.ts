import { PageService } from './../../page/page.service';
import { Component, Output, Input,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/page/shared.interface';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  showSidenav: boolean = true;
  searchText: string = '';
  taskCount$ = this.pageService.taskCount$;


  // estaNaRotaStick!: boolean;
  // estaNaRotaCalendar!: boolean;


  constructor(private router: Router, private pageService: PageService){

    // router.events.subscribe((val) => {
    //   this.estaNaRotaCalendar = router.url.includes('calendar'),
    //   this.estaNaRotaStick = router.url.includes('stick-wall')
    // })
  }

  @Output() searchChanged: EventEmitter<string> = new EventEmitter<string>();


  toggleSidenav(){
    this.showSidenav = !this.showSidenav;
  }

  search(){
    this.searchChanged.emit(this.searchText);
  }

  searchChange(){
    if(!this.searchText.trim()){
      this.searchChanged.emit('');
    }
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }
}


