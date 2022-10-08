import { useContext } from 'react'
import { useCart } from 'react-use-cart'
import { ForusContext } from '../../Context/ForusContext'
import { CartContent, Closed, ItemsCart, Modal, Total } from '../../Styles/Cart'
import close from '../../Assets/close.svg'

export const Cart = () => {

    const { setIsClosed } = useContext<any>(ForusContext)

    const { 
        items,
        totalItems,
        cartTotal,
        updateItemQuantity
    } = useCart()

    const handleOpenCart = ()=>{
        setIsClosed(false)
    }

  return (
    <CartContent>
        <Modal>
            <Closed>
                <p onClick={handleOpenCart}><img src={close} alt="" /></p>
            </Closed>
            {(totalItems <= 0) ? (
                <div className='vacio'>
                    <h3>Agrega algún producto para que puedas crear un nuevo carrito.</h3>
                </div>
            ) : (
                <ItemsCart>
                    <>
                        {items?.map((res: any) =>{
                            return(
                                <div className="items">
                                    <div className="images">
                                        <img src={res.imgProduct} alt="" />
                                    </div>
                                    <div className="box">
                                        <img className={res.class} src={res.img} alt="" />
                                        <p>{res.name}</p>
                                        <p>${res.price}</p>
                                    </div>
                                    <div className="btn-cart">
                                        <button className='add' onClick={()=> updateItemQuantity(res.id, res.quantity + 1)}>+</button>
                                        <p>{res.quantity}</p>
                                        <button className='delete' onClick={()=> updateItemQuantity(res.id, res.quantity - 1)}>-</button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                </ItemsCart>
            )}
            <Total>
                <p>Total a pagar <strong>${cartTotal}</strong></p>
            </Total>
        </Modal>
    </CartContent>
  )
}
