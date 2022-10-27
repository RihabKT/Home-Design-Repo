import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeSecondComponent } from './who-are-we-second.component';

describe('WhoAreWeSecondComponent', () => {
  let component: WhoAreWeSecondComponent;
  let fixture: ComponentFixture<WhoAreWeSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreWeSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
