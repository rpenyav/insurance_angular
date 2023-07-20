import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HomePageViewComponent } from './home-page-view.component';
import { loadUsers } from '../../store/user.actions';

describe('HomePageViewComponent', () => {
  let component: HomePageViewComponent;
  let fixture: ComponentFixture<HomePageViewComponent>;
  let store: MockStore;

  const initialState = { users: [] }; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageViewComponent ],
      providers: [ provideMockStore({ initialState }) ]
    });

    fixture = TestBed.createComponent(HomePageViewComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch'); // Espiamos la función dispatch
    fixture.detectChanges();
  });

  it('se ha creado', () => {
    expect(component).toBeTruthy();
  });

  it('cargamos los usuarios al iniciar el componente al llamar a loadUsers', () => {
    expect(store.dispatch).toHaveBeenCalledWith(loadUsers()); 

  });
});
