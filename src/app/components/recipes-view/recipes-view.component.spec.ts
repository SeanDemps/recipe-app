import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesViewComponent } from './recipes-view.component';

describe('RecipesViewComponent', () => {
  let component: RecipesViewComponent;
  let fixture: ComponentFixture<RecipesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
