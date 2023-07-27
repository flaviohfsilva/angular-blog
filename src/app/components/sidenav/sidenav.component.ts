import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  showSidenav: boolean = true;
  searchText: string = '';
  // estaNaRotaStick!: boolean;
  // estaNaRotaCalendar!: boolean;


  constructor(private router: Router){

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
}
