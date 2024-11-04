import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RessettingPage } from './ressetting.page';

describe('RessettingPage', () => {
  let component: RessettingPage;
  let fixture: ComponentFixture<RessettingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RessettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
