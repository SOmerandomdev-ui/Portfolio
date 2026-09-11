import { Component, Suspense, lazy, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import NavBar from "./components/NavBar.jsx";

// Three.js stack (~1.2 MB) lives in its own chunk and mounts after first paint.
const SpaceScene = lazy(() => import("./components/SpaceScene.jsx"));

function useDeferredMount() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(() => setReady(true), {
        timeout: 1500,
      });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setReady(true), 300);
    return () => window.clearTimeout(id);
  }, []);
  return ready;
}

// The 3D backdrop is decorative. If WebGL fails (context loss, unsupported GPU),
// drop the scene instead of unmounting the whole app.
class SceneErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error) {
    console.error("SpaceScene disabled:", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

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
  const sceneReady = useDeferredMount();

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
        {sceneReady ? (
          <SceneErrorBoundary>
            <Suspense fallback={null}>
              <SpaceScene Place={place} />
            </Suspense>
          </SceneErrorBoundary>
        ) : null}
      </div>
    </>
  );
}

export default App;
