import { useState } from 'react'
import Thematic from './Thematic'

function ThematicsList() {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom">
            <div className="container m-0 ml-3">
                <a className="navbar-brand" href="#">Trivia</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Thematic icon="../assets/2023.png" name="2010-2023"></Thematic>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default ThematicsList