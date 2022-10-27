import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreWeFirstComponent } from './who-are-we-first.component';

describe('WhoAreWeFirstComponent', () => {
  let component: WhoAreWeFirstComponent;
  let fixture: ComponentFixture<WhoAreWeFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoAreWeFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreWeFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
