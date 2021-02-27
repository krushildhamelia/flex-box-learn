import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFlexItemMultipleWithEqualSizeComponent } from './double-flex-item-multiple-with-equal-size.component';

describe('DoubleFlexItemMultipleWithEqualSizeComponent', () => {
  let component: DoubleFlexItemMultipleWithEqualSizeComponent;
  let fixture: ComponentFixture<DoubleFlexItemMultipleWithEqualSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleFlexItemMultipleWithEqualSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleFlexItemMultipleWithEqualSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
