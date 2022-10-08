import { useState } from "react"
import { CartProvider } from "react-use-cart"
import { Cart } from "../Components/Cart/Cart"
import { Filter } from "../Components/Filter/Filter"
import { Header } from "../Components/Header/Header"
import { ProductsList } from "../Components/ProductsList/ProductsList"
import { ForusContext } from "../Context/ForusContext"
import { DasboardContent, TitleDashboad } from "../Styles/Dasboard"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Details } from "../Components/Details/Details"


export const Dashboard = () => {

  const [isClosed, setIsClosed] = useState(false)
  const [isClosedDetails, setIsClosedDetails] = useState(false)
  const [genero, setGenero] = useState('')
  const [clase, setClase] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')
  const [color, setColor] = useState('')
  const [talla, setTalla] = useState('')
  const [precio, setPrecio] = useState('')
  const [search, setSearch] = useState('')
  const [tienda, setTienda] = useState('')
  const [detalle, setDetalle] = useState('')
  

  return (
    <>
      <ToastContainer />  
      <ForusContext.Provider value={{
        isClosed, setIsClosed,
        genero, setGenero,
        clase, setClase,
        marca, setMarca,
        tipo, setTipo,
        color, setColor,
        talla, setTalla,
        precio, setPrecio,
        search, setSearch,
        tienda, setTienda,
        detalle, setDetalle,
        isClosedDetails, setIsClosedDetails
      }}>
        <CartProvider>
          <Header />
          <DasboardContent>
            <TitleDashboad>
              <h3>Todos los <strong>Productos</strong></h3>
            </TitleDashboad>
            <Filter />
            <ProductsList />
          </DasboardContent>
          {isClosed && 
            <Cart />
          }
          {isClosedDetails && 
            <Details />
          }
        </CartProvider>
      </ForusContext.Provider>
      
    </>
  )
}
