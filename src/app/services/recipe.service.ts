import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 1,
      name: 'Pancakes',
      ingredients: ['Pancake package', 'Butter', 'Syroup'],
      instructions: 'Sift the dry ingredients together. Make a well and add the wet ingredients before you stir to combine. Then scoop the batter onto a hot pan. Cook for two to three minutes before you flip it. Make sure they brown on both sides.',
      imageUrl: '../../assets/pancakes.jpg'
    },
    {
      id: 2,
      name: 'Greek salad',
      ingredients: [
        '1 large tomato', 
        '4 leaves of romain lettuce', 
        '6 dark green olives', 
        'half an onion',
        'one small cucumber',
        'greek feta cheese', 
        'salt', 
        'black pepper', 
        'olive oil'
      ],
      instructions: `
        Wash the tomato, lettuce leaves, and cucumber.
        Cut them up and throw them in the bowl.
        Clean the onion, cut it into semi circles and throw them in the bowl.
        Cut the feta cheese into cubes and put them in the bowl alogn with the olives.
        Sprinkle salt and grind black pepper.
        Pour olive oil on the sala and voila.`,
      imageUrl: '../../assets/greek_salad.jpg'
    },
  ];

  constructor() { }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push({...recipe, id: this.recipes.length + 1});
  }

  deleteRecipe(id: number) {
    this.recipes = this.recipes.filter(recipe => recipe.id != id);
    // reset the ids to match the index
    this.recipes.forEach((recipe,index) => {
      recipe.id = index++;
    })
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.filter(recipe => recipe.id === id)[0];
  }
}
