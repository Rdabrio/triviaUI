import { useState } from 'react'
import $ from 'jquery'; 

function Thematic({name="default"}) {

    function selectButton() {
        $(`#thematic-${name}`).toggleClass("btn-dark bg-dark")
        $(`#thematic-${name}`).siblings().removeClass("btn-dark bg-dark")
    }

    return (
        <>
        
            <button id={`thematic-${name}`} className="btn col-8" style={{backgroundColor: 'white'}} onClick={selectButton}>{name}</button>
        
        </>
    )
}

export default Thematic