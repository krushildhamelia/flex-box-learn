import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourFlexItemMultipleWithEqualSizeComponent } from './four-flex-item-multiple-with-equal-size.component';

describe('FourFlexItemMultipleWithEqualSizeComponent', () => {
  let component: FourFlexItemMultipleWithEqualSizeComponent;
  let fixture: ComponentFixture<FourFlexItemMultipleWithEqualSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourFlexItemMultipleWithEqualSizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourFlexItemMultipleWithEqualSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
