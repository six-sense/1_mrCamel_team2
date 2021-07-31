import React, { Component } from 'react';
import styled from 'styled-components';
import data from 'Utils/mockData.json';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: data,
    };
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }
  // sortByPriceAsc() {
  //   this.setState((prevState) => {
  //     this.state.productData.sort((a, b) => a.price - b.price);
  //   });
  // }

  sortByPriceAsc() {
    const { productData } = this.state;
    let newProductList = productData.sort((a, b) => {
      return a.price - b.price;
    });
    this.setState({
      productData: newProductList,
    });
  }

  render() {
    return (
      <ItemLayout wd={28} jc={'space-between'}>
        <TextLayout fnt={13} col={'black'}>
          최근 조회 순
        </TextLayout>
        <Divider2 />
        <TextLayout fnt={13} col={'gray'} oncClick={() => this.sortByPriceAsc}>
          낮은 가격 순
        </TextLayout>
      </ItemLayout>
    );
  }
}

const ItemLayout = styled.div`
  width: ${(props) => props.wd}%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.jc};
`;

const TextLayout = styled.div`
  font-size: ${(props) => props.fnt}px;
  color: ${(props) => props.col};
  cursor: ${(props) => props.cus};

  &:hover {
    cursor: pointer;
  }
`;

const Divider2 = styled.div`
  border-left: 0.5px solid #cdcdcd;
  margin: 0;
  height: 10px;
`;

export default Sort;
