import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingListService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Celery', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredinet: Ingredient) {
    this.ingredients.push(ingredinet);
  }
}
