import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBComponent } from './grid-b.component';

describe('GridBComponent', () => {
  let component: GridBComponent;
  let fixture: ComponentFixture<GridBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
