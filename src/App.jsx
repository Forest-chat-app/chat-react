import './App.css'
import { Routes, Route } from "react-router-dom";
import appRoutes from "./routes/index";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map((route, index) => {
          return (
            <Route key={index} path={route.path} element={route.element} />
          )
        })}
      </Routes>
    </>
  )
}

export default App
