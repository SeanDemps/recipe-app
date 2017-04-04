import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, ResolveData } from '@angular/router';
import { StarredService } from './services/starred.service';
import { RecipesService } from './services/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  public onStarredState: boolean;
  
  constructor(private route: ActivatedRoute, private router: Router) {
      this.router.events.subscribe(() => {
        this.onStarredState = this.router.url.indexOf('starred-recipes') !== -1;
      });
  }

  public title = 'Recipes';
}
