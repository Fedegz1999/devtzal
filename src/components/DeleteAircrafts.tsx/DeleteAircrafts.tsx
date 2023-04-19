import { useAppContext } from "../../useContext/useContext"
import './DeleteAircrafts.css'
export default function DeleteAircrafts ({id}:any) {

    const {dispatch, aircrafts} = useAppContext()
 
    let response = aircrafts.filter((a:any) => a.id !== id)

    const options = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({"aircrafts": response})
      };

      
      const deleteData = async () => {
        const response =  await fetch('/api/ships', options);
        const ip = await response.json();
        return ip;
      }

        const onDelete = async (e:any) => {   
          dispatch({type: 'DELETE_AIRCRAFTS', value: id})
          const data = await deleteData()
          dispatch({type: 'GET_AIRCRAFTS', value: response })
        }

        


     
      return (

    <div className="buttonDiv">
    <button className="buttonDelete" onClick={onDelete}> Delete Aircrafts </button>
    </div>
      )
}