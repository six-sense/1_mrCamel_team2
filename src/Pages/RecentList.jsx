import React, { Component } from 'react';
import Filter from '../Components/Filter';
import Item from '../Components/Item';
import FilteringItem from '../Components/FiteringItem';
import productData from 'Utils/mockData.json';

class RecentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brandName: [],
      filterdData: productData,
    };
  }

  selectBrand = (res) => {
    // 기존에 선택했던 브랜드 경우 => 선택 제거
    if (this.state.brandName.includes(res)) {
      const findIndx = this.state.brandName.indexOf(res);
      this.state.brandName.splice(findIndx, 1); // 필터링 제거 인덱스 삭제
      this.setState({ brandName: this.state.brandName }, () => {
        this.filterData();
      });
    }
    // 최초 선택 => 필터 기능
    else {
      this.setState({ brandName: this.state.brandName.concat(res) }, () => {
        this.filterData();
      });
    }
  };

  filterData() {
    console.log(this.state.brandName);
    if (this.state.brandName.length > 0) {
      let newItemData = [];
      for (let i = 0; i < this.state.brandName.length; i++) {
        console.log(this.state.brandName[i]);
        let itemData = '';
        for (itemData of productData) {
          if (itemData.brand == this.state.brandName[i]) {
            newItemData.push(itemData);
          }
        }
      }
      this.setFilterData(newItemData);
    } else {
      this.setFilterData(productData);
    }
  }

  setFilterData(arrayList) {
    this.setState({ filterdData: arrayList });
  }

  render() {
    return (
      <div style={{ width: '650px', flexDirection: 'column', margin: 'auto' }}>
        <Filter brand={this.selectBrand} />
        <FilteringItem
          selectBrand={this.state.brandName}
          productData={this.state.filterdData}
        />
      </div>
    );
  }
}
export default RecentList;
