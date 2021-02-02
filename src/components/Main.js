import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField, IconButton  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

@inject('foodStore')
@observer
class Main extends React.Component{

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value)
    this.props.foodStore.addFood(e.target.search.value)
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