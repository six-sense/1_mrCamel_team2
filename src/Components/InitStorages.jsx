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
    this.intervalTimer = setInterval(() => this.tick(), CONST_DATA.TIMER);
  }

  componentWillUnmount() {
    clearInterval(this.intervalTimer);
  }
  tick = () => {
    this.setState({ time: new Date() });
    console.log(this.state.time.getHours());
    if (this.state.time.getHours() === 0) {
      localStorage.clear();
    }
  };

  render() {
    return <></>;
  }
}

export default InitStorages;
