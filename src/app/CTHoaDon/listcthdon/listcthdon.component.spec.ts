import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcthdonComponent } from './listcthdon.component';

describe('ListcthdonComponent', () => {
  let component: ListcthdonComponent;
  let fixture: ComponentFixture<ListcthdonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcthdonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcthdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
