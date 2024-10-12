import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstaPage } from './insta.page';

describe('InstaPage', () => {
  let component: InstaPage;
  let fixture: ComponentFixture<InstaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
