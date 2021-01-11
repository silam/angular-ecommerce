import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Soup Recipe', 'This is simply a test', 'https://d1uz88p17r663j.cloudfront.net/resized/2020_06_03T13_18_11_mrs_ImageRecipes_27933x400_448_448.jpg'),
        new Recipe('A Pizza Recipe', 'This is simply a test', 'https://tse1.mm.bing.net/th?id=OIP.klX7K04cCjdzahpDqNOK0AHaHm&pid=Api&rs=1&c=1&qlt=95&w=113&h=116')
      ];

    getRecipes(){
        return this.recipes.slice();
    }
}