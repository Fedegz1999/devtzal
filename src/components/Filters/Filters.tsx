import { useEffect, useState } from "react";
import { useAppContext } from "../../useContext/useContext";
import './Filters.css'

export default function Filters ({}) {

    const {dispatch} = useAppContext()
    const [busqueda, setBusqueda]= useState("");
    const [busqueda2, setBusqueda2]= useState("");
    const [busqueda3, setBusqueda3]= useState("");


      
      useEffect(() => {
        dispatch({type: 'FILTER_TYPE', value: busqueda}) 
      },[busqueda, ])

      useEffect(() => {
        dispatch({type: 'FILTER_LAUNCHYEAR', value: busqueda2}) 
      },[busqueda2])

      useEffect(() => {
        dispatch({type: 'FILTER_A-Z', value: busqueda3}) 
      },[busqueda3])
      
    


      const handleChange=(e:any)=>{
        e.preventDefault() 
          setBusqueda(e.target.value);         
        }

        const handleChangeYear=(e:any)=>{
          e.preventDefault() 
            setBusqueda2(e.target.value);         
          }

          const handleChangeAZ=(e:any)=>{
            e.preventDefault() 
              setBusqueda3(e.target.value);         
            }


          


    return (
        <>
        <div className="filtersContainer">
          
          <div className="labels">
        <label>Types</label>
        <select
          className="inputBuscar"      
          placeholder="Filtrar"
          onChange={handleChange}
        > 
        <option value={""}>All</option>
        <option value={"Commercial"}>Commercial</option>
        <option value={"Private"}>Private</option>
        <option value={"Military"}>Military</option>
        </select>
        </div>

        

        <div className="labels">
        <label>Launch Year</label>
        <select
          className="inputBuscar"      
          placeholder="Filtrar"
          onChange={handleChangeYear}
        > 
        <option value={""}>All</option>
        <option value={"latest releases"}>Latest releases</option>
        <option value={"most releases"}>Most releases</option>
        </select>     
        </div>

        <div className="labels">
        <label >Order</label>
        <select
          className="inputBuscar"      
          placeholder="Filtrar"
          onChange={handleChangeAZ}
        > 
        <option value={""}>All</option>
        <option value={"ascendent"}>A-Z</option>
        <option value={"descendent"}>Z-A</option>
        </select>

        </div>


        </div>
        </>
    )
}