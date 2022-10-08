import styled from 'styled-components'

export const Products = styled.div`
    position: relative;
    width: 100%;
    height: auto; 
    display: flex;
    justify-content: center;
    ul{
        position: relative;
        width: 100%;
        list-style: none;
        padding: 30px;
        display: grid;
        grid-template-columns: repeat(
            auto-fit,
            minmax(
                150px,
                300px
            )
        );
        grid-gap: 40px;
        justify-content: center;
        li{
            position: relative;
            background-color: var(--bg-gray);
            height: 490px;
            border-radius: 7px;
            overflow: hidden;
            padding: 20px;
            transition: .3s ease-in-out;
            &:hover{
                -webkit-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.29);
                -moz-box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.29);
                box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.29);
            }
            .arrival{
                position: absolute;
                right: 0;
                top: 0;
                width: 30%;
                height: 28px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 12px;
                background: var(--tag-color);
                border-radius: 0 0 0 7px;
                z-index: 3;
                p{
                    font-size: 13px;
                    color: var(--text-secondary-color);
                }
            }
            .marca{
                position: relative;
                height: 15px;
                display: flex;
                align-items: center;
                margin-top: -10px;
                img{
                    width: 100%;
                    max-width: 30px;
                }
                .merrel{
                    width: 100%;
                    max-width: 130px;
                }
                .hush{
                    width: 100%;
                    max-width: 160px;
                }
            }
            .nombre-producto{
                position: relative;
                padding: 10px 0;
                p{
                    font-size: 15px;
                    font-weight: 600;
                    color: var(--text-light-color);
                }
            }
            .product{
                position: relative;
                width: 100%;
                height: auto;
                margin-top: 10px;
                .items{
                    position: relative;
                    width: 100%;
                    height: 260px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #fff;
                    border-radius: 5px;
                }
            }
            .data{
                position: relative;
                margin-top: 20px;
                div{
                    display: flex;
                    margin: 5px 0;
                    height: 20px;
                    align-items: center;
                    img{
                        width: 100%;
                        max-width: 20px;
                    }
                    p{
                        font-size: 14px;
                        padding-left: 10px;
                        color: var(--text-light-color);
                        font-weight: 500;
                    }
                }
            }
            .estado{
                position: relative;
                margin-top: 10px;
                height: 30px;
                div{
                    display: flex;
                    .registrado{
                        width: 20%;
                        height: 30px;
                        border-radius: 4px;
                        background: var(--success-color);
                        border: 0;
                        color: #ffff;
                        cursor: pointer;
                        img{
                            width: 100%;
                            max-width: 15px;
                        }
                    }
                    .agregar{
                        width: 80%;
                        height: 30px;
                        border-radius: 4px;
                        background: var(--success-color);
                        border: 0;
                        color: #ffff;
                        margin-left: 8px;
                        cursor: pointer;
                    }
                }
                .no-registrado{
                    width: 100%;
                    height: 30px;
                    border-radius: 4px;
                    background: var(--error-color);
                    color: #ffff;
                    border: 0; 
                }
            }
        }
    }
`