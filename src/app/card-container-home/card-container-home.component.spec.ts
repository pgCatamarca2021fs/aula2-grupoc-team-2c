import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContainerHomeComponent } from './card-container-home.component';

describe('CardContainerHomeComponent', () => {
  let component: CardContainerHomeComponent;
  let fixture: ComponentFixture<CardContainerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContainerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContainerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
