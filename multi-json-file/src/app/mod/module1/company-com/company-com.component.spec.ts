import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyComComponent } from './company-com.component';

describe('CompanyComComponent', () => {
  let component: CompanyComComponent;
  let fixture: ComponentFixture<CompanyComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
