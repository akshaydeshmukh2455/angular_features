import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComComponent } from './output-com.component';

describe('OutputComComponent', () => {
  let component: OutputComComponent;
  let fixture: ComponentFixture<OutputComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
