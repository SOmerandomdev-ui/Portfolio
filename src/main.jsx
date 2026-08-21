import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/information/Home.jsx"
import About from "./components/information/AboutMe.jsx"
import Projects from "./components/information/Projects.jsx"
import Skills from "./components/information/Skills.jsx"
import Education from "./components/information/Education.jsx"
import Contact from "./components/information/Contact.jsx"
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/About",
        element: <About/>,
      },

      {
        path: "/Projects",
        element: <Projects/>
      },

      {
        path: "/Skills",
        element: <Skills/>
      },

      {
        path: "/Education",
        element: <Education/>
      },

      {
        path: "/Contact",
        element: <Contact/>
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)