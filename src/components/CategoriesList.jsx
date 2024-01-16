import { useState } from 'react'
import Category from './Category'

function CategoriesList() {
    return (
        <div className="col-md-2 d-flex flex-column align-items-center justify-content-around bg-light mt-2" style={{}}>
            <Category name="Entretenimiento" color="pink"></Category>
            <Category name="Geografia e historia" color="blue"></Category>
            <Category name="Misceláneo" color="violet"></Category>
            <Category name="Ciencia" color="green"></Category>
            <Category name="Arte" color="red"></Category>
            <Category name="Deportes y pasatiempos" color="orange"></Category>
        </div>
        
    )
}

export default CategoriesList