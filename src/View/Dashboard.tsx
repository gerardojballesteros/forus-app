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

  const [isClosed, setIsClosed] = useState<any>(false)
  const [isClosedDetails, setIsClosedDetails] = useState<any>(false)
  const [genero, setGenero] = useState<any>('')
  const [clase, setClase] = useState<any>('')
  const [marca, setMarca] = useState<any>('')
  const [tipo, setTipo] = useState<any>('')
  const [color, setColor] = useState<any>('')
  const [talla, setTalla] = useState<any>('')
  const [precio, setPrecio] = useState<any>('')
  const [search, setSearch] = useState<any>('')
  const [tienda, setTienda] = useState<any>('')
  const [detalle, setDetalle] = useState<any>('')
  

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
