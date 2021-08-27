import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlavourPageComponent } from './flavour-page.component';

describe('FlavourPageComponent', () => {
  let component: FlavourPageComponent;
  let fixture: ComponentFixture<FlavourPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlavourPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlavourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
