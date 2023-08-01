import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-takes',
  templateUrl: './edit-takes.component.html',
  styleUrls: ['./edit-takes.component.css']
})
export class EditTakesComponent {

  showEdit: boolean = false;


  toggleEdit(){
    this.showEdit = !this.showEdit;
  }

}
