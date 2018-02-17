import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
	ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Orange', 10),
		new Ingredient('Banana', 20),
		new Ingredient('Grapes', 30),
		new Ingredient('Mangos', 50)
	];

  	ingAdded(ing: Ingredient) {
  		this.ingredients.push(ing);
  	}

}
