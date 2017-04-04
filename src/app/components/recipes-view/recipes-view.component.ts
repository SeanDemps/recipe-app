import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ResolveData } from '@angular/router';
import { Location } from '@angular/common';

import { RecipesService } from '../../services/recipes.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'recipes-view',
  templateUrl: './recipes-view.component.html',
  styleUrls: ['./recipes-view.component.css'],
  providers: []
})
export class RecipesViewComponent implements OnInit {
  private currentState: string;
  public pageIndex: number;
  public recipesList: any;
  public currentRecipe: any;
  public showBackArrow = false;
  public showForwardArrow = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private location: Location
  ) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentState = `/${this.route.snapshot.data['state']}`;
      let recipes = this.route.snapshot.data['recipes'];
      let index = this.route.snapshot.paramMap.get('page');
      let recipeId = this.route.snapshot.paramMap.get('id');
      let currentRecipeId = recipeId ? parseInt(recipeId) : undefined;

      this.pageIndex = parseInt(index) ? parseInt(index) : 0;
      this.recipesList = recipes.list;

      if(recipeId) {
        this.currentRecipe = this.recipesList.find(recipe => {
          return recipe && recipe.id === currentRecipeId
        });
    }

      this.showBackArrow = this.pageIndex > 0;
      this.showForwardArrow = !recipes.lastPage;
    })
  }

  public setCurrentRecipe = (recipe: any) => {
    this.router.navigate([this.currentState, this.pageIndex, recipe.id])
  }

  public goToPrevPage() {
    this.router.navigate([this.currentState, --this.pageIndex])
  }

  public goToNextPage() {
    this.router.navigate([this.currentState, ++this.pageIndex])
  }

}
