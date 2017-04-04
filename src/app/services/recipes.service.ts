import { Injectable } from '@angular/core';

import { HttpWrapperService } from './http-wrapper.service';

@Injectable()
export class RecipesService {

  constructor(private httpWrapperService: HttpWrapperService) { }

  public getRecipes(page = 0, limit = 10): Promise<any> {
    return this.httpWrapperService.get(`http://localhost:3000/recipes?page=${page}&limit=${limit}`);
  }

  public getRecipeDetails(recipeId: number) {
      return this.httpWrapperService.get(`http://localhost:3000/recipe-detail?recipeId=${recipeId}&userId=1`);
  }

}
