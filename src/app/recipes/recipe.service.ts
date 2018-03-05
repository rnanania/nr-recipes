import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe> ();
	private recipes: Recipe[] = [
		new Recipe('Tomato Ombre on Grilled Rustic Bread',
			'Absolutely best recipe of the tomato season. Make it again and again and it never ceases to delight us and our guests. A perfect way to show off the hard work of growing heirlooms and eating them in a beautiful, simple way!',
			'https://assets.marthastewart.com/styles/wmax-750/d21/tomato-ombre-md109341/tomato-ombre-md109341_horiz.jpg?itok=LigHvjLO',
			[
				new Ingredient('Cibatta', 1),
				new Ingredient('Garlic', 2),
				new Ingredient('Tomato', 3),
				new Ingredient('Olive Oil', 1),
				new Ingredient('Sea Salt', 1),
				new Ingredient('Ground Pepper', 1)
			]
		),
		new Recipe('Beets and Yogurt with Pickled Rose Petals',
			'Bring a large pot of water to a boil and generously season with coarse salt. Add all beets, reduce heat, and simmer until beets are tender and easily pierced with a knife, about 15 minutes. Drain beets; when cool enough to handle, gently rub with a paper towel (or use a paring knife) to remove the skin, keeping as much of the root end intact as possible. Transfer beets to a bowl, cover to keep warm, and set aside.',
			'https://assets.marthastewart.com/styles/wmax-750/d18/beets10-mld1092452/beets10-mld1092452_horiz.jpg?itok=-dye97Lb',
			[
				new Ingredient('Coarse Salt', 1),
				new Ingredient('Baby Chioggia Beets', 2),
				new Ingredient('Baby Red Beet', 3),
				new Ingredient('Unsalted Butter', 1),
				new Ingredient('Bay Leaves', 5),
				new Ingredient('Allspice Berries', 2),
				new Ingredient('Hazelnut', 2),
				new Ingredient('Greek Yogurt', 1),
				new Ingredient('Cinnamon', 1)
			]),
		new Recipe('Zucchini Rollatini',
			'My husband oooohd and ahhhhd through the entire meal, which I served over spaghetti and Classic Bolognese sauce. He said "you should serve this to company." And here I thought that everything I make at home was company-quality. I think he meant that not only did it taste delicious, but it was beautiful on the plate as well. Anyway, it was really, really yummy made with fresh mozzarella and smoked prosciutto (the stuff I had in my refrigerator today).',
			'https://assets.marthastewart.com/styles/wmax-750/d22/zucchini-6251-md110312/zucchini-6251-md110312_horiz.jpg?itok=IhL5EtAE',
			[
				new Ingredient('Large Zucchini', 2),
				new Ingredient('Coarse Salt', 1),
				new Ingredient('Prosciutto', 6),
				new Ingredient('Olive Oil', 1),
				new Ingredient('Mozzarella', 1),
				new Ingredient('Basil Leaves', 20),
				new Ingredient('Tomato', 3),
			]),
		new Recipe('Crown Roast of Pork with Chestnut-Rye Stuffing',
			'Eight-chop racks of pork for a crown roast arent a standard supermarket item, so order them several days ahead of time. Ask the butcher to remove the chine bone, trim excess fat, and french (clean) the bones.',
			'https://assets.marthastewart.com/styles/wmax-750/d34/how-to-beauty-bracket-553-md110559/how-to-beauty-bracket-553-md110559_horiz.jpg?itok=A6eYC4OW',
			[
				new Ingredient('Pork', 1),
				new Ingredient('Garlic', 2),
				new Ingredient('Orange', 3),
				new Ingredient('Olive Oil', 1),
				new Ingredient('Sea Salt', 1),
				new Ingredient('Ground Pepper', 1)
			]),
		new Recipe('Strawberry Pistachio Semifreddo',
			'This is a great dessert recipe. Easy too! Before making this, I read Karen72s review and agreed, what is wrong with a few strawberry chunks? In the end, it was too much strawberry juice/pulp that was added to my cream mixture. It turned out fine, but I have a feeling the strawberry half would have been a bit more fluffy and delicate had I ran it through a sieve and discarded the pulp. Again, it was still delicious, but I am going to try it without the excess strawberry material next time.',
			'https://assets.marthastewart.com/styles/wmax-750/d49/msl-sweet-of-the-month-semifreddo-v1-021-md109977/msl-sweet-of-the-month-semifreddo-v1-021-md109977_horiz.jpg?itok=v2VWdCeS',
			[
				new Ingredient('Pistachios', 10),
				new Ingredient('Sugar', 3),
				new Ingredient('Heavy Cream', 1),
				new Ingredient('Strawberries', 8),
				new Ingredient('Eggs', 3),
				new Ingredient('Pure Vanilla', 1)
			])
	];

	constructor(private shoppingListService: ShoppingListService) {
	}

	getRecipes() {
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes.slice()[index];
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredients(ingredients);
	}
}