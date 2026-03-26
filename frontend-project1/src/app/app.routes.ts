import { Routes } from '@angular/router';

// Importamos tus dos pantallas
import { ListaLibrosComponent } from './components/lista-libros/lista-libros';
import { FormularioLibroComponent } from './components/formulario-libro/formulario-libro';

export const routes: Routes = [
  { path: '', component: ListaLibrosComponent }, 
  { path: 'nuevo', component: FormularioLibroComponent },
  { path: 'editar/:id', component: FormularioLibroComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];