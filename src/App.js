import React from 'react';
import './App.css';
import MainContainer from './MainContainer'
import Info from './Info'
import MessageBox from './MessageBox'
import Nav from './Nav'

var message = [""]
var resourceNeeded
var foodNeeded

class App extends React.Component {

people = Math.floor(Math.random() * (5 - 2 + 1) + 2)
    
constructor(props) {
    super(props);
    let savegame = JSON.parse(localStorage.getItem("VillagersSave"))
    if (savegame !== null) {
      this.state = savegame
    } else {
      this.state = { 
        day: 0,
        hours: 0,
        villagers: this.people,
        workers: 0,
        food: Math.floor(Math.random() * (7*this.people - 2*this.people + 1)) + 2*this.people,
        wood: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
        stone: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
        gold: Math.floor(Math.random() * (50 - 20 + 1)) + 20,
        house: 0,
        farm : 0,
        sawmill: 0,
        stoneMine: 0,
        goldMine: 0
      }
    }
}

tick() {
  //calculating food needs
  foodNeeded = 2*this.state.workers+(this.state.villagers-this.state.workers) 
  if (this.state.food>=foodNeeded){
    this.setState(state => ({
        hours: state.hours +1
    }));
    if (this.state.hours>23) {
       // calculating daily needs
      resourceNeeded = this.state.house+this.state.farm+this.state.sawmill+this.state.stoneMine+this.state.goldMine
      // check if we have them in store
      this.setState({
        food: this.state.food - foodNeeded,
        day: this.state.day + 1,
        hours: 0
      })
      if (this.state.wood >= resourceNeeded) {
        this.setState({
          wood: this.state.wood - resourceNeeded
        })
      }
    }
  } else if (this.state.food > 0){
    this.setState(state => ({
      hours: state.hours +1
    }));
    if (this.state.hours===24) {
      this.setState({food:0})
    }
  }
  // Structure bonus
  if (this.state.day % 7 ===0 && this.state.hours ===0 && this.state.wood>0) {
    this.setState({
      food: this.state.food + 40 * this.state.farm,
      wood: this.state.wood + 30 * this.state.sawmill,
      stone: this.state.stone + 30 * this.state.stoneMine,
      gold: this.state.gold + 15 * this.state.goldMine 
    })
  }
}

componentDidMount() {
  this.interval = setInterval(() => this.tick(), 1000)
}

componentWillUnmount() {
    clearInterval(this.interval);
}

putMessage(text) {
  message.unshift(text)
}

updateRaw = (type, qt) => {
  if (type==='food') {
    this.setState({food: this.state.food + qt})
  } else if (type ==='wood') {  
      this.setState({wood: this.state.wood + qt})
  } else if (type ==='stone') {
      this.setState({stone: this.state.stone + qt})
  }
  this.putMessage(qt+" "+(type.charAt(0).toUpperCase()+type.slice(1))+" gathered")
}

updateStructure = (type) => {
  switch (type) {
    case "house":
      this.setState({
        house: this.state.house + 1,
        villagers: this.state.villagers + 4,
        wood: this.state.wood - 20,
        stone: this.state.stone - 20
      })
      this.putMessage("House built, 4 villagers arrived")
      break
    case "farm":
      this.setState({
        farm: this.state.farm + 1,
        workers: this.state.workers + 1,
        wood: this.state.wood - 40,
        stone: this.state.stone - 40
      })
      this.putMessage("Farm built")
      break
    case "sawmill":
      this.setState({
        sawmill: this.state.sawmill +1,
        workers: this.state.workers +1,
        wood: this.state.wood - 80,
        stone: this.state.stone - 50,
      })
      this.putMessage("Sawmill built")
      break
    case "stoneMine":
      this.setState({
        stoneMine: this.state.stoneMine +1,
        workers: this.state.workers +1,
        wood: this.state.wood - 150,
        stone: this.state.stone - 80,
      })
      this.putMessage("Stone Mine built")
      break
    case "goldMine":
      this.setState({
        goldMine: this.state.goldMine +1,
        workers: this.state.workers +1,
        wood: this.state.wood - 200,
        stone: this.state.stone - 200,
      })
      this.putMessage("Gold Mine built")
      break
    default:
      break
  }

}

saveGame() {
  localStorage.setItem("VillagersSave", JSON.stringify(this.state))
}

newGame() {
  localStorage.removeItem("VillagersSave")
  window.location.reload()
}
  
render(){
    return (
        <div className="App">
          <h1>Villagers</h1>
          <button onClick={() => this.saveGame()}>Save Game</button>
                    <button onClick={() => this.newGame()}>New Game</button>
          <Nav {...this.state} foodNeeded={foodNeeded} resourceNeeded={resourceNeeded}/>
          <div className="container">
            <div className="info">
                <Info/>
            </div>
            <div>
            <div className="messages">
              <MessageBox message={message}/>
            </div>
            <div className="action">
              <MainContainer {...this.state} parentSearchRaw={this.updateRaw} parentBuildStructure={this.updateStructure} />
            </div>
            </div>
          </div>
        </div>
      );
}
}
export default App;
