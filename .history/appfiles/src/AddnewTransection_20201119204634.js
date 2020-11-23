import React from 'react'

export default function AddnewTransection() {
    return (
        <>
            <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </>
    )
}
