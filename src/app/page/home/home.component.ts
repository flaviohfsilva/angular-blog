
import { Component, Input} from '@angular/core';
import { PageService } from '../page.service';
import { Task } from '../shared.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasks: Task[] = [];
  filterTasks: Task[] = this.tasks;
  taskCheck: boolean = false;
  inputText: string = '';
  searchText: string = '';
  selectedTask: Task | null = null;

  constructor(private pageService: PageService) {}

  ngOnInit(){
    this.iniciarTasks();
  }


  iniciarTasks() {
    this.pageService.getTask().subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.filterText(this.searchText);
      },
      (error) => {
        console.log('Tarefa não foi adicionada', error);
      }
    );
  }

  newTask(){
    const newValue = this.inputText.trim();

    if(newValue.trim() != ''){
      const newTasks: Task = {
        id: 0,
        title: newValue,
        completo: false
      }

      this.pageService.addTask(newTasks).subscribe(
        (response) => {
          this.tasks.push(response);
          this.inputText = '';
          this.filterText(this.searchText);
        },
        (error) => {
          console.error("Tarefa não foi adicionada", error);
        }
      )
    }
  }

  

  apagarTask(){

    const apagarTask: Task = {
      id: this.selectedTask!.id,
      title: this.inputText,
      completo: false
    };

    this.pageService.deleteTask(apagarTask).subscribe(
      (response)=>{
        const index = this.tasks.findIndex(task => task.id === this.selectedTask!.id)

        if(index !== -1){
          this.tasks.splice(index, 1);
        }
        console.log("Tarefa apagada");
      },
      (error)=>{
        console.log("Tarefa não foi apagada", error)
      }
    )
  }

  filterText(searchText: string){
    this.filterTasks = this.tasks.filter(item => item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }
}
