import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoquanthueeditComponent } from './coquanthueedit.component';

describe('CoquanthueeditComponent', () => {
  let component: CoquanthueeditComponent;
  let fixture: ComponentFixture<CoquanthueeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquanthueeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoquanthueeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
