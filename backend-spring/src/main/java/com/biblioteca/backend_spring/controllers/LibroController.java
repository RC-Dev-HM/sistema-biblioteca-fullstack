package com.biblioteca.backend_spring.controllers; // Ajusta tu paquete

import com.biblioteca.backend_spring.models.Libro;
import com.biblioteca.backend_spring.repositories.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:4200")
public class LibroController {

    @Autowired
    private LibroRepository libroRepository;


    @GetMapping
    public List<Libro> obtenerLibros() {
        return libroRepository.findAll();
    }

    @PostMapping
    public Libro crearLibro(@RequestBody Libro libro) {
        return libroRepository.save(libro);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Libro> actualizarLibro(@PathVariable Long id, @RequestBody Libro detallesLibro) {
        Optional<Libro> libroOptional = libroRepository.findById(id);

        if (!libroOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        Libro libro = libroOptional.get();
        libro.setTitulo(detallesLibro.getTitulo());
        libro.setAutor(detallesLibro.getAutor());
        libro.setAnioPublicacion(detallesLibro.getAnioPublicacion());
        libro.setDisponible(detallesLibro.getDisponible());

        return ResponseEntity.ok(libroRepository.save(libro));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarLibro(@PathVariable Long id) {
        if (!libroRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        libroRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}