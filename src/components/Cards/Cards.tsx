import { useState } from "react";
import './Cards.css'
import PutAircrafts from "../PutAircrafts/PutAircrafts";
import DeleteAircrafts from "../DeleteAircrafts.tsx/DeleteAircrafts";
import Modal from "../Modal/Modal";
import ModalClose from "../Modal/ModalClose";


interface Card {
    name:string
    type: string
    launchYear: number | string
    id: number | string
    i: number | string
  }

export default function Cards ({name, type, launchYear, i, id}:Card) {

const [details, setDetails] = useState(false)
const [edit, setEdit] = useState(false)

const OpenDetails = () =>{
    if(details=== false) setDetails(true)
    if(details === true) setDetails(false)
}

const editCard = () =>{
    if(edit === false) setEdit(true)
    if(edit === true) setEdit(false)
}



    return (
        <>      
            <div className="divCard">
                <div className="divContainer">
                    <p className="avion">- - - - ✈</p>
            <h1>{name}</h1>

            <div className="ButtonPosition">
<button className="Buttondetalles" onClick={OpenDetails}>
    Details { !details ? "🔻" : "🔺"}
    </button>
    </div>

{details ? 
<>
<div className="detalles">
     <label className="labelDetails">Type:</label>
     <h2>{type}</h2>
     <label className="labelDetails">Launch Year:</label>
     <h2>{launchYear}</h2>
     </div> 

<button className="editButton" onClick={editCard}>Edit Card</button>

{edit && <div onClick={editCard}>
    <ModalClose/>
    </div>}
{edit ? 
<Modal>
<h1 className={"title3"}>edit Aircrafts</h1>
     <PutAircrafts
     type={type}
     launchYear={launchYear}
     name={name}
     id={id}
     i={i}
     />
     <DeleteAircrafts id={id}/>
     
     </Modal>

     : null}
     </>

: null}
            </div>
            

            </div>
       

        </>
    )
}

