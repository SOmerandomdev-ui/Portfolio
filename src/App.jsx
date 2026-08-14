import { useState } from 'react'
import { Outlet } from "react-router";
import SpaceScene from "./components/SpaceScene";
import { Planet } from "./components/Planets/Earth.jsx"
import NavBar from "./components/NavBar.jsx"
import './App.css'


function App() {
  const [Lookat, setLookat] = useState("Home")
  
  return <>
    <Outlet />
    <div className="fixed inset-0 z-0">
      <SpaceScene Place={Lookat} />
    </div>
    <NavBar State={setLookat}/>
  </>

  
}

export default App
