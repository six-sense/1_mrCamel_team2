import React from 'react';
import styled from 'styled-components';

class Alert extends React.Component{
    constructor(props){
        super(props)
        this.setState({
            modalValid:true,
        })
    }

    closeModal = ()=>{
        this.setState()
    }
    render(){
        return(
            <AlertContainer>
                <CloseBtn onClick={this.closeModal}>
                        X
                </CloseBtn>
                <AlertWrap>
                    <Message>
                        '관심 없음'으로 등록된 상품입니다.
                        24시간 후 열람 가능합니다.
                    </Message>
                </AlertWrap>
            </AlertContainer>
        )
    }
}
const AlertContainer=styled.div``

const AlertWrap = styled.div``

const Message = styled.p`
font-size:16px;
`

const CloseBtn = styled.button`
border-radius:50%;
`
export default Alert;
