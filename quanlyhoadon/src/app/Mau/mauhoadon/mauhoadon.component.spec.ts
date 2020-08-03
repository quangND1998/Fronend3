import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MauhoadonComponent } from './mauhoadon.component';

describe('MauhoadonComponent', () => {
  let component: MauhoadonComponent;
  let fixture: ComponentFixture<MauhoadonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MauhoadonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MauhoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
