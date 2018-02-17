import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent{
	@ViewChild('ingName') ingNameRef : ElementRef;
	@ViewChild('ingAmount') ingAmountRef : ElementRef;
	@Output() ingredientAdded = new EventEmitter<Ingredient> ();


  	addIngredient(){
  		const ingName = this.ingNameRef.nativeElement.value;
  		const ingAmount = this.ingAmountRef.nativeElement.value;
  		this.ingredientAdded.emit(new Ingredient(ingName, ingAmount));
  	}

}
