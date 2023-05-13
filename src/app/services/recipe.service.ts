import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Creamy Mushroom Pasta Delight',
      'This is simply a test',
      'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      [new Ingredient('Fresh mushrooms', 10), new Ingredient('Heavy cream ', 1)]
    ),
    new Recipe(
      'Grilled Vegetable Medley',
      'This is simply a test',
      'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      [new Ingredient('Bell peppers', 5), new Ingredient('Zucchini', 3)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}
