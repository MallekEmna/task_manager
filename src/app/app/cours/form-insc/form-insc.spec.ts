import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInsc } from './form-insc';

describe('FormInsc', () => {
  let component: FormInsc;
  let fixture: ComponentFixture<FormInsc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInsc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInsc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
