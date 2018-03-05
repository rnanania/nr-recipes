import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent{
	@ViewChild('ingName') ingNameRef : ElementRef;
	@ViewChild('ingAmount') ingAmountRef : ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

	addIngredient(){
		const ingName = this.ingNameRef.nativeElement.value;
		const ingAmount = this.ingAmountRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
	}

}
