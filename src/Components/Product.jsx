import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      recentItems: JSON.parse(localStorage.getItem("recentItems")),
    };
  }

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
    }
  };

  render() {
    const { id, title, brand, price } = this.props;
    console.log("나 불림");
    const ClickProd = {
      title,
      brand,
      price,
    };
    return (
      <>
        <Link
          to={{
            pathname: `/product/${id}`,
            state: {
              title,
              brand,
              price,
            },
          }}
          onClick={() => this.HandleProduct(ClickProd)}
        >
          <ProductBox>
            <img
              src={`https://picsum.photos/${id}`}
              alt="product"
              aria-label={brand + "image"}
            />
            <ProductContentWrap>
              <ProductContentItem>
                <span>{title}</span>
              </ProductContentItem>
              <ProductContentItem>
                <span className="brandName">{brand}</span>
              </ProductContentItem>
              <ProductContentItem>
                <span>{`${price.toLocaleString()} 원`}</span>
              </ProductContentItem>
            </ProductContentWrap>
          </ProductBox>
        </Link>
      </>
    );
  }
}

const ProductBox = styled.li`
  display: flex;
  flex-direction: column;
  float: left;
  width: 340px;
  margin: 30px;
  font-size: 16px;
  border: solid 1px #8d8d8d;
  cursor: pointer;
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

export default Product;
