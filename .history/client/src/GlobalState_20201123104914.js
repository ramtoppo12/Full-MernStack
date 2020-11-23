import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//initial state

const initialState ={
    transections: [],
    error:null,
    loading:true
}

// create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);


    //actions
    async function getTransections(){
        try {
            const res = await axios.get('/api/v1/transecyions');

            dispatch({
                type:'GET_TRANSECTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type:'TRANSECTION_ERROR',
                payload: err.res.data.error
            })
        }
    }

    function deleteTransection(id){
        dispatch({
            type:"DELETE_TRANSECTION",
            payload:id,
        })
    }
      function addTransection(transection){
        dispatch({
            type:"ADD_TRANSECTION",
            payload:transection,
        })
    }



    return(<GlobalContext.Provider value={{
        transections:state.transections,
        deleteTransection,
        addTransection,
    }}>
        {children}
    </GlobalContext.Provider>)
}