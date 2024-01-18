import { useState } from 'react'
import $ from 'jquery'; 

function Category({name="default", icon="calendar", color="white", actionCategory = undefined}) {

    const categories = ["Entretenimiento", "Geografia", "Misceláneo", "Ciencia", "Arte", "Deportes"]

    function selectButton() {
        $(`#category-${name}`).toggleClass("btn-dark bg-dark")
        categories.forEach((cat) => {
            if (cat != name)  $(`#category-${cat}`).removeClass("btn-dark bg-dark")
        })
        if ($(`#category-${name}`).hasClass("btn-dark bg-dark")) actionCategory(name)
        else actionCategory("")
        
    }

    return (
        <>
            <button id={`category-${name}`} className="btn col-sm-8" style={{backgroundColor: color, fontSize:13}} onClick={selectButton}>{name}</button>
        </>
    )
}

export default Category