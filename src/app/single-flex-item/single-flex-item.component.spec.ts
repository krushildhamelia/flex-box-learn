import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleFlexItemComponent } from './single-flex-item.component';

describe('SingleFlexItemComponent', () => {
  let component: SingleFlexItemComponent;
  let fixture: ComponentFixture<SingleFlexItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleFlexItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleFlexItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
