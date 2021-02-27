import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFlexItemMultipleComponent } from './double-flex-item-multiple.component';

describe('DoubleFlexItemMultipleComponent', () => {
  let component: DoubleFlexItemMultipleComponent;
  let fixture: ComponentFixture<DoubleFlexItemMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleFlexItemMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleFlexItemMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
