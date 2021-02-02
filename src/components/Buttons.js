import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('numberStore')
@observer
export default class Buttons extends React.Component{
  render(){
    const { numberStore } = this.props
    return (<div>
      <button onClick={numberStore.increase}>+</button>
      <button onClick={numberStore.decrease}>-</button>
    </div>)
  }
}