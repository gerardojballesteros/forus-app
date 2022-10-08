import { useContext, useState } from 'react'
import { ProductsData } from '../../Data/ProductsData'
import { Products } from '../../Styles/ProductsStyle'
import { useCart } from 'react-use-cart'
import { ForusContext } from '../../Context/ForusContext'
import { toast, ToastContainer } from 'react-toastify';
import arrival from '../../Assets/arrival.svg'
import colors from '../../Assets/colors.svg'
import code from '../../Assets/code.svg'
import types from '../../Assets/types.svg'
import eyes from '../../Assets/eyes.svg'

export const ProductsList = () => {

  const { setDetalle, setIsClosedDetails } = useContext<any>(ForusContext)

  const { addItem } = useCart();
  const { 
    genero,
    clase,
    marca,
    tipo,
    color,
    talla,
    search,
    tienda
  } = useContext<any>(ForusContext)

  const filterProducts = ()=>{

    const filtered = ProductsData?.filter((items: any)=> {
      if( items.name.toString().toLowerCase().includes( search.toLowerCase() )
      && items.tienda.toString().toLowerCase().includes( tienda.toLowerCase() )
      && items.clase.toString().toLowerCase().includes( clase.toLowerCase() ) 
      && items.marca.toString().toLowerCase().includes( marca.toLowerCase() ) 
      && items.genero.toString().toLowerCase().includes( genero.toLowerCase() )
      && items.tipo.toString().toLowerCase().includes( tipo.toLowerCase() )
      && items.color.toString().toLowerCase().includes( color.toLowerCase() )
      && items.talla.toString().toLowerCase().includes( talla.toLowerCase() )){
        return items
      }
    } )
    return filtered
  }

  
  
  return (
    <Products>
      <ul>
        <>
        {filterProducts()?.map((items: any)=> {
          const handleCart = ()=>{
            addItem(items)
            toast.success("Producto agregado al carrito!", {
              icon: "🚀"
            });
          }

          const handleOpen = (e:any) =>{
            e.preventDefault()
            setDetalle(items.detalle)
            setIsClosedDetails(true)
          }
        
          return(
            <li key={items.id}>
                <div className="arrival">
                  <img src={arrival} alt="" />
                  <p>{items.arrival}</p>
                </div>
                <div className="product">
                  <div className="marca">
                    <img src={items.img} className={items.class} alt="" />
                  </div>
                  <div className="nombre-producto">
                    <p>{items.name}</p>
                  </div>
                  <div className="items">
                    <img src={items.imgProduct} alt="" />
                  </div>
                </div>
                <div className="data">
                  <div>
                    <img src={colors} alt="" />
                    <p>{items.color}</p>
                  </div>
                  <div>
                    <img src={code} alt="" />
                    <p>{items.codigo}</p>
                  </div>
                  <div>
                    <img src={types} alt="" />
                    <p>{items.tipo}</p>
                  </div>
                </div>
                <div className="estado">
                  {(items.estado === 1) ? (
                    <div>
                      <button className='registrado' onClick={handleOpen}><img src={eyes} alt="" /></button>
                      <button className='agregar' onClick={handleCart}>Agregar - ${items.price}</button>
                    </div>
                  ) : (
                    <button className='no-registrado'>No Registrado</button>
                  )}
                </div>
            </li>
          )
        })
        }
        </>
      </ul>
    </Products>
  )
}
