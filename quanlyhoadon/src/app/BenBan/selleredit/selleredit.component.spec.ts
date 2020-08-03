import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellereditComponent } from './selleredit.component';

describe('SellereditComponent', () => {
  let component: SellereditComponent;
  let fixture: ComponentFixture<SellereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
