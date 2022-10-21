import React from "react";
import StartPresenter from "./presenters/StartpagePresenter"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return(
  <>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
    crossorigin="anonymous"
  />
  
  <div id="massiveDiv">
    <StartPresenter/>
  </div>
  </>
  )
}

export default App