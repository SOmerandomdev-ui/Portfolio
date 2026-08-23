import { lazy } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/information/Home.jsx";

const About = lazy(() => import("./components/information/AboutMe.jsx"));
const Projects = lazy(() => import("./components/information/Projects.jsx"));
const Skills = lazy(() => import("./components/information/Skills.jsx"));
const Education = lazy(() => import("./components/information/Education.jsx"));
const Contact = lazy(() => import("./components/information/Contact.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Skills", element: <Skills /> },
      { path: "/Education", element: <Education /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
