import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';

class Filter extends Component {
  render() {
    return (
      <>
        <FilterBoxLayout>
          <InnerLayout>
            <ItemLayout wd={50} jc={'space-around'}>
              <TextLayout fnt={15} col={'black'}>
                <b>브랜드</b>
              </TextLayout>
              <TextLayout fnt={13} col={'gray'} cus={'pointer'}>
                나이키
              </TextLayout>
              <TextLayout fnt={13} col={'gray'} cus={'pointer'}>
                구찌
              </TextLayout>
              <TextLayout fnt={13} col={'gray'} cus={'pointer'}>
                스톤아일랜드
              </TextLayout>
              <TextLayout fnt={13} col={'gray'} cus={'pointer'}>
                루이비똥
              </TextLayout>
            </ItemLayout>
          </InnerLayout>

          <Divider />

          <InnerLayout>
            <ItemLayout wd={25} jc={'space-between'}>
              <Checkbox checked={false} />
              <TextLayout fnt={13} col={'black'}>
                관심 없는 상품 숨기기
              </TextLayout>
            </ItemLayout>
            <ItemLayout wd={28} jc={'space-between'}>
              <TextLayout fnt={13} col={'black'}>
                최근 조회 순
              </TextLayout>
              <Divider2 />
              <TextLayout fnt={13} col={'gray'} oncClick={this.sortByPriceAsc}>
                낮은 가격 순
              </TextLayout>
            </ItemLayout>
          </InnerLayout>
        </FilterBoxLayout>
      </>
    );
  }
}

const FilterBoxLayout = styled.div`
  width: 650px;
  height: 90px;
  border: 1px solid #cdcdcd;
`;

const InnerLayout = styled.div`
  width: 100%;
  height: 50%;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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
const Divider = styled.div`
  border-top: 0.5px solid #cdcdcd;
  margin: 0;
`;

const Divider2 = styled.div`
  border-left: 0.5px solid #cdcdcd;
  margin: 0;
  height: 10px;
`;
export default Filter;
