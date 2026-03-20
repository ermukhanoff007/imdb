import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviList } from './navi-list';

describe('NaviList', () => {
  let component: NaviList;
  let fixture: ComponentFixture<NaviList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaviList],
    }).compileComponents();

    fixture = TestBed.createComponent(NaviList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
