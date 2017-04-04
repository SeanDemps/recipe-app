import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesViewComponent } from './components/recipes-view/recipes-view.component';
import { StarComponent } from './components/star/star.component';
import { SearchComponent } from './components/search/search.component';
import { StarredService } from './services/starred.service';
import { RecipesService } from './services/recipes.service';
import { HttpWrapperService } from './services/http-wrapper.service';
import { RecipesResolver, RecipeDetailResolver, StarredRecipeResolver } from './resolvers';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailsComponent,
    RecipesListComponent,
    RecipesViewComponent,
    StarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'recipes-view',
        pathMatch: 'full'
      },
      {
        path: 'recipes-view',
        component: RecipesViewComponent,
        resolve: {
          recipes: RecipesResolver,
          state: 'allState'
        }
      },
      {
        path: 'recipes-view/:page',
        component: RecipesViewComponent,
        resolve: {
          recipes: RecipesResolver,
          state: 'allState'
        }
      }, {
        path: 'recipes-view/:page/:id',
        component: RecipesViewComponent,
        resolve: {
          recipes: RecipesResolver,
          recipe: RecipeDetailResolver,
          state: 'allState'
        }
      }, {
        path: 'starred-recipes/:page',
        component: RecipesViewComponent,
        resolve: {
          recipes: StarredRecipeResolver,
          state: 'starState'
        } 
      },{
        path: 'starred-recipes/:page/:id',
        component: RecipesViewComponent,
        resolve: {
          recipes: StarredRecipeResolver,
          recipe: RecipeDetailResolver,
          state: 'starState'
        }
      }
    ])
  ],
  providers: [
    RecipesService, 
    StarredService,
    HttpWrapperService,
    RecipesResolver,
    StarredRecipeResolver,
    RecipeDetailResolver,
    {
      provide: 'starState',
      useValue: () => 'starred-recipes'
    }, {
      provide: 'allState',
      useValue: () => 'recipes-view'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
