import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]  = [

    new Recipe('A Test Recipe', 'This is a test', 'https://www.sandiegoprosthodontics.com/files/2018/09/Recipes-Banner.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
