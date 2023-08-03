import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selectedTitle: string = '';
  selectedDate: string = '';
  modal: boolean = false;
  modalDelete: boolean = false;
  taskEditada: boolean = false;
  homeForm!: FormGroup;

  constructor(private pageService: PageService, private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.homeForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      data: ['']
    });
    this.iniciarTasks();
  }


  iniciarTasks() {
    this.pageService.getTask().subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.filterText(this.searchText);
        this.pageService.setTaskCount(this.tasks.length);
        console.log("As tarefas estão sendo mostrdas")
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
        completo: false,
        date: ''
      }

      this.pageService.addTask(newTasks).subscribe(
        (response) => {
          this.tasks.push(response);
          this.filterText(this.searchText);
        },
        (error) => {
          console.error("Tarefa não foi adicionada", error);
        }
      )
    }
  }

  atualizarTask(task: Task){
    this.selectedTask = task;
    this.taskEditada = true;
    this.selectedTitle = task.title;
    this.selectedDate = task.date;
    this.showModal();
  }

  enviarTaskAtualizada(){

    if(!this.selectedTask){
      console.log("Nenhuma task selecionada para atualizar");
      return;
    }

    const upTask: Task = {
      id: this.selectedTask.id,
      title: this.selectedTitle,
      completo: this.selectedTask.completo,
      date: this.selectedDate
    };

    this.pageService.updateTask(upTask).subscribe(
      (response)=> {
        const index = this.tasks.findIndex(task => task.id === this.selectedTask!.id);

        if(index !== -1){
          this.tasks[index] = upTask;
        }

        this.filterTasks = this.tasks.filter(item => item.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));
        this.showModal()
        console.log("Tarefa atualizada", response);
      },
      (error)=>{
        console.log("Erro ao atualizar a tarefa", error)
      }
    )
  }


  apagarTask(){

    if(!this.selectedTask){
      return;
    }

    const apagarTask: Task = {
      id: this.selectedTask.id,
      title: this.selectedTask.title,
      completo: false,
      date: this.selectedDate
    };

    this.pageService.deleteTask(apagarTask).subscribe(
      (response)=>{
        const index = this.tasks.findIndex(task => task.id === this.selectedTask!.id)

        if(index !== -1){
         this.tasks.splice(index, 1);
        }

        this.filterTasks = this.tasks.filter(item => item.title.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase()));

        console.log("Tarefa apagada com sucesso!", response);
      },
      (error)=>{
        console.log("Tarefa não foi apagada", error)
      }
    )

    this.modalDelete = false;
  }

  filterText(searchText: string){
    this.filterTasks = this.tasks.filter(item => item.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
  }

  showModal(){
    this.modal = !this.modal;
  }

  showModalDelete(){
    this.modalDelete = !this.modalDelete
    this.modal = false;
  }

  mostrarTotalTarefas(): number{
    return this.filterTasks.length;
  }
}
