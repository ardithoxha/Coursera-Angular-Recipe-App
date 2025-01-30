import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
  standalone: true,
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor (
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.recipe = this.recipeService.getRecipeById(id);
  }

  deleteRecipe(id: number): void {
    const userConfirmation = confirm("Are you sure you want to delete this recipe?")
    if (userConfirmation){
      this.recipeService.deleteRecipe(id);
      this.router.navigate(['/']);
    }
  }
}
