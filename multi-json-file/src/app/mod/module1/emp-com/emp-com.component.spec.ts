import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpComComponent } from './emp-com.component';

describe('EmpComComponent', () => {
  let component: EmpComComponent;
  let fixture: ComponentFixture<EmpComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
