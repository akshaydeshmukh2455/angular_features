import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuComComponent } from './stu-com.component';

describe('StuComComponent', () => {
  let component: StuComComponent;
  let fixture: ComponentFixture<StuComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
