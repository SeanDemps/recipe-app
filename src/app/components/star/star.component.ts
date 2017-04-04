import { Component, Input, OnChanges } from '@angular/core';
import { StarredService } from '../../services/starred.service';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  providers: []
})
export class StarComponent implements OnChanges {
  @Input() public recipe;
  public starred: boolean

  constructor(private starredService: StarredService) { }

  ngOnChanges() {
    this.starred = this.recipe.starred;
  }

  public toggleStar(id: number) {
    if (this.starred) {
      this.unstar(id);
    } else {
      this.star(id);
    }
  }

  private star(id: number) {
    this.starred = true;
    this.starredService.addToStars(id);
  }

  private unstar(id: number) {
    this.starred = false;
    this.starredService.removeFromStars(id);
  }

}
