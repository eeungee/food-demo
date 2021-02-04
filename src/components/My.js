import React from 'react'
import { inject, observer } from 'mobx-react';
import { Button , IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
      <h1>영양 성분</h1>
      <IconButton onClick={() => this.props.changePage(0)} style={{ padding: 0, position:'fixed', top:16, right:86 }}>
        <SearchIcon style={{ width: 56, height: 56 }} />
      </IconButton>
      <Button 
          style={{width:56, height:56, border: '0.3px solid lightgray', fontSize: 18, fontWeight:'bold', padding: 0, position: 'fixed', right:16, top:16 }}
          onClick={() => this.props.changePage(1)} >
          BACK
      </Button>
      <div style={{ display: 'flex', borderTop: '1px solid', flexWrap: 'wrap', height: '300px', overflowY: 'scroll', overflowX: 'hidden' }}>
      {this.state.checkedFoods.map((food, index) => {
        return <div key={index}>
          <h2>{food.food_name}</h2>
          <p>칼로리 : {food.kcal ? food.kcal : '0'} kcal / {food.serving_size} g</p>
          <p>탄수화물 : {food.carbo ? food.carbo : '0'} g</p>
          <p>단백질 : {food.pro ? food.pro : '0'} g</p>
          <p>지방 : {food.fat ? food.fat : '0'} g</p>
          <p>당 : {food.sugar ? food.sugar : '0'} g</p>
          <p>나트륨 : {food.salt ? food.salt : '0'} g</p>
        </div>
      })}
      </div>
      <h3>SUMMARY (칼로리만) :  {this.props.foodStore.getCalories()}</h3>
    </div>
  }
}

export default My;