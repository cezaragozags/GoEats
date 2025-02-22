import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoMenusComponent } from './catalogo-menus.component';

describe('CatalogoMenusComponent', () => {
  let component: CatalogoMenusComponent;
  let fixture: ComponentFixture<CatalogoMenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatalogoMenusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
