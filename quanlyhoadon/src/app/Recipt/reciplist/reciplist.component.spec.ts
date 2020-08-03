import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciplistComponent } from './reciplist.component';

describe('ReciplistComponent', () => {
  let component: ReciplistComponent;
  let fixture: ComponentFixture<ReciplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
