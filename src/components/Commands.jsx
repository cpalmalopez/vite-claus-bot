import React from 'react'
import '../index.css'

export const Commands = (props) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={`${props.id}`}>
                <button className="accordion-button name-command" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.collapse}`} aria-expanded="true" aria-controls={`${props.collapse}`}>
                    {props.name}
                </button>
            </h2>
            <div id={`${props.collapse}`} className="accordion-collapse collapse show" aria-labelledby={`${props.id}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <p>{props.desc}</p>
                    <p><strong>Permisos:</strong> {props.permissions}</p>
                    <p><strong>Parámetros</strong> {props.params}</p>
                </div>
            </div>
        </div>
    )
}
