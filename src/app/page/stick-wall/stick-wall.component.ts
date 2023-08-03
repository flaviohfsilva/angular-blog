import { StickyCard } from './../shared.interface';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { PageService } from '../page.service';


@Component({
  selector: 'app-stick-wall',
  templateUrl: './stick-wall.component.html',
  styleUrls: ['./stick-wall.component.css'],
})
export class StickWallComponent {

  cardForm!: FormGroup;
  modal: boolean = false;
  modalDelete: boolean = false;
  titles: string = '';
  descriptions: string = '';
  color: string = '#ffff'
  cards: StickyCard[] = [];
  selectedCard: StickyCard | null = null; //Vai rastrear o card selecionado para edição
  cardEditado: boolean = false; //Vai dizer se o card foi editado ou não

  constructor(private formBuilder: FormBuilder, private pageService: PageService){}

  ngOnInit(){
    this.cardForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required]
    })
    this.iniciarCard();
  }

  iniciarCard(){
    this.pageService.getCard().subscribe(
      (cards) => {
        this.cards = cards;
      },
      (error) =>{
        console.log("Card não foi adicionado", error)
      }
    )
  }

  createCard(){
    const newCard = {
      id: 0,
      title: this.cardForm.get('titulo')!.value,
      content: this.cardForm.get('descricao')!.value,
      color: this.color
    };

    this.pageService.adicionarCard(newCard).subscribe(
      (response)=>{
        this.cards.push(response);
        this.cardForm.reset();
        this.mostrarModal();
        console.log("Sticky Card adicionado");
      },
      (error)=>{
        console.log("Stikcy Card não foi adicionado", error);
      }
    )
  }

  atualizarCard(card: StickyCard){

    this.selectedCard = card;
    this.cardEditado = true;
    this.titles = card.title;
    this.descriptions = card.content;
    this.color = card.color;
    this.modal = true;
  }

  enviarAtualizacaoCard() {
    if (!this.selectedCard) {
      console.log("Nenhum card selecionado para atualizar.");
      return;
    }

    const updatedCard: StickyCard = {
      id: this.selectedCard.id,
      title: this.titles,
      content: this.descriptions,
      color: this.color
    };

    this.pageService.atualizarCard(updatedCard).subscribe(
      (response) => {
        const index = this.cards.findIndex(card => card.id === this.selectedCard!.id); // O findIndex é utilizado para encontrar o índice do primeiro elemento do array

        if(index !== -1){
          this.cards[index] = updatedCard;
        }

        this.mostrarModal();
        console.log("Card atualizado", response);
      },
      (error) => {
        console.log("Erro ao atualizar o card", error);
      }
    );
  }

  apagarCard(){

    if (!this.selectedCard) {
      console.log("Nenhum card selecionado para atualizar.");
      return;
    }

    const deleteCard: StickyCard = {
      id: this.selectedCard!.id,
      title: this.titles,
      content: this.descriptions,
      color: this.color
    };

    this.pageService.apagarCard(deleteCard).subscribe(
      (response) => {
        const index = this.cards.findIndex(card => card.id === this.selectedCard!.id);

        if(index !== -1){
          this.cards.splice(index, 1);
        }
        
        console.log("Card apagado com sucesso!", response);
      },
      (error) => {
        console.log("Não foi possível apagar esse card", error);
      }
    )


    this.modalDelete = false;
  }


  submit(){
    if(this.cardForm.invalid){
      return;
    }
    console.log("Card criado");
  }

  mostrarModal(){
    this.modal = !this.modal;
    if(!this.cardEditado){
     this.cardForm.reset();
    }
    this.cardEditado = false;
  }

  mostrarModalDelete(){
    this.modalDelete = !this.modalDelete;
    this.modal = false;
  }

  addColor(colors: string){
    this.color = colors;
  }


}


