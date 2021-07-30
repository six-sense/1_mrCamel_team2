import React, { Component } from 'react';
import products from 'Utils/mockData.json';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = { products };
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }
  //   componentDidMount() {
  //     fetch('http://localhost:3000/data/mock.json')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         data.sort((a, b) => a.price - b.price);
  //         this.setState({ data: data });
  //       });
  //   }

  sortByPriceAsc() {
    this.setState((prevState) => {
      this.state.products.sort((a, b) => a.price - b.price);
    });
  }

  render() {
    return;
  }
}

export default Sort;
