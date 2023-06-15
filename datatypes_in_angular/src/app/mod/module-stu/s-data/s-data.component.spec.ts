import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SDataComponent } from './s-data.component';

describe('SDataComponent', () => {
  let component: SDataComponent;
  let fixture: ComponentFixture<SDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
