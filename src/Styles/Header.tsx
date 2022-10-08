import styled from 'styled-components'

export const HeaderContent = styled.header`
    position: relative;
    width: 100%;
    height: 50px;
    background: var(--bg-header);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding-left: max(30px,env(safe-area-inset-left));
    padding-right: max(30px,env(safe-area-inset-right));
`
export const LogoHeader = styled.picture`
    position: relative;
    
    source{
        position: absolute;
        top: 0;
        left: 0;
    }
    img{
        position: relative;
        left: -8px;
        width: 100%;
        max-width: 100px;
    }
`

export const Cart = styled.picture`
    position: relative;
    display: flex;
    height: 50px;
    align-items: center;
    
    source{
        position: absolute;
        top: 0;
        left: 0;
    }
    img{
        width: 100%;
        max-width: 100px;
        cursor: pointer;
    }
    p{
        position: relative;
        width: 26px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        font-size: 10px;
        background-color: var(--tag-color);
        right: 10px;
        top: -10px;
    }
`

export const ContentCart = styled.div`
    position: relative;
    display: flex;
    height: 50px;
    align-items: center;
`

export const Input = styled.div`
    input{
        width: 200px;
        height: 30px;
        margin-right: 20px;
        border-radius: 50px;
        border: 0;
        padding-left: 10px;
    }
`


