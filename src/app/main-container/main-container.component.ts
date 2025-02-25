import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-container',
  imports: [FormsModule, CommonModule],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})

export class MainContainerComponent {
  dropdownOpen = false;
  selectedCategory = 'Desayuno';
  categories = ['Desayuno', 'Comida', 'Cena'];
  selectedImage: any=null;

  newDish = {
    title: '',
    price: 0,
    description: '',
    image: '',
    quantity: 0
  };

  dishes = [
    { title: 'Huevos Estrellados', description: 'Elegir cantidad.', quantity: 1, price: 120, image: '/8.png', category: 'Desayuno' },
    { title: 'Filete con Champiñones', description: 'Elegir termino de carne y complementos.', quantity: 0, price: 120, image: '/11.png', category: 'Comida' },
    { title: 'Sincronizada', description: 'Elegir complemento.', quantity: 1, price: 120, image: '/14.png', category: 'Cena' }
  ];

  get filteredDishes() {
    return this.dishes.filter(dish => dish.category === this.selectedCategory);
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.dropdownOpen = false;
  }


  addDish() {
    if (this.newDish.title && this.newDish.price > 0) {
      let dish={
        title:this.newDish.title,
        price:this.newDish.price,
        quantity:this.newDish.quantity,
        description:this.newDish.description,
        image:this.newDish.image,
        category:this.selectedCategory
      }
      this.dishes.push(dish);
      this.newDish = { title: '', price: 0, description: '', image: '', quantity: 0 };
      this.selectedImage = null;
    }
  }

    // Maneja la imagen seleccionada
    onImageSelected(event: Event) {
      const file = (event.target as HTMLInputElement).files?.[0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
          this.newDish.image = reader.result as string; // guarda la URL en el objeto del platillo
        };
        reader.readAsDataURL(file);
      }
    }
  
    // Limpia el formulario
    clearForm() {
      this.newDish = {
        image: '',
        title: '',
        description: '',
        quantity: 0,
        price: 0
      };
      this.selectedImage = null;
    }



}