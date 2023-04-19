import { useState } from "react";
import { useAppContext } from "../../useContext/useContext";
import './PutAircrafts.css'

interface Put {
  name:string
  type: string
  launchYear: number | string
  id: number | string
  i: number | string
}

export default function PutAircrafts ({name, type, launchYear, id,  i}:Put) {



    const initialValues = {
        id: id,
        name: name,
        type: type,
        launchYear: launchYear,
      };

    const {dispatch, aircrafts, filters} = useAppContext()
    const [formData, setFormData] = useState(initialValues);
    const [formError, setFormError] = useState("");

    const putReplace = () => {
      aircrafts[i] = formData
      return aircrafts
    }


    const options = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"aircrafts": putReplace()})
        };

    const putData = async () => {
        const response =  await fetch('/api/ships', options);
        const ip = await response.json();
        return ip;
      }

      const onSubmit = async (e:any) => {  
        if(formData.launchYear === "" || formData.name === "" ||
            formData.type === "") {
              e.preventDefault()
              setFormError("The form is incomplete");
            } else {  
            putReplace()
            await putData()
            dispatch({type: 'PUT_AIRCRAFTS', value: formData})
            }
      }
      
   

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };


    return (
        <>
        
        <div className="divForm">
<form >
<label>Name</label>
<input className="input-form" placeholder="Name" name="name" type="text" onChange={handleInputChange}/>

<div className="input-select">
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

<label>Launch Year</label>
    <input onChange={handleInputChange} className="input-form" name="launchYear" placeholder="Launch Year" type="number" min="1900" max="2099" step="1"/>

<div className="divButton">
<button className="buttonSubmit" onClick={onSubmit}>
Save Changes
</button>
</div>

{formError ? 
<h1 className="error">{formError}</h1>
: null}
</form>
</div>
        </>
    )
}
