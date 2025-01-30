import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  imports: [RouterLink],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  standalone: true,
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
