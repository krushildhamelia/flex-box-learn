import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourFlexItemMultipleComponent } from './four-flex-item-multiple.component';

describe('FourFlexItemMultipleComponent', () => {
  let component: FourFlexItemMultipleComponent;
  let fixture: ComponentFixture<FourFlexItemMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourFlexItemMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourFlexItemMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
