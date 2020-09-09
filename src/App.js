import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherCard from './WeatherCard'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        cards: []
    }
    this.cards = new Array(1).fill().map((_, i) => {
      return (
        <WeatherCard cardID={(i+1)} key={i}/>
      )
    })
  }

render() {
  return (
    <>
    {this.cards}
    </>
    );
    
}

}

export default App;