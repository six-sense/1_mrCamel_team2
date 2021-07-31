import React from "react";
import styled from "styled-components";
import Product from "../Components/Product";
import mockData from "Utils/mockData.json";

class DetailPage extends React.Component {
  constructor() {
    super();
    this.state = {
      ContentList: [],
    };
  }
  componentDidMount() {
    this.setState({
      ContentList: mockData,
    });
  }

  render() {
    const { ContentList } = this.state;

    return (
      <DetailPageContainer>
        <ProductListContainer>
          {ContentList?.map((product, index) => (
            <Product
              id={index}
              key={index}
              title={product.title}
              brand={product.brand}
              price={product.price}
            />
          ))}
        </ProductListContainer>
      </DetailPageContainer>
    );
  }
}
const DetailPageContainer = styled.div``;

const ProductListContainer = styled.ul``;

export default DetailPage;
