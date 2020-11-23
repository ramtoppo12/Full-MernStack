import React,{useContext} from 'react';
import {GlobalContext} from "./GlobalState";

export default function History() {
  const {transections}  = useContext(GlobalContext);

    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transections.map(context => (<li className="minus">
          {context.text} <span>-R-400</span><button className="delete-btn">x</button>
        </li>))} 
      </ul>  
        </>
    )
}
