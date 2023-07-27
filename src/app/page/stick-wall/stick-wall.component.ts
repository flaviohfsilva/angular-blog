import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-stick-wall',
  templateUrl: './stick-wall.component.html',
  styleUrls: ['./stick-wall.component.css'],
})
export class StickWallComponent {

  cardForm!: FormGroup;
  modal: boolean = false;
  titles: string = '';
  descriptions: string = '';
  color: string = '#ffff'
  cards: { title: string, description: string, color: string }[] = [];

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.cardForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    })
  }

  submit(){
    if(this.cardForm.invalid){
      return;
    }
    console.log("Card criado");
  }

  mostrarModal(){
    this.modal = !this.modal;
  }

  addColor(colors: string){
    this.color = colors;
  }

  createCard(){
    const newCard = {
      title: this.titles,
      description: this.descriptions,
      color: this.color
    };

    this.cards.push(newCard);
    this.cardForm.reset();
    this.mostrarModal();
  }
}


