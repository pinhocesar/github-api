import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin: 16px;
    
    h1{
        font-size: 32px;
        font-weight: bold;
    }
    
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    
    h4{
        font-size: 14px;
        font-weight: bold;
    }
`

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    
    div{
        margin-right: 10px;
        text-align: center;
    }
`

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
    font-size: 14px;
    
    h3{
        margin-right: 4px;
        font-size: 16px;
    }
    
    a:hover{
        color: #8c8c8c;
    }
`

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 16px;
`