import React from 'react'

export default function Transection({transection}) {
    return (
        <li className="minus">
          {transection.text} <span>-R-400</span><button className="delete-btn">x</button>
        </li>
    )
}
