import React, { Component } from 'react';
import styled from 'styled-components';
import nike from 'assets/dummyImage.jpeg';


class Item extends Component {
  constructor(props){
    super(props);
    this.state=({
      //로컬스토리지 관심없음 데이터 저장
      dislikeData: JSON.parse(localStorage.getItem("dislikeItems")),
      ContentList:[]
    })
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/data/mock.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          ContentList: data,
        });
      });
     
  }

  makeDislikeList=(item, idx)=>{
    for(let itemData of this.state.dislikeData){
      if(item.title === itemData.title){
        alert('24시간 후 조회 가능')
      }
      else{
        this.props.history.push(`/product/${idx}`)
      }
    }
  }

  render() {
    
    return (
      <>
        {this.props.productData?.map((item, idx) => (
          <ItemBoxLayout key={idx} onClick={()=>{this.makeDislikeList(item,idx)}}>
            <InnerLayout>
              
              <ItemLayout wd={45} style={{ flex: 'none' }}>
                <img
                  src={nike}
                  alt="nike_product"
                  style={{ width: '250px', height: '150px' }}
                />
              </ItemLayout>

              <ItemLayout
                wd={50}
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <TextLayout fnt={20} col={'black'}>
                  {' '}
                  {item.title}
                </TextLayout>
                <TextLayout fnt={15} col={'gray'} style={{ margin: 'auto 0' }}>
                  {item.brand}
                </TextLayout>
                <TextLayout
                  fnt={20}
                  col={'black'}
                  style={{ marginTop: 'auto' }}
                >
                  {`${item.price.toLocaleString()} 원`}
                </TextLayout>
              </ItemLayout>
            </InnerLayout>
          </ItemBoxLayout>
        ))}
      </>
    );
  }
}

const ItemBoxLayout = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  padding: 30px 60px;
  border-left: 1px solid #cdcdcd;
  border-right: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
`;

const InnerLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
`;

const ItemLayout = styled.div`
  width: ${(props) => props.wd}%;
`;
const TextLayout = styled.div`
  width: auto;
  height: auto;
  min-height: 10px;
  font-size: ${(props) => props.fnt}px;
  color: ${(props) => props.col};
`;

export default Item;
