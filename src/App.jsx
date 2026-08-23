import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import SpaceScene from "./components/SpaceScene";
import NavBar from "./components/NavBar.jsx";

const PLACE_BY_PATH = {
  "/": "Home",
  "/About": "About",
  "/Projects": "Projects",
  "/Skills": "Skills",
  "/Education": "Education",
  "/Contact": "Contact",
};

function App() {
  const { pathname } = useLocation();
  const place = PLACE_BY_PATH[pathname] ?? "Home";

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <NavBar />
      <main
        id="main"
        className="relative z-20 h-dvh overflow-x-hidden overflow-y-auto"
      >
        <Suspense
          fallback={
            <div className="flex min-h-dvh items-center px-12">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
                Loading
              </p>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <div className="pointer-events-none fixed inset-0 z-[1]" aria-hidden>
        <SpaceScene Place={place} />
      </div>
    </>
  );
}

export default App;
