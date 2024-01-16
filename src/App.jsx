import { useState } from 'react'
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
import options from './assets/options.png'

function App() {
  
  const [collapse, setCollapse] = useState(true)
  return (
    <div style={{ display: 'flex', height: '100%', minHeight: '1000px' }}>
      <Sidebar collapsed={collapse} onMouseOver={() => setCollapse(false)} onMouseLeave={() => setCollapse(true)} collapsedWidth="10%" rootStyles={{backgroundColor:'white', width:'15%'}}>
        <Menu rootStyles={{backgroundColor:'white'}}>
          <div className="d-flex p-3 align-items-center">
            <img src={t} style={{width: 50, height: 50, marginRight: 10}}></img>
            <h3 className="font-weight-bold m-0">TrivialUI</h3>
          </div>
          
          <div className="d-flex align-items-center">
            <SubMenu label="Temáticas">
              
              <MenuItem> <img src={calendar} style={{width: 30, height: 30, marginRight: 15}}></img><Thematic name="2010-2023"></Thematic> </MenuItem>
            </SubMenu>
          </div>
          
          <div className="d-flex align-items-center">
            <SubMenu label="Categorías">
              <MenuItem> <img src={popcorn} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Entretenimiento" ></Category> </MenuItem>
              <MenuItem> <img src={earth} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Geografia" ></Category> </MenuItem>
              <MenuItem> <img src={surprise} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Misceláneo" ></Category> </MenuItem>
              <MenuItem> <img src={science} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Ciencia" ></Category> </MenuItem>
              <MenuItem> <img src={art} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Arte" ></Category> </MenuItem>
              <MenuItem> <img src={sports} style={{width: 30, height: 30, marginRight: 10}}></img> <Category name="Deportes"></Category> </MenuItem>
              
            </SubMenu>
          </div>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default App
