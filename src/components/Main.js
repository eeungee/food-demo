import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField, IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import axios from 'axios';

const getData = async (food) => {
  return await axios.get(`http://openapi.foodsafetykorea.go.kr/api/dfa1a00161e84b9c912a/I2790/json/1/5/DESC_KOR=${food}`)
}

@inject('foodStore')
@observer
class Main extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value)
    getData(e.target.search.value).then(result => {

      const correctFoods = result.data.I2790.row.filter((food) => food.DESC_KOR === e.target.search.value)
      
      if(!correctFoods.length){
        console.log("정의안댐!")
        window.alert("없는 음식입니다. 구체적으로 입력해주세요.")
        return;
      }

      const {
        GROUP_NAME,
        DESC_KOR,
        SUB_REF_NAME,
        SERVING_SIZE,
        NUTR_CONT1,
        NUTR_CONT2,
        NUTR_CONT3,
        NUTR_CONT4,
        NUTR_CONT5,
        NUTR_CONT6
      } = correctFoods[0]

      this.props.foodStore.addFood({
        group_name : GROUP_NAME,
        food_name : DESC_KOR,
        result_from : SUB_REF_NAME,
        serving_size : SERVING_SIZE,
        kcal : NUTR_CONT1,
        carbo : NUTR_CONT2,
        pro : NUTR_CONT3,
        fat : NUTR_CONT4,
        sugar : NUTR_CONT5,
        salt :NUTR_CONT6,
        checked : false
      })
    })
    .catch(failed=>console.log(failed))
    this.props.changePage(1)
  }



  render(){
    return <div style={{
        height: '100vh',
        display:'flex', alignItems:"center",justifyContent:"center"
    }}>
        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField name="search" id="outlined-basic" label="Search" variant="outlined" />
          <IconButton style={{padding:0}} type="submit">
          <SearchIcon style={{width:56, height:56}} />
          </IconButton>
        </form>
    </div>
  }

}

export default Main