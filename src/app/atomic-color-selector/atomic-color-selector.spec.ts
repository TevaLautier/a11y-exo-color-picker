import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicColorSelector } from './atomic-color-selector';

describe('AtomicColorSelector', () => {
  let component: AtomicColorSelector;
  let fixture: ComponentFixture<AtomicColorSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicColorSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicColorSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
