import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlatillosComponent } from './form-platillos.component';

describe('FormPlatillosComponent', () => {
  let component: FormPlatillosComponent;
  let fixture: ComponentFixture<FormPlatillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlatillosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlatillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
