import { useState } from 'react'
import { Outlet } from "react-router";
import SpaceScene from "./components/SpaceScene";
import { Planet } from "./components/Planets/Earth.jsx"
import NavBar from "./components/NavBar.jsx"
import './App.css'


function App() {
  const [Lookat, setLookat] = useState("Home")
  const [Jump, setJump] = useState(false)
  
  return <>
    <NavBar State={setLookat} ChangeJump={setJump}/>
    <Outlet />
    <div className="fixed inset-0 z-[1]">
      <SpaceScene Place={Lookat} Jump={Jump} ChangeJump={setJump}/>
    </div>
  </>

  
}

export default App
