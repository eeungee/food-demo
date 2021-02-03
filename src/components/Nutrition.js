import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import '../styles/media.css'

@inject('foodStore')
@observer
class Nutrition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <h1>영양 성분</h1>
      <div style={{ display: 'flex', borderTop: "1px solid", flexWrap:'wrap', height: '300px', overflowY:'scroll',  overflowX:'hidden' }}>
          {this.props.foodStore.foods.map((food, index) => {
            return <div style={{ padding: 4, maxWidth:300, minWidth:200 ,width: '32%',height: '300px', borderBottom: '1px solid gray', overFlow: 'scroll', backgroundColor: 'lightblue'}} key={index} className="each_food">
              <h2>{food.food_name}</h2>
              <p>칼로리 : {food.kcal} kcal / {food.serving_size} g</p>
              <p>탄수화물 : {food.carbo} g</p>
              <p>단백질 : {food.pro} g</p>
              <p>지방 : {food.fat} g</p>
              <p>당 : {food.sugar} g</p>
              <p>나트륨 : {food.salt} g</p>
              {/* <p>출처 : {food.result_from}</p> */}
              </div>
          })}
      </div>
      <IconButton onClick={() => this.props.changePage(0)} style={{ padding: 0, position:'fixed', top:16, right:16 }}>
        <SearchIcon style={{ width: 56, height: 56 }} />
      </IconButton>
    </div>
  }

}

export default Nutrition

//http://openapi.foodsafetykorea.go.kr/api/dfa1a00161e84b9c912a/I2790/json/1/5/DESC_KOR=가자미구이