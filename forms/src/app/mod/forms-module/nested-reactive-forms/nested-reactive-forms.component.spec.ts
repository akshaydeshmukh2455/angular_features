import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedReactiveFormsComponent } from './nested-reactive-forms.component';

describe('NestedReactiveFormsComponent', () => {
  let component: NestedReactiveFormsComponent;
  let fixture: ComponentFixture<NestedReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
