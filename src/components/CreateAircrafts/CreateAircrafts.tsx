import { useEffect, useId, useState } from "react";
import { useAppContext } from "../../useContext/useContext";
import './CreateAircrafts.css'

export default function CreateAircrafts ({}) {

    const {dispatch, aircrafts} = useAppContext()
    
    const initialValues = {
        name: '',
        type: '',
        launchYear: 0,
      };

      const [formData, setFormData] = useState(initialValues);
      const [formError, setFormError] = useState("");
      
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


      const onSubmit = async (e:any) => {     
        if(formData.type.length === 0 || formData.name.length === 0 ||
            formData.launchYear === 0){
              e.preventDefault()
              setFormError("The form is incomplete");
            } else {
            const data = await postData()
            dispatch({type: 'ADD_AIRCRAFTS', value: formData})
            }
      }

      function generateUUID() {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

      const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"aircrafts": aircrafts.concat({"name": formData.name, "type": formData.type, "launchYear":formData.launchYear, "id": generateUUID()})})
        };

   const postData = async () => {
            const response =  await fetch('/api/ships', options);
            const ip = await response.json();
            return ip;
          }

           
             
return (
    <div className="divCreate">
<h1 className="title2">Create Aircrafts</h1>
    <form>

      <div className="labels">
        <label>Name</label>
<input className="input-form" placeholder="Name" name="name" type="text" onChange={handleInputChange}/>
</div>

<div className="labels">
        <label>Type</label>
        <select
          className="input-select"      
          name="type"
          onChange={handleInputChange}
        > 

        <option value={""}>Select</option>
        <option value={"Commercial"}>Commercial</option>
        <option value={"Private"}>Private</option>
        <option value={"Military"}>Military</option>
        </select>     
        </div>

        <div className="labels">
        <label>Launch Year</label>
        <input onChange={handleInputChange} className="input-form" placeholder="Year" name="launchYear" type="number" min="1900" max="2099" step="1"/>
        </div>

<button className="buttonSubmit" onClick={onSubmit}>
    Create Aircrafts 
    </button>

{formError ? 
<h1 className="error">{formError}</h1>
: null}
    </form>
    </div>
)
}