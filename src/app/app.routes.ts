import { Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

export const routes: Routes = [
    {
        path: '', component: RecipeListComponent
    },
    {
        path: 'recipe/:id', component: RecipeDetailComponent
    },
    {
        path: 'add-recipe', component: RecipeFormComponent
    },
];
