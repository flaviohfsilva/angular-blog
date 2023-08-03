import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, map, take } from 'rxjs';
import { Task, Tag, StickyCard} from './shared.interface';




@Injectable({
  providedIn: 'root'
})
export class PageService {

  readonly API = environment.apiUrl
  private taskCountSubject = new BehaviorSubject<number>(0);
  public taskCount$ = this.taskCountSubject.asObservable();

  constructor(private httpClient: HttpClient) { }


  setTaskCount(count: number) {
    this.taskCountSubject.next(count);
  }

  getTask(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.API}/task`).pipe(
      map(tasks => tasks.filter(task => task.id !== 0)))
  }

  addTask(newTask: Task){
    return this.httpClient.post<Task>(`${this.API}/task`, newTask);
  }

  updateTask(atualizarTask: Task) {
    return this.httpClient.put<Task>(`${this.API}/task/${atualizarTask.id}`, atualizarTask).pipe(
      take((1))
    );
  }

  deleteTask(apagarTask: Task) {
    return this.httpClient.delete(`${this.API}/task/${apagarTask.id}`).pipe(
      take((1))
    );
  }

  // TAGS
  // addTag(newTag: Tag){
  //   return this.httpClient.post<Tag>(`${this.API}/page/tags`, newTag);
  // }

  // updateTag(tag: Tag) {
  //   return this.httpClient.put<Tag>(`${this.API}/tags/${tag.id}`, tag);
  // }

  // deleteTag(id: number) {
  //   return this.httpClient.delete(`${this.API}/tags/${id}`);
  // }

  //Stikcy Cards
  getCard():Observable<StickyCard[]> {
    return this.httpClient.get<StickyCard[]>(`${this.API}/stickyCards`).pipe(
      map(cards => cards.filter(cards => cards.id !== 0))
    )
  }

  adicionarCard(newCard: StickyCard) {
    return this.httpClient.post<StickyCard>(`${this.API}/stickyCards`, newCard);
  }

  atualizarCard(updateCard: StickyCard) {
    return this.httpClient.put<StickyCard>(`${this.API}/stickyCards/${updateCard.id}`, updateCard).pipe(
      take((1))
      );
  }

  apagarCard(deleteCard: StickyCard) {
    return this.httpClient.delete(`${this.API}/stickyCards/${deleteCard.id}`).pipe(
      take((1))
    );
  }


  // contentCard(){

  // }

  // addList(){

  // }
}
