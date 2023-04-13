import React from 'react'

const Charlie = (props) => {
    if(props.num === undefined) return (
        <h2>No number</h2>
    )
    return (
        <h2>{props.num > 6 ? "Thats a big number" : "Thats a small number"}</h2>
    )
}

export default Charlie