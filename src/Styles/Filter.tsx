import styled from 'styled-components'

export const FilterContent = styled.div`
    position: sticky;
    width: 100%;
    height: 60px;
    background: var(--bg-header-bottom);
    backdrop-filter: blur(20px);
    top: 0;
    z-index: 100;
    padding-left: max(30px,env(safe-area-inset-left));
    padding-right: max(30px,env(safe-area-inset-right));
    display: flex;
`

export const TitleFilter = styled.div`
    position: relative;
    display: flex;
    height: 60px;
    display: flex;
    align-items: center;
    p{
        font-size: 16px;
        font-weight: 500;
        margin-left: 14px;
    }
`

export const SelectForm = styled.form`
    position: relative;
    display: flex;
    height: 60px;
    display: flex;
    align-items: center;
    select{
        font-size: 16px;
        font-weight: 500;
        margin-left: 14px;
        background-color: transparent;
        border: 0;
        outline: none;
        margin: 0 5px;
        width: 80px;
        cursor: pointer;
        &:nth-child(1){
            width: 90px;
        }
        &:nth-child(2){
            width: 75px;
        }
        &:nth-child(3){
            width: 74px;
        }
        &:nth-child(4){
            width: 80px;
        }
        &:nth-child(5){
            width: 69px;
        }
        &:nth-child(6){
            width: 70px;
        }
        &:nth-child(7){
            width: 60px;
        }
    }
`