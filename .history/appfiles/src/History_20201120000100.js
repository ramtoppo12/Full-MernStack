import React,{useContext} from 'react';
import {GlobalContext} from "./GlobalState";

export default function History() {
  const context = useContext(GlobalContext);
  console.log(context.transections);

    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transections.map(transection => (<li className="minus">
          {transection.text} <span>-R-400</span><button className="delete-btn">x</button>
        </li>))} 
      </ul>  
        </>
    )
}
