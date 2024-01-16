import { useState } from 'react'

function Category({name="default", icon="calendar", color="black"}) {
    return (
        <>
        <button className="btn col-10" style={{color: "white", backgroundColor: color}}>{name}</button>
        </>
    )
}

export default Category