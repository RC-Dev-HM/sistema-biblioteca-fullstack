import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { LibroService } from '../../services/libro';
import { Libro } from '../../models/libro.model';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule],
  templateUrl: './lista-libros.html',
  styleUrl: './lista-libros.css'
})
export class ListaLibrosComponent implements OnInit {
  
  dataSource = new MatTableDataSource<any>(); 
  columnasAMostrar: string[] = ['id', 'titulo', 'autor', 'anioPublicacion', 'disponible', 'acciones'];

  constructor(private libroService: LibroService) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.libroService.obtenerLibros().subscribe({
      next: (datos: any) => {
        this.dataSource.data = datos; 
      },
      error: (err: any) => {
        console.error('Error al obtener los libros', err);
      }
    });
  }

  eliminarLibro(id: number | string | undefined): void {
    if (id && confirm('¿Estás seguro de que deseas eliminar este libro?')) {
      this.libroService.eliminarLibro(id).subscribe(() => {
        this.obtenerLibros(); 
      });
    }
  }
}