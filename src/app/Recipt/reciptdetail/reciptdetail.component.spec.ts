import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciptdetailComponent } from './reciptdetail.component';

describe('ReciptdetailComponent', () => {
  let component: ReciptdetailComponent;
  let fixture: ComponentFixture<ReciptdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciptdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciptdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
