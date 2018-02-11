import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Recipe 1',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus feugiat enim, vel laoreet neque vulputate in. Quisque ullamcorper gravida faucibus. Morbi egestas vitae odio sed semper.',
			'http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png'),
		new Recipe('Recipe 2',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus feugiat enim, vel laoreet neque vulputate in. Quisque ullamcorper gravida faucibus. Morbi egestas vitae odio sed semper.',
			'http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png'),
		new Recipe('Recipe 3',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus feugiat enim, vel laoreet neque vulputate in. Quisque ullamcorper gravida faucibus. Morbi egestas vitae odio sed semper.',
			'http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png'),
		new Recipe('Recipe 4',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus feugiat enim, vel laoreet neque vulputate in. Quisque ullamcorper gravida faucibus. Morbi egestas vitae odio sed semper.',
			'http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png'),
		new Recipe('Recipe 5',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus feugiat enim, vel laoreet neque vulputate in. Quisque ullamcorper gravida faucibus. Morbi egestas vitae odio sed semper.',
			'http://www.pvhc.net/img13/kcsklielltknmyimwxqs.png')
	]
  	constructor() { }

  	ngOnInit() {

  	}
}
