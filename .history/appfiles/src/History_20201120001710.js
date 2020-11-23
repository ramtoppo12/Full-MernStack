import React,{useContext} from 'react';
import {GlobalContext} from "./GlobalState";
import Transection from './Transection';

export default function History() {
  const {transections}  = useContext(GlobalContext);

    return (
        <>
          <h3>History</h3>
      <ul id="list" className="list">
         {transections.map(context => (<Transection context={context}>))} 
      </ul>  
        </>
    )
}
