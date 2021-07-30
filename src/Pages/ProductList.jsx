import React from "react";
import styled from "styled-components";

class DetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ContentList: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/data/mock.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ContentList: data,
        });
      });
  }

  render() {
    const { ContentList } = this.state;

    return (
      <DetailPageContainer>
        <ProductListContainer>
          {ContentList?.map((products, index) => {
            return (
              <ProductBox key={index}>
                <img
                  src={`https://picsum.photos/${index}`}
                  alt="product"
                  aria-label={products.brand + "image"}
                />
                <ProductContentWrap>
                  <ProductContentItem>
                    <span>{products.title}</span>
                  </ProductContentItem>
                  <ProductContentItem>
                    <span className="brandName">{products.brand}</span>
                  </ProductContentItem>
                  <ProductContentItem>
                    <span>{`${products.price.toLocaleString()} 원`}</span>
                  </ProductContentItem>
                </ProductContentWrap>
              </ProductBox>
            );
          })}
        </ProductListContainer>
      </DetailPageContainer>
    );
  }
}
const DetailPageContainer = styled.div``;

const ProductListContainer = styled.ul``;

const ProductBox = styled.li`
  display: flex;
  flex-direction: column;
  float: left;
  width: 340px;
  margin: 30px;
  font-size: 16px;
  border: solid 1px #8d8d8d;
  img {
    width: 340px;
    height: 300px;
  }
`;

const ProductContentWrap = styled.div``;

const ProductContentItem = styled.p`
  margin: 10px 5px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  .brandName {
    margin: 0;
    opacity: 0.5;
  }
`;

export default DetailPage;
