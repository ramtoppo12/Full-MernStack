import React from 'react';
import axios from "axios";

export default function Header() {
    const res = await axios.get('/api/v1/transections');
    console.log(res)
    return (
        <>
            <h2>Expense Tracker</h2>
            
        </>
    )
}
