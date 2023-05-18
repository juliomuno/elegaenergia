import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuelegaPage } from './menuelega.page';

describe('MenuelegaPage', () => {
  let component: MenuelegaPage;
  let fixture: ComponentFixture<MenuelegaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuelegaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
