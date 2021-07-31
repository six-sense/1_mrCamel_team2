import React, { Component } from 'react';
const CONST_DATA = require('Utils/ConstantData');

class InitStorages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    this.intervalTimer = setInterval(() => this.tick(), 10000);
  }

  componentWillUnmount() {
    clearTimeout(this.intervalTimer);
  }
  tick = () => {
    this.setState({ time: new Date() });
    
    if (this.state.time.getHour() === 0) {
      localStorage.removeItem('recentItems');
      localStorage.removeItem('dislikeItems');
    }
  };

  render() {
    return <></>;
  }
}

export default InitStorages;
