import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { Context as AuthContext } from "./context/AuthContext";

function App() {
  const { signup } = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <button onClick={signup}>Click</button>
    </div>
  );
}

export default App;
