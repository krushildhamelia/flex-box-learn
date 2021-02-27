import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFlexItemComponent } from './double-flex-item.component';

describe('DoubleFlexItemComponent', () => {
  let component: DoubleFlexItemComponent;
  let fixture: ComponentFixture<DoubleFlexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleFlexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleFlexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
