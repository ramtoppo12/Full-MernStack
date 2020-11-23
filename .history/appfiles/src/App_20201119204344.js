import React from 'react';
import "./App.css";
import Header from "./Header"
import IncomeExpense from './IncomeExpense';
import Balance from "./Balance";
import History from './History';
import AddnewTransection from './AddnewTransection';

export default function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpense/>
                <History/>
                <AddnewTransection/>
            </div>
        </>
    )
}
