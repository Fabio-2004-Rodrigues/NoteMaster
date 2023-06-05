import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardNotesComponent } from './new-card-notes.component';

describe('NewCardNotesComponent', () => {
  let component: NewCardNotesComponent;
  let fixture: ComponentFixture<NewCardNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCardNotesComponent]
    });
    fixture = TestBed.createComponent(NewCardNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
