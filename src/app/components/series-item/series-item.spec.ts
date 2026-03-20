import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesItem } from './series-item';

describe('SeriesItem', () => {
  let component: SeriesItem;
  let fixture: ComponentFixture<SeriesItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
