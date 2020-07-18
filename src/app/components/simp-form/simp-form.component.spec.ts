import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpFormComponent } from './simp-form.component';

describe('SimpFormComponent', () => {
  let component: SimpFormComponent;
  let fixture: ComponentFixture<SimpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
