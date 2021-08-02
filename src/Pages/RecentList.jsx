import React, { Component } from "react";
import Filter from "Components/Filter";
import Item from "Components/Item";
// import productData from 'Utils/mockData.json';
import recentSample from "Utils/recentData.json";
import dislikeSample from "Utils/dislikeData.json";

class RecentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brandName: [],
      // recentItems: localStorage.setItem(
      //   'recentItems',
      //   JSON.stringify(recentSample)
      // ),
      recentItems: JSON.parse(localStorage.getItem("recentItems")),
      dislikeItems: JSON.parse(localStorage.getItem("dislikeItems")),
      // dislikeItems: localStorage.setItem(
      //   'dislikeItems',
      //   JSON.stringify(dislikeSample)
      // ),
      origin_recentItems: JSON.parse(localStorage.getItem("recentItems")),
      origin_reverse_recentItems: JSON.parse(
        localStorage.getItem("recentItems")
      ),
      check: false,
      click: false, // 낮은 가격 정렬 버튼
      recentClick: false, // 최근 조회 정렬 버튼
      history: this.props.history
    };
    // this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }

  // ========================= 브랜드 필터링 기능 ============================ //

  // 브랜드 선택 기능
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
    // 관심없음 X
    if (!this.state.check) {
      // 브랜드 O
      if (this.state.brandName.length > 0) {
        let newItemData = [];
        for (let i = 0; i < this.state.brandName.length; i++) {
          let itemData = "";
          for (itemData of this.state.origin_recentItems) {
            // console.log(itemData.brand)
            if (itemData.brand === this.state.brandName[i]) {
              newItemData.push(itemData);
            }
          }
        }
        this.setFilterData(newItemData);
      }
      // 브랜드 X
      else {
        this.setFilterData(this.state.origin_recentItems);
      }
    }

    // 관심없음 O
    else {
      // 브랜드 O
      if (this.state.brandName.length > 0) {
        let newItemData = [];
        for (let i = 0; i < this.state.brandName.length; i++) {
          let itemData = "";
          for (itemData of this.state.recentItems) {
            // console.log(itemData.brand)
            if (itemData.brand === this.state.brandName[i]) {
              newItemData.push(itemData);
            }
          }
        }
        // this.setFilterData(newItemData);
      }
    }
  }

  // ========================= 관심없음 필터링 기능 ============================ //

  // 관심없음 체크박스
  checkClick = (res) => {
    this.setState({ check: res }, () => {
      this.state.check ? this.setDislikeFilter() : this.setDefaultFilter();
    });
  };

  // 관심없음 O
  setDislikeFilter() {
    let dislikeData = "";
    let recentData = "";
    let resultList = [];
    let findTitle = [];

    // 브랜드 O
    if (this.state.brandName.length > 0) {
      for (recentData of this.state.recentItems) {
        for (dislikeData of this.state.dislikeItems) {
          if (
            dislikeData.title === recentData.title &&
            dislikeData.price === recentData.price &&
            dislikeData.brand === recentData.brand
          ) {
            findTitle.push(dislikeData.title);
          }
        }
      }
    }
    // 브랜드 X
    else {
      for (recentData of this.state.origin_recentItems) {
        for (dislikeData of this.state.dislikeItems) {
          if (
            dislikeData.title === recentData.title &&
            dislikeData.price === recentData.price &&
            dislikeData.brand === recentData.brand
          ) {
            findTitle.push(dislikeData.title);
          }
        }
      }
    }
    // 차집합 : 조회이력 내역 - 관심없음 내역의 제목(findTitle)
    resultList = this.state.recentItems.filter(
      (item) => !findTitle.includes(item.title)
    );
    console.log(resultList);
    this.setFilterData(resultList);
  }

  // 관심없음 X
  setDefaultFilter() {
    // 브랜드 O
    if (this.state.brandName.length > 0) {
      this.filterData();
    }
    // 브랜드 X
    else {
      let originItems = JSON.parse(localStorage.getItem("recentItems"));
      this.setFilterData(originItems);
    }
  }

  //  =========== 정렬 기능 ==============

  // ============ 낮은 가격 순 ======================

  //  낮은 가격 순 클릭 이벤트 결과에 따라 조건에 맞는 함수 실행
  clickAsc = (res) => {
    this.setState({ click: res }, () => {
      this.state.click ? this.sortByPriceAsc() : this.setOriginData();
    });
  };

  // 낮은 가격 순으로 정렬 기능(수정)
  sortByPriceAsc = () => {
    let newProductList = this.state.recentItems.sort((a, b) => {
      return a.price - b.price;
    });
    this.setFilterData(newProductList);
  };

  // ============ 최근 조회 순 ======================

  //  최근 조회 순 클릭 이벤트 결과에 따라 조건에 맞는 함수 실행
  clickRecentAsc = (res) => {
    this.setState({ recentClick: res }, () => {
      console.log(this.state.recentClick);
      this.state.recentClick ? this.sortByRecentAsc() : this.setOriginData();
    });
  };

  sortByRecentAsc = () => {
    let newItemData = [];
    let itemData = "";
    for (itemData of this.state.origin_recentItems) {
      newItemData.push(itemData);
    }
    newItemData.reverse();
    this.setState({ origin_reverse_recentItems: newItemData });
    this.setFilterData(newItemData);
  };
  //  기존 조회 Storage로 정렬 방식으로 복귀
  setOriginData() {
    let newItemData = [];
    let itemData = "";
    for (itemData of this.state.origin_recentItems) {
      newItemData.push(itemData);
    }
    // newItemData.reverse()
    // this.setState({origin_reverse_recentItems:newItemData})
    this.setFilterData(newItemData);
  }

  // ======= Filter 컴포넌트에서 실제로 맵핑하는 데이터 setState 하는 함수 (공통) =========
  setFilterData(arrayList) {
    this.setState({ recentItems: arrayList });
  }

  render() {
    
    return (
      <div style={{ width: "650px", flexDirection: "column", margin: "auto" }}>
        <Filter
          brand={this.selectBrand}
          setCheck={this.checkClick}
          check={this.state.check}
          setClick={this.clickAsc}
          click={this.state.click}
          setRecentClick={this.clickRecentAsc}
          recentClick={this.state.recentClick}
        />
        <Item
          selectBrand={this.state.brandName}
          productData={this.state.recentItems}
          history={this.state.history}
        />
      </div>
    );
  }
}
export default RecentList;
