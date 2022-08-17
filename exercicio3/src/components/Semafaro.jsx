import React from 'react'
import '../index.css'

export default function Api(props) {
    return (
        <div>
            <h2>Pare</h2>
            <h2>atenção</h2>
            <h2>siga</h2>
            <div>{props.children[0]}</div>
        </div>
    )
}