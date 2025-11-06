import React from "react";
import "./App.scss";
import Main from "./containers/Main";

function App() {
  return (
    <div>
      <Main />
      {console.log("App component rendered")}
    </div>
  );
}

export default App;
