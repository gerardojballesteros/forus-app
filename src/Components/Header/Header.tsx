import { useContext } from 'react'
import { Cart, ContentCart, HeaderContent, Input, LogoHeader } from '../../Styles/Header'
import logo from '../../Assets/logo-forus.svg'
import cart from '../../Assets/cart.svg'
import { useCart } from 'react-use-cart'
import { ForusContext } from '../../Context/ForusContext'

export const Header = () => {

  const { totalItems } = useCart()

  const { setIsClosed, setSearch } = useContext<any>(ForusContext)

  const handleClosed = (e: any)=>{
    setIsClosed(true)
  }

  const handleSearch = (e: any)=>{
    e.preventDefault()
    setSearch(e.target.value)
  }

  return (
    <HeaderContent>
       <LogoHeader>
            <source srcSet={logo} media="(min-width: 60px)"/>
            <img src={logo} />
       </LogoHeader>
       <ContentCart>
          <Input>
              <input type="search" onChange={handleSearch} placeholder='buscar productos...'/>
          </Input>
          <Cart>
                <source srcSet={cart} media="(min-width: 60px)"/>
                <img src={cart} onClick={handleClosed} />
                <p>{totalItems}</p>
          </Cart>
       </ContentCart>
    </HeaderContent>
  )
}
