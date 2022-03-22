import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemesDetailsPageComponent } from './themes-details-page.component';

describe('ThemesDetailsPageComponent', () => {
  let component: ThemesDetailsPageComponent;
  let fixture: ComponentFixture<ThemesDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemesDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemesDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
