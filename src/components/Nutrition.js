import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

@inject('foodStore')
@observer
class Nutrition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>
      <h1 style={{}}>영양 성분</h1>
      <hr />
      <div style={{ display: 'flex' }}>
        <div style={{ borderRight: "1px solid" }}>
          <ul>
            <li>
              구이류
            </li>
            <li>
              육류
            </li>
            <li>
              김치류
            </li>
          </ul>
        </div>
        <ul>
          {this.props.foodStore.foods.map((food, index) => {
            return <li>{food}</li>
          })}
        </ul>
      </div>
      <IconButton onClick={() => this.props.changePage(0)} style={{ padding: 0 }}>
        <SearchIcon style={{ width: 56, height: 56 }} />
      </IconButton>
    </div>
  }

}

export default Nutrition