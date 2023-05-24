import React from "react"
import './ul.css'


function Ul() {
    return (
        <div className="div-ul">
            <label className="label">Cars:</label>
            <ul>
                <li className="li">BMW</li>
                <li className="li">KIA</li>
                <li className="li">Mercedes</li>
                <li className="li">Opel</li>
                <li className="li">Ferrari</li>
            </ul>
        </div>
    )
}

export default Ul;
