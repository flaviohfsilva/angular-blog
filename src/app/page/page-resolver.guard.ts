import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Resolve, RouterStateSnapshot } from '@angular/router';
import { StickyCard } from './shared.interface';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})



export class pageResolverGuard implements Resolve<StickyCard> {

  constructor(private pageService: PageService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StickyCard>{

    if(route.params && route.params['id']){
      return this.pageService.getCard();
    }

  }


};
