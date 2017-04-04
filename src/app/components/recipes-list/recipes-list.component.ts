import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ResolveData } from '@angular/router';

@Component({
  selector: 'recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Input() public onSelectedRecipe;
  @Input() public recipes: Array<any>;
  @Input() public assetLimitPerPage: number;
  public showBackArrow: boolean;
  public showForwardArrow: boolean;
  public currentRecipe: any;
  public currentId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(() => {
      let id = this.route.snapshot.paramMap.get('id');
      this.currentId = id ? parseInt(id) : null;
    })
  }

  public onSelect(recipe: any) {
    this.currentRecipe = recipe;
    this.onSelectedRecipe(recipe);
  }

}
