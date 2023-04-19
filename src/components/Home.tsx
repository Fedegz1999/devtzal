import { useEffect, useState } from "react";
import { useAppContext } from "../useContext/useContext";
import Cards from "./Cards/Cards";
import SearchAircrafts from "./SearchBar/SearchAircrafts";
import Filters from "./Filters/Filters";
import CreateAircrafts from "./CreateAircrafts/CreateAircrafts";
import './Home.css'
import Modal from "./Modal/Modal";
import ModalClose from "./Modal/ModalClose";

export default function Home ()  {
 
    const {dispatch, filters, aircrafts} = useAppContext()
    const [create, setCreate] = useState(false)

    const getData = async () => {
        const response =  await fetch('/api/ships');
        const ip = await response.json();
        return ip;
      }
      
      
      useEffect(() => { 
      const getAircrafts = async () => {
        const data = await getData()
        dispatch({type: 'GET_AIRCRAFTS', value: data.aircrafts})     
      getAircrafts()
}
      },[filters, aircrafts, dispatch])

      const closeModal = () => {
        setCreate(false)
      }

      const openModal = () => {
        setCreate(true)
      }

    return (
        <>


      
      
      <div className="servs">
          <SearchAircrafts />
          
        {create && <div onClick={closeModal}>
          <ModalClose />
        </div>}
          <button className="createDiv" onClick={openModal}>Create Aircrafts</button>
        {create ?
          <Modal>
            <CreateAircrafts />
          </Modal>

          : null}

          <div className="filters">
            <Filters />
          </div>
        </div>
        
        
      
        
        
        
        <div className="cards">
          {filters?.map((a: any, i: any) => {
            return (
              <div key={a.id}>
                <Cards
                  name={a.name}
                  type={a.type}
                  launchYear={a.launchYear}
                  id={a.id}
                  i={i} />
              </div>
            );
          })}
        </div>
        </>
        
    )
}


