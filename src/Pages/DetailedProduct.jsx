import React, { Component } from "react";
import styled from "styled-components";
import Product from "Components/Product";
import mockData from "Utils/mockData.json";

class DetailedProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dislikeItems: JSON.parse(localStorage.getItem(`dislikeItems`)),
      recentItems: JSON.parse(localStorage.getItem("recentItems")),
      ItemList: [],
      location: this.props.location,
      history: this.props.history,
      RandomId: -1,
      RandomTitle: "",
      RandomBrand: "",
      RandomPrice: 0,
    };
  }

  componentDidMount() {
    const { location, history } = this.state;

    // 클릭해서 들어온 것이 아니면 home으로 return
    if (location.state === undefined) {
      history.push("/");
      return;
    }

    // 랜덤 로드용 fetch()
    this.setState({
      ItemList: mockData,
    });
  }

  randomLoad = async (currentItem, flag) => {
    const { ItemList, history, dislikeItems } = this.state;
    let RandomNumber = -1;

    let dislikeTitle = "";
    let dislikeTitleList = [];

    if (dislikeItems) {
      for (dislikeTitle of dislikeItems) {
        dislikeTitleList.push(dislikeTitle.title);
      }
    }

    // 차집합 : 전체 데이터 - 관심 없는 데이터
    let likeList = ItemList.filter(
      (el) => !dislikeTitleList.includes(el.title)
    );

    // 차집합 : likeList - 현재 선택된 데이터
    // 즉, 랜덤 로드시 관심 없는 상품과 현재 상품을 제외하고 랜덤 로드
    likeList = likeList.filter((el) => currentItem.title !== el.title);

    // 랜덤번호 생성
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min));
    RandomNumber = getRandom(0, likeList.length);

    const { title, brand, price } = likeList[RandomNumber];
    await this.setState({
      RandomId: RandomNumber,
      RandomTitle: title,
      RandomBrand: brand,
      RandomPrice: price,
    });

    if (this.state.RandomTitle) {
      const Product = {
        title: this.state.RandomTitle,
        brand: this.state.RandomBrand,
        price: this.state.RandomPrice,
      };
      if (flag) {
        this.HandleProduct(Product);
      }
    }
    history.push(`/product/${this.state.RandomId}`);
  };

  // 최근 조회 로컬 스토리지 저장.
  AddRecentProduct = (recentItems, ClickProd) => {
    recentItems.push(ClickProd);
    const stringProds = JSON.stringify(recentItems);
    localStorage.setItem("recentItems", stringProds);
  };

  HandleProduct = (ClickProd) => {
    let recentItems = this.state.recentItems;

    if (recentItems === null) {
      recentItems = [];
      this.AddRecentProduct(recentItems, ClickProd);
    } else {
      const filterItems = recentItems.filter(
        (el) => JSON.stringify(el) !== JSON.stringify(ClickProd)
      );
      this.AddRecentProduct(filterItems, ClickProd);
      this.setState({
        recentItems: JSON.parse(localStorage.getItem("recentItems")),
      });
    }
  };

  // 관심 없음 로컬 스토리지 저장
  AddDislikeProduct = (dislikeItems, ClickProd) => {
    dislikeItems.push(ClickProd);
    const stringProds = JSON.stringify(dislikeItems);
    localStorage.setItem("dislikeItems", stringProds);
  };

  HandleDislike = (ClickProd) => {
    let dislikeItems = this.state.dislikeItems;

    if (dislikeItems === null) {
      dislikeItems = [];
      this.AddDislikeProduct(dislikeItems, ClickProd);
    } else {
      const filterItems = dislikeItems.filter(
        (el) => JSON.stringify(el) !== JSON.stringify(ClickProd)
      );

      this.AddDislikeProduct(filterItems, ClickProd);
    }
    this.setState({
      dislikeItems: JSON.parse(localStorage.getItem("dislikeItems")),
    });
    this.randomLoad(ClickProd, false);
  };

  // 상품 조회 이력 버튼 페이지 이동.
  HandleRecentList = () => {
    const { history } = this.state;
    history.push({
      pathname: `/RecentList`,
    });
  };

  render() {
    const { location, RandomTitle, RandomBrand, RandomPrice } = this.state;
    let RandomProduct = {};
    if (location.state) {
      const { title, brand, price, id } = location.state;
      const currentItem = { title, brand, price, id };
      if (RandomTitle) {
        RandomProduct = {
          title: RandomTitle,
          brand: RandomBrand,
          price: RandomPrice,
        };
      }

      return (
        <ProductContainer>
          <ProductWrap>
            <LeftSide>
              <img
                src={`https://picsum.photos/5`}
                alt="product"
                aria-label={brand + "image"}
              />
            </LeftSide>
            <RightSide>
              <ProductContentWrap>
                <ContentWrap>
                  <ProductTitle>
                    <h1>{RandomTitle ? RandomTitle : title}</h1>
                  </ProductTitle>
                  <ProductBrand>
                    <h2>{RandomBrand ? RandomBrand : brand}</h2>
                  </ProductBrand>
                  <ProductPrice>
                    <h1>{`${
                      RandomPrice ? RandomPrice : price.toLocaleString()
                    } 원`}</h1>
                  </ProductPrice>
                </ContentWrap>
                <BtnWrap>
                  <RandomBtn>
                    <button
                      onClick={() =>
                        this.randomLoad(
                          RandomTitle ? RandomProduct : currentItem,
                          true
                        )
                      }
                    >
                      랜덤상품 조회
                    </button>
                  </RandomBtn>
                  <NoInterestBtn>
                    <button
                      onClick={() =>
                        this.HandleDislike(
                          RandomTitle ? RandomProduct : currentItem
                        )
                      }
                    >
                      관심없음
                    </button>
                  </NoInterestBtn>
                </BtnWrap>
              </ProductContentWrap>
            </RightSide>
          </ProductWrap>
          <RecentListBtnWrap>
            <button onClick={this.HandleRecentList}>
              상품 조회 이력 확인하기
            </button>
          </RecentListBtnWrap>
        </ProductContainer>
      );
    } else {
      return null;
    }
  }
}

export default DetailedProduct;

const ProductContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  height: 500px;
`;

const ProductWrap = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  height: 85%;
`;

const LeftSide = styled.div`
  width: 100%;
  img {
    position: relative;
    width: 90%;
    height: 90%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const RightSide = styled.div`
  width: 100%;
`;

const ProductContentWrap = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 50%;
  margin: 20px;
`;

const ProductTitle = styled.div`
  height: 10%;
  margin: 20px;
  h1 {
    font-size: larger;
    font-weight: 600;
  }
`;

const ProductBrand = styled.div`
  height: 10%;
  margin: 10px 10px 10px 20px;
  h2 {
    font-size: small;
    color: gray;
  }
`;

const ProductPrice = styled.div`
  height: 10%;
  margin: 20px;
  h1 {
    font-size: larger;
    font-weight: 600;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
`;

const RandomBtn = styled.div`
  width: 100%;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 50%;
    background-color: #1cbdcf;
    color: white;
    font-weight: 500;
    font-size: medium;
  }
`;

const NoInterestBtn = styled.div`
  width: 100%;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    width: 80%;
    height: 50%;
    transform: translate(-50%, -50%);
    color: #1cbdcf;
    font-weight: 500;
    font-size: medium;
    border: 1px solid;
  }
`;

const RecentListBtnWrap = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 10%;
  margin: 10px 10px 20px 0px;

  button {
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 86%;
    height: 100%;
    background-color: #1cbdcf;
    color: white;
    font-weight: 500;
    font-size: medium;
  }
`;
