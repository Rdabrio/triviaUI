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

function App() {
  
  const [collapse, setCollapse] = useState(true)
  return (
    <div className="bg-dark">
      <Sidebar collapsed={collapse} onFocus={() => setCollapse(false)} onBlur={() => setCollapse(true)}>
        <Menu rootStyles={{color: 'white', backgroundColor: '#1d2033'}}>
          <h3 className="p-3">Trivial</h3>
          <SubMenu label="Temáticas">
            <MenuItem> <Thematic name="2010-2023"></Thematic> </MenuItem>
          </SubMenu>
          <SubMenu label="Categorías">
            <MenuItem> <Category name="Entretenimiento" color="pink"></Category> </MenuItem>
            <MenuItem><Category name="Geografia e historia" color="blue"></Category> </MenuItem>
            <MenuItem> <Category name="Misceláneo" color="violet"></Category> </MenuItem>
            <MenuItem> <Category name="Ciencia" color="green"></Category> </MenuItem>
            <MenuItem> <Category name="Arte" color="red"></Category> </MenuItem>
            <MenuItem> <Category name="Deportes y pasatiempos" color="orange"></Category> </MenuItem>
             
          </SubMenu>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default App
