import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    className: ['zero', 'one', 'two', 'three', 'four', 'five', 'six']
  }

  render() {
    let classList = `fas Die-icon ${this.props.isActive ? "Die-icon-rolling" : ""}
      fa-dice-${this.props.className[this.props.dieValue]}`;

    return (
      <div className="Die">
        <i className={classList}></i>
      </div>      
    )
  }
}

export default Die;