import { observable, action } from 'mobx'

export default class FoodStore{
  @observable foods = [];

  @action
  addFood = (food) => {
      this.foods.push(food)
  }
}