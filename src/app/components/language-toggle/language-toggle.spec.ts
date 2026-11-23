import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LanguageToggle } from './language-toggle';

describe('LanguageToggle', () => {
  let component: LanguageToggle;
  let fixture: ComponentFixture<LanguageToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageToggle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
