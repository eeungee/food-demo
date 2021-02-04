import { observable, action } from 'mobx'

export default class FoodStore{
  @observable foods = [];
  @observable calories= 0;


  @action
  resetFood = (foods) => {
    this.calories = 0;
    foods.map((food) => {
      if(food.checked) this.calories += Number.parseInt(food.kcal)
    })
    console.log(this.calories)
    this.foods = foods
  }

  @action
  addFood = (food) => {
    this.foods.push(food)
    //this.calories += Number.parseInt(food.kcal)
  }

  @action
  getCalories = () => {
    return this.calories
  }
}