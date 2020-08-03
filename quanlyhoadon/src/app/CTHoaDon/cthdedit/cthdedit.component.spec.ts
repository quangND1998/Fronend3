import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CthdeditComponent } from './cthdedit.component';

describe('CthdeditComponent', () => {
  let component: CthdeditComponent;
  let fixture: ComponentFixture<CthdeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CthdeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CthdeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
