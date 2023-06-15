import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormBuilderComponent } from './nested-form-builder.component';

describe('NestedFormBuilderComponent', () => {
  let component: NestedFormBuilderComponent;
  let fixture: ComponentFixture<NestedFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
