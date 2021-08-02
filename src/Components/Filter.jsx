import React, { Component } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';


class Filter extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      nike: false,
      guzzi: false,
      stone: false,
      louis: false,
      priceSortTxt:false,
      recentSortTxt:false,
    };
  }

  brandFilter = (e) => {
    this.props.brand(e.target.id);

    switch (e.target.id) {
      case '나이키':
        if (this.state.nike) {
          this.setState({ nike: false });
        } else {
          this.setState({ nike: true });
        }
        break;
      case '구찌':
        if (this.state.guzzi) {
          this.setState({ guzzi: false });
        } else {
          this.setState({ guzzi: true });
        }
        break;
      case '스톤아일랜드':
        if (this.state.stone) {
          this.setState({ stone: false });
        } else {
          this.setState({ stone: true });
        }
        break;
      case '루이비통':
        if (this.state.louis) {
          this.setState({ louis: false });
        } else {
          this.setState({ louis: true });
        }
        break;

    
      default:
    }
  };

  dislikeFilter = () => {
    if (this.props.check) {
      this.props.setCheck(false);
    } else {
      this.props.setCheck(true);
    }
  };
    
  //   낮은 가격순 정렬 클릭 이벤트
  sortClickEvent = (e) => {
    switch (e.target.id){
        case 'priceSort':
            if (this.state.priceSortTxt) {
                this.setState({ priceSortTxt: false });
                this.props.setClick(false);

            } else {
                this.setState({ priceSortTxt: true });
                this.props.setClick(true);
            }
            break;
        
        case 'recentSort':
            if(this.state.recentSortTxt){
                this.setState({recentSortTxt:false})
                this.props.setRecentClick(false)
            }else{
                this.setState({recentSortTxt:true})
                this.props.setRecentClick(true)
            }
            break;
            default:
    }

  };

  render() {
    return (
      <FilterBoxLayout>
        <InnerLayout>
          <ItemLayout wd={50} jc={'space-around'}>
            <TextLayout fnt={15} col={'black'}>
              <b>브랜드</b>
            </TextLayout>
            <TextLayout
              fnt={13}
              col={this.state.nike ? 'black' : 'gray'}
              cus={'pointer'}
              id={'나이키'}
              onClick={this.brandFilter}
            >
              나이키
            </TextLayout>
            <TextLayout
              fnt={13}
              col={this.state.guzzi ? 'black' : 'gray'}
              cus={'pointer'}
              id={'구찌'}
              onClick={this.brandFilter}
            >
              구찌
            </TextLayout>
            <TextLayout
              fnt={13}
              col={this.state.stone ? 'black' : 'gray'}
              cus={'pointer'}
              id={'스톤아일랜드'}
              onClick={this.brandFilter}
            >
              스톤아일랜드
            </TextLayout>
            <TextLayout
              fnt={13}
              col={this.state.louis ? 'black' : 'gray'}
              cus={'pointer'}
              id={'루이비통'}
              onClick={this.brandFilter}
            >
              루이비통
            </TextLayout>
          </ItemLayout>
        </InnerLayout>

        <Divider />

        <InnerLayout>
          <ItemLayout wd={25} jc={'space-between'}>
            <div onClick={this.dislikeFilter}>
              <Checkbox checked={this.props.check} />
            </div>
            <TextLayout fnt={13} col={'black'}>
              관심 없는 상품 숨기기
            </TextLayout>
          </ItemLayout>
          <ItemLayout wd={28} jc={'space-between'}>
            <TextLayout id={'recentSort'} fnt={13} col={this.state.recentSortTxt ? 'black' : 'gray'} onClick={this.sortClickEvent}>
              최근 조회 순
            </TextLayout>
            <Divider2 />
            <TextLayout id={'priceSort'} fnt={13} col={this.state.priceSortTxt ? 'black' : 'gray'} onClick={this.sortClickEvent}>
              낮은 가격 순
            </TextLayout>
          </ItemLayout>
        </InnerLayout>
      </FilterBoxLayout>
    );
  }
}

const FilterBoxLayout = styled.div`
  width: 100%;
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
