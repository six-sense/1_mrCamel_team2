import React,{Component} from 'react';
import styled from 'styled-components';

const title = '나이키 테아 흰검';
const brand ='나이키';
const cost = '4000원'

class Item extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return (

                <ItemBoxLayout>
                    <InnerLayout>
                        <ItemLayout wd={45} style={{flex:'none'}}>
                        {/* 상품 이미지 */}
                        </ItemLayout>

                        <ItemLayout wd={50} style={{marginLeft:'auto',display:'flex',flexDirection:'column'}}>
                            <TextLayout fnt={20} col={'black'} > {title}</TextLayout>
                            <TextLayout fnt={15} col={'gray'} style={{margin:'auto 0'}}>{brand}</TextLayout>

                            <TextLayout fnt={20} col={'black'} style={{marginTop:'auto'}}>{cost}</TextLayout>
                        </ItemLayout>
                    </InnerLayout>

                </ItemBoxLayout>
          
            
        );
    }
}

const ItemBoxLayout = styled.div`
    width:100%;
    min-height:200px;
    display:flex;
    justify-content:center;
    padding: 30px 60px;
    border-left:1px solid #cdcdcd;
    border-right:1px solid #cdcdcd;
    border-bottom:1px solid #cdcdcd;
    
`;

const InnerLayout = styled.div`
    width:100%;
    height:auto;
    display:flex;
`;

const ItemLayout = styled.div`
    width:${(props)=>props.wd}%;
    
`;
const TextLayout = styled.div`
    width:auto;
    height:auto;
    min-height:10px;
    font-size:${(props)=>props.fnt}px;
    color:${(props)=>props.col};
`






export default Item;