import { useState } from 'react'
import $ from 'jquery'; 

function Category({name="default", icon="calendar", color="white"}) {

    const categories = ["Entretenimiento", "Geografia", "Misceláneo", "Ciencia", "Arte", "Deportes"]

    function selectButton() {
        $(`#category-${name}`).toggleClass("btn-dark bg-dark")
        categories.forEach((cat) => {
            if (cat != name)  $(`#category-${cat}`).removeClass("btn-dark bg-dark")
        })
       
    }

    return (
        <>
            <button id={`category-${name}`} className="btn col-8" style={{backgroundColor: color}} onClick={selectButton}>{name}</button>
        </>
    )
}

export default Category