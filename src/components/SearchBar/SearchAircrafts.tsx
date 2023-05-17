import { useState, useEffect } from "react";
import { useAppContext } from "../../useContext/useContext";
import './SearchAircrafts.css'

export default function SearchAircrafts ({}) {
    
    const {dispatch, aircrafts} = useAppContext()
    const [busqueda, setBusqueda]= useState("");
    const [results, setResults]= useState([]);
  

    const handleChange=(e:any)=>{
      e.preventDefault()
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

      const getData = async () => {
        const response =  await fetch('/api/ships');
        const ip = await response.json();
        return ip;
      }  

      useEffect(() => {
        if(!busqueda.length){
            const getAircrafts = async () => {
              const data = await getData()
              dispatch({type: 'GET_AIRCRAFTS', value: data.aircrafts})
            }  
            getAircrafts()
          }
        dispatch({type: 'SEARCH_AIRCRAFTS', value: results})
      }, [results, busqueda])


      const filtrar=(t:any)=>{
        var resultadosBusqueda= aircrafts.filter((elemento:any)=>{
          if(elemento.name.toLowerCase().includes(t.toLowerCase())){     
            return elemento;
          }
        });
        setResults(resultadosBusqueda);
      }

    return (
        <>
        <h1 className="title">Aircrafts App</h1>
        <input
          className="inputSearch"
          value={busqueda}
          placeholder="Search..."
          onChange={handleChange}
        />
            
        </>
    )
}