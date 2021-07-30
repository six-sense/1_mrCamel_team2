import React from "react";
import styled from "styled-components";

class DetailedProduct extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = {
      title: "중고 나이키 테아 흰검 245 30000원",
      brand: "나이키",
      price: 30000,
    };
    return (
      <ProductContainer>
        <ProductWrap>
          <LeftSide>
            <img
              src={`https://picsum.photos/3`}
              alt="product"
              aria-label={data.brand + "image"}
            />
          </LeftSide>
          <RightSide>
            <ProductContentWrap>
              <ContentWrap>
                <ProductTitle>
                  <h1>{data.title}</h1>
                </ProductTitle>
                <ProductBrand>
                  <h2>{data.brand}</h2>
                </ProductBrand>
                <ProductPrice>
                  <h1>{`${data.price.toLocaleString()} 원`}</h1>
                </ProductPrice>
              </ContentWrap>
              <BtnWrap>
                <RandomBtn>
                  <button>랜덤상품 조회</button>
                </RandomBtn>
                <NoInterestBtn>
                  <button>관심없음</button>
                </NoInterestBtn>
              </BtnWrap>
            </ProductContentWrap>
          </RightSide>
        </ProductWrap>
        <RecentListBtnWrap>
          <button>상품 조회 이력 확인하기</button>
        </RecentListBtnWrap>
      </ProductContainer>
    );
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
