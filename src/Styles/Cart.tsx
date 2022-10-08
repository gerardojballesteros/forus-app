import styled from 'styled-components'

export const CartContent = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000002b;
    backdrop-filter: blur(3px);
    z-index: 99999999;
    .vacio{
        margin-top: 40px;
        padding: 20px;
        text-align: center;
        h3{
            font-size: 20px;
            font-weight: 500;
            color: var(--text-light-color);
        }
    }
`

export const Modal = styled.div`
    position: relative;
    float: right;
    width: 400px;
    height: 100vh;
    background-color: #fff;
`

export const ItemsCart = styled.div`
    position: relative;
    float: right;
    width: 400px;
    height: 100vh;
    background-color: #fff;

    padding: 20px;
    .items{
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        margin: 15px 0;
        justify-content: space-between;
        border-radius: 10px;
        border: 1px solid #bebebe;
        padding: 10px;
        .images{
            position: relative;
       
            display: flex;
            img{
                width: 100%;
                max-width: 80px;
            }
        }
        .box{
            p{
                font-size: 12px;
                &:nth-child(3){
                    font-size: 16px;
                    font-weight: 500;
                }
            }
            img{
                width: 100%;
                max-width: 30px;
            }
            .hush{
                width: 100%;
                max-width: 120px;
            }
        }
        .btn-cart{
            position: relative;
            width: 100px;
            height: 70px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .add{
                position: relative;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--tag-color);
                border: 0;
                border-radius: 100px;
                padding: 10px;
                color: #fff;
                cursor: pointer;
            }
            p{
                width: 30px;
                text-align: center;
            }
            .delete{
                position: relative;
                width: 30px;
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--error-color);
                border: 0;
                border-radius: 100px;
                padding: 10px;
                color: #fff;
                cursor: pointer;
            }
        }
        
    }
`

export const Total = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    background-color: var( --success-color);
    p{
        font-size: 20px;
        color: #fff;
    }
`

export const Closed = styled.div`
    position: relative;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 13px;
    p{
        font-size: 20px;
        color: #393838;
        img{
            cursor: pointer;
        }
    }
`