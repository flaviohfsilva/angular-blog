
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasks: String[] = [];
  filterTasks: String[] = this.tasks;

  searchText: string = '';

  ngOnInit(){}

  newTask(valor: any){
    if(valor.trim() != ''){
      this.tasks.push(valor);
    }
  }

  filterText(searchText: string){
    this.filterTasks = this.tasks.filter(item => item.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}
