import React, { useContext, useEffect, useReducer } from "react";


interface Props {
   children: React.ReactNode
}


const AppContext = React.createContext<any>({}); 
const useAppContext:any = () => {return useContext(AppContext)}



const initialState = {
    aircrafts: [],
    filters: []
}


const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'GET_AIRCRAFTS':{
            return {
            ...state, 
            aircrafts: action.value,
            filters: action.value
            }
        }
        case 'ADD_AIRCRAFTS':{
            return {
            ...state, 
            }
        }
        case 'PUT_AIRCRAFTS':{
            return {
            ...state, 
            }
        }
        case 'DELETE_AIRCRAFTS': {
            let result = state.aircrafts.filter((a:any) => a.id !== action.value)
            return {
                ...state,
                aircrafts: result,
                filters: result
            }
        }
        case 'SEARCH_AIRCRAFTS': {
            return {
                ...state,
                filters: action.value
            }
        }
        case 'FILTER_TYPE': {
            let estadoP = [...state.aircrafts]
            let result = action.value !== "" ?  estadoP.filter((a:any) => a.type === action.value) : estadoP        
            return {
                ...state,
                filters: result
           }          
        }
        case 'FILTER_LAUNCHYEAR': {
            let estadoP = [...state.aircrafts]
            const filterYear = () => {
                if(action.value === "latest releases") {
                estadoP.sort(function(a:any, b:any) {
                   return a.launchYear - b.launchYear}) 
                }      
               if(action.value === "most releases"){
                    estadoP.sort(function(a:any, b:any) {
                        return b.launchYear - a.launchYear
            })
        }
          return estadoP       
    }
        let result = filterYear()
            return {
                ...state,
                filters: result
           }          
        }
        case 'FILTER_A-Z': {
            let estadoP = [...state.aircrafts]
            const filterAZ = () => {
                if(action.value === "descendent") {
                    const result = estadoP.sort(function(a, b) {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1;
                          }
                          if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                          }
                          return 0;
                    })
                }
                if(action.value === "ascendent") {
                const result = estadoP.sort(function(a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1
                    }
                    if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1
                    }
                    return 0;
                })
            }
                return estadoP
            }
    
        let result = filterAZ()
            return {
                ...state,
                filters: result
           }   
        }
    }
    return state
}



const AppProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

return (
    <AppContext.Provider value={{aircrafts: state.aircrafts, filters: state.filters , dispatch}}>
        {children}
    </AppContext.Provider>
    )
}

export { AppProvider, useAppContext }