import { BackgroundLogin, BgLayer, FormContent, FormLogin, LoginContent, LogoForus, PinctureForus, RoundedLogo, Title } from '../Styles/Login'
import logoRounded from '../Assets/rounded-2.svg'
import logo from '../Assets/logo-forus.svg'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <LoginContent>
        <BackgroundLogin>
            <BgLayer />
            <RoundedLogo>
                <source srcSet={logoRounded} media="(min-width: 800px)"/>
                <img src={logoRounded} />
            </RoundedLogo>
        </BackgroundLogin>
        <LogoForus>
            <PinctureForus>
                <source srcSet={logo} media="(min-width: 100px)"/>
                <img src={logo} />
            </PinctureForus>
        </LogoForus>
        <FormLogin>
            <Title>
                <h1>Iniciar Sesión</h1>
                <p>Portal tiendas - Empleados</p>
            </Title>
            <FormContent>
                <div>
                    <input type="text" placeholder='Ingresar RUT' />
                </div>
                <div>
                    <input type="password" placeholder='Ingresar contraseña' />
                </div>
                <div>
                    <Link to="/dashboard">
                        <button>Ingresar</button>
                    </Link>
                </div>
            </FormContent>
        </FormLogin>
    </LoginContent>
  )
}
