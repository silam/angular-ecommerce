import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe('A Soup Recipe', 'This is simply a test', 'https://d1uz88p17r663j.cloudfront.net/resized/2020_06_03T13_18_11_mrs_ImageRecipes_27933x400_448_448.jpg'),
  //   new Recipe('A Pizza Recipe', 'This is simply a test', 'https://tse1.mm.bing.net/th?id=OIP.klX7K04cCjdzahpDqNOK0AHaHm&pid=Api&rs=1&c=1&qlt=95&w=113&h=116')
  // ];

  recipes: Recipe[] | undefined;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

    this.recipes = this.recipeService.getRecipes();
  }

  //onRecipeSelected(recipe: Recipe) {
   //this.recipeWasSelected.emit(recipe);
  //}

}
