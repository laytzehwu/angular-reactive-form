import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridAComponent } from './grid-a.component';

describe('GridAComponent', () => {
  let component: GridAComponent;
  let fixture: ComponentFixture<GridAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
