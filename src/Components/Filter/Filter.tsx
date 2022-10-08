import { useContext } from 'react'
import { FilterContent, SelectForm, TitleFilter } from '../../Styles/Filter'
import { ForusContext } from '../../Context/ForusContext'
import filter from '../../Assets/filter.svg'

export const Filter = () => {

  const { 
      setGenero,
      setClase,
      setMarca,
      setTipo,
      setColor,
      setTalla,
      setTienda
  } = useContext<any>(ForusContext)

  return (
    <FilterContent>
        <TitleFilter>
          <img src={filter} alt="" />
          <p>Filtrar por: </p>
        </TitleFilter>
        <SelectForm>
        <select onChange={(e:any)=> setTienda(e.target.value)}>
            <option value="">Tiendas</option>
            <option value="888">Tienda 888</option>
            <option value="900">Tienda 900</option>
          </select>
          <select onChange={(e:any)=> setClase(e.target.value)}>
            <option value="">Clase</option>
            <option value="Calzado">Calzado</option>
            <option value="Vestuario">Vestuario</option>
            <option value="Accesorios">Accesorios</option>
          </select>
          <select onChange={(e:any)=> setMarca(e.target.value)}>
            <option value="">Marca</option>
            <option value="Caterpillar">Caterpillar</option>
            <option value="Merrel">Merrel</option>
            <option value="Hush Puppies">Hush Puppies</option>
          </select>
          <select onChange={(e:any)=> setGenero(e.target.value)}>
            <option value="">Genero</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
          </select>
          <select onChange={(e:any)=> setTipo(e.target.value)}>
            <option value="">Tipo</option>
            <option value="Poleras">Poleras</option>
            <option value="Polerones">Polerones</option>
            <option value="Zapatillas">Zapatillas</option>
          </select>
          <select onChange={(e:any)=> setColor(e.target.value)}>
            <option value="">Color</option>
            <option value="Rojo">Rojo</option>
            <option value="Verde">Verde</option>
            <option value="Negro">Negro</option>
            <option value="Azul">Azul</option>
          </select>
          <select onChange={(e:any)=> setTalla(e.target.value)}>
            <option value="">Talla</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="350">350</option>
            <option value="360">360</option>
          </select>
        </SelectForm>
    </FilterContent>
  )
}
