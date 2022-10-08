import styled from 'styled-components'

export const DetailsContent = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #0000002b;
    backdrop-filter: blur(3px);
    z-index: 99999999;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal{
        position: relative;
        width: 50%;
        height: 160px;
        background-color: #fff;
        border-radius: 10px;
        .close{
            position: relative;
            width: 100%;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
            img{
                width: 100%;
                max-width: 30px;
                cursor: pointer;
            }
        }
        .details{
            position: relative;
            text-align: center;
            p{
                font-size: 30px;
            }
        }
    }
`