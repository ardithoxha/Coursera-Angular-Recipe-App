import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  imports: [FormsModule],
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css',
  standalone: true,
})
export class RecipeFormComponent {
  newRecipe: Recipe = {
    id: 0,
    name: '',
    ingredients: [],
    instructions: '',
    imageUrl: ''
  };
  ingredientInput: string = '';
  
  constructor(private recipeService: RecipeService) {}
  
  addIngredient() {
    if (this.ingredientInput.trim()) {
      this.newRecipe.ingredients.push(this.ingredientInput.trim());
      this.ingredientInput= '';
    }
  }

  removeIngredient(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
  }

  submitRecipe() {
    // the below if statement is for an easy demo of adding a sandwitch recipe
    // otherwise the user has to provide a full url of the image for it to work
    if (this.newRecipe.imageUrl === 'sandwitch') {
      this.newRecipe.imageUrl = '../../assets/sandwitch.jpg'
    }
    if (this.newRecipe.name && this.newRecipe.instructions) {
      this.recipeService.addRecipe(this.newRecipe);
      this.newRecipe = {
        id: 0,
        name: '',
        ingredients: [],
        instructions: '',
        imageUrl: ''
      };
    }
  }
}
