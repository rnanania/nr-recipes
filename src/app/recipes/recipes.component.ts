import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent{
	recipe : Recipe = null;
	onSelectedRecipeEmitter(recipe: Recipe){
		this.recipe = recipe;
	}
}
