import React, { Component } from 'react';
import './Rolldice.css';
import Die from './Die';

class Rolldice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: this.randomNumber(6),
      dieTwo: this.randomNumber(6),
      isActive: false
    }
    this.rollDice = this.rollDice.bind(this);
  }

  // Function that handles all of activites following a click of the Roll Dice! button
  rollDice(e) {

    // isActive controls state of the Roll Dice/Rolling button and prop passed to Dice which is used to toggle class involved 
    // in animation
    this.setState({
      isActive: true 
    });

    // diceRoll sets an interval every 150 millisecond to randomly change the values of the dice to make the rolling impression
    let diceRoll = setInterval(() => {
      this.setState({
        dieOne: this.randomNumber(6),
        dieTwo: this.randomNumber(6),
      });      
    }, 150);

    // toggles isActive after one second to reset button and prop passed to Dice stopping the animation
    // clearInterval also stops the random numbers from displaying on the dice
    setTimeout(() => {
      this.setState({
        isActive: false
      });

      clearInterval(diceRoll);
    }, 1000);
  }

  randomNumber(maxNum) {
    return Math.floor(Math.random() * maxNum + 1);
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-pair">
          <Die dieValue = {this.state.dieOne} isActive = {this.state.isActive} />
          <Die dieValue = {this.state.dieTwo} isActive = {this.state.isActive} />
        </div>
        
        { this.state.isActive ? 
            <button className="Rolldice-button Rolldice-rolling" type="button">Rolling!</button> :
            <button className="Rolldice-button" onClick={this.rollDice} type="button">Roll Dice!</button>
        }
      </div>
    )
  }
}

export default Rolldice;

