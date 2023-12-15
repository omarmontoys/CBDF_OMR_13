import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent {
  categoria = {
    id: 0,
    nombre: 'Nombre',
    descripcion: 'Descripcion',
  };

  categorias = [
    {
      id: 1,
      nombre: 'Zapateria',
      descripcion: 'Todo lo relacionado con zapatos',
    },
    { id: 2, nombre: 'Pesca', descripcion: 'Todo lo relacionado con la pesca' },
    {
      id: 3,
      nombre: 'Deportes',
      descripcion: 'Todo lo relacionado con deportes',
    },
    { id: 4, nombre: 'Hogar', descripcion: 'Todo lo relacionado con el hogar' },
    {
      id: 5,
      nombre: 'Electronica',
      descripcion: 'Todo lo relacionado con pantallas y laptops',
    },
  ];

  agregarCategoria() {
    const posID = this.categorias.findIndex(
      (categoria) => categoria.id == this.categoria.id
    );
    alert(posID);
    if (this.categoria.id > 0 && posID == -1) {
      //El error que queda vinculado con el ultimo que se agrega
      const categoriaSinVincular = {
        id: this.categoria.id,
        nombre: this.categoria.nombre,
        descripcion: this.categoria.descripcion,
      };
      this.categorias.push(categoriaSinVincular);
    } else {
      alert('Error:  verifica los datos  ');
    }
  } //Crear una categoria

  eliminarCategoria(id: number) {
    //alert
    //confirm
    //
    if (confirm('Esta seguro que desea eliminar el registro? ')) {
      const posID = this.categorias.findIndex(
        (categoria) => categoria.id == id
      );
      this.categorias.splice(posID, 1);
    }
  } //Eliminar una categoria

  seleccionarCategoria(categoriaSeleccionada: {
    id: number;
    nombre: string;
    descripcion: string;
  }) {
    this.categoria.id = categoriaSeleccionada.id;
    this.categoria.nombre = categoriaSeleccionada.nombre;
    this.categoria.descripcion = categoriaSeleccionada.descripcion;
  } //Saber que categoria se actualizara

  actualizarCategoria() {
    //Como actualizo la categoria que seleccione?
    const idActualizar = this.categorias.findIndex(
      (categoria) => categoria.id == this.categoria.id
    );
    const categoriaSinVincular = {
      id: this.categoria.id,
      nombre: this.categoria.nombre,
      descripcion: this.categoria.descripcion,
    };
    this.categorias[idActualizar] = categoriaSinVincular;
    //alert(this.categorias[idActualizar].id);
  } //Actualizar la categoria seleccionada
}
