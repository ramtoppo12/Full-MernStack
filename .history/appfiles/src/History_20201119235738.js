import React,{useContext} from 'react';
import {GlobalContext} from "./GlobalState"

export default function History() {
    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         <li className="minus">
          Cash <span>-R-400</span><button className="delete-btn">x</button>
        </li> 
      </ul>  
        </>
    )
}
