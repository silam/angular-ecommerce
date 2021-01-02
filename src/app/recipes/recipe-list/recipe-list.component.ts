import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]  = [

    new Recipe('Recipe Pizza', 'Recipe for Pizza', 'https://media.istockphoto.com/photos/mediterranean-pizza-picture-id503818102'),
    new Recipe('Cheese Soup', 'This is a recipe for Cheese Soup', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Makeover-Potato-Cheese-Soup_exps22253_HWS133216B07_11_2bC_RMS.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
