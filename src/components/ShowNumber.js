import React from 'react';
import { inject, observer } from 'mobx-react';

@inject('numberStore')
@observer
export default class ShowNumber extends React.Component{
  render(){
    const { numberStore } = this.props
    const { number } = numberStore
    return (<div>
      <h1>{number}</h1>
    </div>)
  }
}