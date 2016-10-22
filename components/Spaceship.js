import React from 'react';

const Spaceship = React.createClass({
  getDefaultProps(){
    return {
      name: '',
      speed: 0,
      hasRockets: false,
      colors: ['black', 'red']
    }
  },

  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
});

module.exports = Spaceship;
