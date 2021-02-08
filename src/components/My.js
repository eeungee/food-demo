import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button , IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/My.css'

@inject('foodStore')
@observer
class My extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      checkedFoods : []
    }
  }
  componentDidMount(){
    const checkedFoods = this.props.foodStore.foods.filter((food) => {
      return food.checked
    })
    console.log(checkedFoods)
    this.setState({
      checkedFoods:checkedFoods
    })
  }
  render() {
    return <div>
      <h1 className="header">영양 성분</h1>
      <IconButton onClick={() => this.props.changePage(0)} style={{ padding: 0, position:'fixed', top:16, right:86 }}>
        <SearchIcon style={{ width: 56, height: 56 }} />
      </IconButton>
      <Button 
          style={{width:56, height:56, border: '0.3px solid lightgray', fontSize: 18, fontWeight:'bold', padding: 0, position: 'fixed', right:16, top:16 }}
          onClick={() => this.props.changePage(1)} >
          BACK
      </Button>
      <div class="selected_food_container">
      {this.state.checkedFoods.map((food, index) => {
        return <div key={index} class="selected_food">
          <h2>{food.food_name}</h2>
          <div class="discrip_part">
            <p>칼로리 : {food.kcal ? food.kcal : '0'} kcal / {food.serving_size} g</p>
            <p>탄수화물 : {food.carbo ? food.carbo : '0'} g</p>
            <p>단백질 : {food.pro ? food.pro : '0'} g</p>
            <p>지방 : {food.fat ? food.fat : '0'} g</p>
            <p>당 : {food.sugar ? food.sugar : '0'} g</p>
            <p>나트륨 : {food.salt ? food.salt : '0'} g</p>
          </div>
        </div>
      })}
      </div>
      <h3 className="total">총 칼로리 :  {this.props.foodStore.getCalories()} kcal</h3>
    </div>
  }
}

export default My;