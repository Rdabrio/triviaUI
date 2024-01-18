import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.bundle'
import ThematicsList from './components/ThematicsList';
import CategoriesList from './components/CategoriesList';
import './App.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Thematic from './components/Thematic';
import Category from './components/Category';
import popcorn from './assets/popcorn.png'
import earth from './assets/earth.png'
import surprise from './assets/surprise-box.png'
import science from './assets/data-science.png'
import art from './assets/paint-palette.png'
import sports from './assets/sports.png'
import calendar from './assets/calendar.png'
import t from './assets/letter-t.png'
import check from './assets/check-mark.png'
import questions from './data/2010-2023.json'

function App() {

  const [categorySelected, setCategorySelected] = useState("")
  const [thematicSelected, setThematicSelected] = useState("")
  const [collapse, setCollapse] = useState(true)
  const [finalQuestions, setFinalQuestions] = useState([])
  const [questionToDisplay, setQuestionToDisplay] = useState({"question": "", "answer": ""})
  const [viewInstructions, setViewInstructions] = useState(true)
  const categories = {"Entretenimiento":"Entertainment", "Ciencia":"Science", "Geografia": "Geography/History", "Misceláneo": "Miscellaneous", "Arte":"Arts", "Deportes":"Sports/Hobbies"}

  useEffect(() => {
    localStorage.setItem("category", "")
    localStorage.setItem("thematic", "")
  }, [])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function changeCategory(value) {
    setCategorySelected(value)
    if (value == "" || thematicSelected == "") setViewInstructions(true)
    let category = categories[value]
    const categoryQuestions = questions.filter((question) => question.category == category)
    setFinalQuestions(categoryQuestions)
  }

  function changeThematic(value) {
    setThematicSelected(value)
    if (categorySelected == "" || value == "") setViewInstructions(true)
  }

  function handleGenerate() {
    if (categorySelected != "" && thematicSelected != "") {
      setQuestionToDisplay(finalQuestions.at(getRandomInt(0, finalQuestions.length)))
      setViewInstructions(false)
    }
    
  }

  return (
    <div className="d-flex flex-row justify-content-between" style={{height: '100vh'}}>
      <Sidebar collapsed={collapse} onMouseOver={() => setCollapse(false)} onMouseLeave={() => setCollapse(true)} collapsedWidth="10%" rootStyles={{backgroundColor:'white', width:'15%', height: '100%'}}>
        <Menu rootStyles={{backgroundColor:'white'}}>
          <div className="d-flex p-3 align-items-center">
            <img src={t} style={{width: 50, height: 50, marginRight: 10}}></img>
            <h3 className="font-weight-bold m-0">TrivialUI</h3>
          </div>
          
          <div className="d-flex align-items-center">
            <SubMenu label="Temáticas">
              
              <MenuItem> <img src={calendar} style={{width: 30, height: 30, marginRight: 15}}></img><Thematic name="2010-2023" actionThematic={changeThematic}></Thematic> </MenuItem>
            </SubMenu>
          </div>
          
          <div className="d-flex align-items-center">
            <SubMenu label="Categorías">
              <MenuItem> <img src={popcorn} style={{width: 25, height: 25, marginRight: 10}}></img> <Category name="Entretenimiento" actionCategory={changeCategory}></Category> </MenuItem>
              <MenuItem> <img src={earth} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Geografia" actionCategory={changeCategory}></Category> </MenuItem>
              <MenuItem> <img src={surprise} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Misceláneo" actionCategory={changeCategory}></Category> </MenuItem>
              <MenuItem> <img src={science} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Ciencia" actionCategory={changeCategory}></Category> </MenuItem>
              <MenuItem> <img src={art} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Arte" actionCategory={changeCategory}></Category> </MenuItem>
              <MenuItem> <img src={sports} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Deportes" actionCategory={changeCategory}></Category> </MenuItem>
              
            </SubMenu>
          </div>
        </Menu>
      </Sidebar>
       
      <main className="col-sm-10 d-flex flex-column align-items-center align-self-center justify-content-around" style={{height: '70vh', position: 'absolute', marginLeft: '12%'}}>
        {viewInstructions? 
          <div className="ml-3">
            <p className="fw-bold text-center fs-4">INSTRUCCIONES:</p>
            <div className="d-flex">
              <p className="fs-6 text-center">1. Selecciona una temática</p>
              {thematicSelected != "" ? <img src={check} style={{width: 25, height: 25, marginLeft: 10, marginTop: 7}}></img>: <div></div>}
            </div>
            <div className="d-flex">
              <p className="fs-6 text-center">2. Selecciona una categoría</p>
              {categorySelected != "" ? <img src={check} style={{width: 25, height: 25, marginLeft: 10, marginTop: 7}}></img>: <div></div>}
            </div>
            <p className="fs-6">3. ¡Genera preguntas!</p>
          </div>
        :
        
        <div className="border border-5 question col-sm-8 p-1">
          <p className="fw-bold text-center border-bottom border-3 pt-2 pb-2 fs-5">{categorySelected}</p>
          <p className="text-center mt-2">{questionToDisplay.question}</p>
          <p className="text-center">Respuesta: {questionToDisplay.answer}</p>
        </div>
      }
        

        <button className="button" role="button" onClick={handleGenerate} style={{visibility:collapse?'':'hidden'}}>Generar</button>
      </main> 
    </div>
    
  )
}

export default App
