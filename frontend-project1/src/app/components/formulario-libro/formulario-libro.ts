import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { LibroService } from '../../services/libro'; 

@Component({
  selector: 'app-formulario-libro',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    RouterModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatCheckboxModule
  ],
  templateUrl: './formulario-libro.html',
  styleUrl: './formulario-libro.css'     
})
export class FormularioLibroComponent implements OnInit {
  libroForm: FormGroup;
  idLibro: string | null = null;
  esModoEdicion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private libroService: LibroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.libroForm = this.fb.group({
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      anioPublicacion: ['', [Validators.required, Validators.min(1000)]],
      disponible: [true]
    });
  }

  ngOnInit(): void {
    this.idLibro = this.route.snapshot.paramMap.get('id');
    
    if (this.idLibro) {
      this.esModoEdicion = true;
      this.libroService.obtenerLibro(this.idLibro).subscribe((libro) => {
        this.libroForm.patchValue(libro);
      });
    }
  }

  guardarLibro(): void {
    if (this.libroForm.valid) {
      if (this.esModoEdicion) {
        this.libroService.actualizarLibro(this.idLibro!, this.libroForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      } else {
        this.libroService.crearLibro(this.libroForm.value).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}