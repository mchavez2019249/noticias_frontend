import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasPorCategoriaComponent } from './noticias-por-categoria.component';

describe('NoticiasPorCategoriaComponent', () => {
  let component: NoticiasPorCategoriaComponent;
  let fixture: ComponentFixture<NoticiasPorCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasPorCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticiasPorCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
