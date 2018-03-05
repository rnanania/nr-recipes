import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
 	recipe: Recipe;
 	recipeId: number = 0;

 	constructor(private recipeService: RecipeService,
 		private router: Router,
 		private activatedRoute: ActivatedRoute){}

 	ngOnInit(){
 		this.activatedRoute.params.subscribe((params: Params) => {
 			this.recipeId = +params['id'];
 			this.recipe = this.recipeService.getRecipe(this.recipeId);
 		});
	}

	addIngredietnsToShoppingList(){
		this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
	}

	editRecipeRedirect() {
		this.router.navigate(['edit'],{relativeTo: this.activatedRoute});
	}
}
