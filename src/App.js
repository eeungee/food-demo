import React from 'react';
import Main from './components/Main'
import Nutrition from './components/Nutrition'
import My from './components/My'
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      currentPage : 0
    }
  }

  changePage = (page) => {
    this.setState({
      currentPage: page
    })
  }

  render(){
    const { currentPage } = this.state
    return (<div>
      {currentPage == 0 && <Main changePage={this.changePage} />}
      {currentPage == 1 && <Nutrition changePage={this.changePage} />}
      {currentPage == 2 && <My changePage={this.changePage} />}
    </div>)
  }
}

export default App;
