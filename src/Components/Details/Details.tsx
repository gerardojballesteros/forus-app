import { DetailsContent } from "../../Styles/Details"
import close from '../../Assets/close.svg'
import { useContext } from "react"
import { ForusContext } from "../../Context/ForusContext"

export const Details = () => {

    const { detalle, setIsClosedDetails } = useContext(ForusContext)

  return (
    <DetailsContent>
        <div className="modal">
            <div className="close">
                <img src={close} onClick={()=> setIsClosedDetails(false)} alt="" />
            </div>
            <div className="details">
                <p>{ detalle }</p>
            </div>
        </div>
    </DetailsContent>
  )
}
