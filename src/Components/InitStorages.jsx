import React, { Component } from 'react';
const CONST_DATA = require('Utils/ConstantData');

// class InitStorages extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       time: new Date(),
//     };
//   }
//   componentDidMount() {
//     this.intervalTimer = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearTimeout(this.intervalTimer);
//   }
//   tick = () => {
//     this.setState({ time: new Date() });
//     console.log(this.state.time);
//     if (this.state.time === 0) {
//       localStorage.removeItem('recentItems');
//       localStorage.removeItem('dislikeItems');
//       localStorage.clear();
//     }
//   };

//   render() {
//     return <></>;
//   }
// }

// export default InitStorages;

class InitStorages extends Component {
  render() {
    return <div></div>;
  }
}

export default InitStorages;
