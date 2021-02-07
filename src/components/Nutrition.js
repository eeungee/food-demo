import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button , IconButton, Checkbox  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/Nutrition.css'

@inject('foodStore')
@observer
class Nutrition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }


  checkEachFood = (food_name) => {

    const renewalFood = this.props.foodStore.foods.map((food) => {
      if(food.food_name == food_name){
        return {
          ...food,
          checked: !food.checked
        }
      }else{
        return {
          ...food
        }
      }
    })

    this.props.foodStore.resetFood(renewalFood)
    console.log(renewalFood)

  }


  render() {
    return <div>
      <h1 className="header">영양 성분</h1>
      <div className="searched_food_container">
          {this.props.foodStore.foods.map((food, index) => {
            return <div key={index} className="each_food">
              <h2>{food.food_name}<Checkbox
                checked={food.checked}
                onChange={() => this.checkEachFood(food.food_name)}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              /></h2>
              <p>칼로리 : {food.kcal ? food.kcal : '0'} kcal / {food.serving_size} g</p>
              <p>탄수화물 : {food.carbo ? food.carbo : '0'} g</p>
              <p>단백질 : {food.pro ? food.pro : '0'} g</p>
              <p>지방 : {food.fat ? food.fat : '0'} g</p>
              <p>당 : {food.sugar ? food.sugar : '0'} g</p>
              <p>나트륨 : {food.salt ? food.salt : '0'} g</p>
              {/* <p>출처 : {food.result_from}</p> */}
              </div>
          })}
      </div>
      <IconButton onClick={() => this.props.changePage(0)} style={{ padding: 0, position:'fixed', top:16, right:86 }}>
        <SearchIcon style={{ width: 56, height: 56 }} />
      </IconButton>
      <Button 
          style={{width:56, height:56, border: '0.3px solid lightgray', fontSize: 18, fontWeight:'bold', padding: 0, position: 'fixed', right:16, top:16 }}
          onClick={() => this.props.changePage(2)} >
          MY
      </Button>
    </div>
  }
}

export default Nutrition

//http://openapi.foodsafetykorea.go.kr/api/dfa1a00161e84b9c912a/I2790/json/1/5/DESC_KOR=가자미구이