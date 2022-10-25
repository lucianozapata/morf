import React from "react";
import StartPresenter from "./presenters/StartpagePresenter"
import PersonalVyPresenter from "./presenters/PersonalVyPresenter"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar";

function App() {
return(
 <>
  <NavBar/>

  <Routes>
    <Route path="/" element={<StartPresenter/>}/>
    <Route path="/personal" element={<PersonalVyPresenter/>}/>
  </Routes>
</>
  )
}

export default App