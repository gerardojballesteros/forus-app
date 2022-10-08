import styled from 'styled-components'

export const LoginContent = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #179281 0%, #1E3D56 56.16%, #19073A 100%);
    overflow: hidden;
`

export const BackgroundLogin = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`

export const RoundedLogo = styled.picture`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    source{
        position: absolute;
        top: 0;
        left: 0;
    }
    img{
        position: relative;
        top: 3vh;
        width: 100%;
        max-width: 900px;
        left: 20px;
    }
`

export const BgLayer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) -49.6%, rgba(69, 57, 92, 0.608969) -1.79%, rgba(62, 45, 92, 0.8) 25.14%, #19073A 100%);
    z-index: 1;
`

export const LogoForus = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    z-index: 2;
    padding: 40px;
`

export const PinctureForus = styled.picture`
    source{
        position: absolute;
        top: 0;
        left: 0;
    }
    img{
        width: 100%;
        max-width: 200px;
    }
`

export const FormLogin = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    max-width: 900px;
    margin: 0 auto;
    padding-left: max(22px,env(safe-area-inset-left));
    padding-right: max(22px,env(safe-area-inset-right));
    z-index: 3;
    margin-top: 8vh;
`
export const Title = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    text-align: start;
    h1{
        color: var(--secondary-color)
    }
    p{
        color: var(--secondary-color)
    }
`

export const FormContent = styled.form`
    margin-top: 50px;
    div{
        input{
            width: 100%;
            margin: 10px 0;
            height: 40px;
            background-color: transparent;
            border: 0;
            border-bottom: 2px solid #ffffff;
            outline: none;
            font-size: 16px;
            color: var(--secondary-color);
            &:focus{
                border: 0;
                border-bottom: 2px solid #67f8b0;
            }
            ::placeholder{
                color: #bfbfbf;
                font-weight: 300;
                font-size: 16px;
            }
        }
        &:nth-child(3){
            margin-top: 60px;
            text-align: center;
            a{
                button{
                    width: 100%;
                    height: 50px;
                    background: var(--bg-button);
                    border: 0;
                    border-radius: 50px;
                    color: var(--secondary-color);
                    font-weight: 500;
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
    }
`
