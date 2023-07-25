import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTask'
})
export class SearchTaskPipe implements PipeTransform {

  transform(itens: string[], searchText: string): string[] {

    if(!itens || !searchText){
      return itens;
    }

    searchText = searchText.toLocaleLowerCase();

    return itens.filter(item => item.toLowerCase().includes(searchText));
  }

}
