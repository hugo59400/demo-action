import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FilmComponent } from './film.component';

describe('FilmComponent', () => {
  let component: FilmComponent;
  let fixture: ComponentFixture<FilmComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FilmComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    const film = {
      title: 'Interstellar'
    }
    fixture = TestBed.createComponent(FilmComponent);
    component = fixture.componentInstance;
    component.film = film;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain Interstellar when provided interstellar', () => {
    fixture.detectChanges();
    expect(component.film.title).toBe('Interstellar');
  });

  it('should contain interstellar', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h3.card-title')?.textContent).toContain('Interstellar');
  });
});
