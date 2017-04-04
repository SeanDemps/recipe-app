import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { StarredService } from './services/starred.service';
import { RecipesService } from './services/recipes.service';

@Injectable()
export class RecipesResolver implements Resolve<any> {
  constructor(private recipesService: RecipesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.recipesService.getRecipes(route.params.page);
  }
}

@Injectable()
export class StarredRecipeResolver implements Resolve<any> {
  constructor(private StarredService: StarredService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.StarredService.getStarsFromServer(route.params.page);
  }
}

@Injectable()
export class RecipeDetailResolver implements Resolve<any> {
  constructor(private recipesService: RecipesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.recipesService.getRecipeDetails(route.params.id);
  }
}