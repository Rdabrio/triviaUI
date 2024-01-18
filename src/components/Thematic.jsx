import { useState } from 'react'
import $ from 'jquery'; 

function Thematic({name="default", actionThematic = undefined}) {

    function selectButton() {
        $(`#thematic-${name}`).toggleClass("btn-dark bg-dark")
        $(`#thematic-${name}`).siblings().removeClass("btn-dark bg-dark")
        if ($(`#thematic-${name}`).hasClass("btn-dark bg-dark")) actionThematic(name)
        else actionThematic("")
    }

    return (
        <>
        
            <button id={`thematic-${name}`} className="btn col-8" style={{backgroundColor: 'white', fontSize:13}} onClick={selectButton}>{name}</button>
        
        </>
    )
}

export default Thematic