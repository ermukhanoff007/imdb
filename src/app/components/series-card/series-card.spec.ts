import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesCard } from './series-card';

describe('SeriesCard', () => {
  let component: SeriesCard;
  let fixture: ComponentFixture<SeriesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SeriesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
