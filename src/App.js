import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Assembly from "./Pages/Assembly";
import Data from "./Pages/Data";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState({
    backgroundColor: "white",
    color: "black",
  });
  return (
    <div style={theme}>
      <Routes>
        <Route path={"/"} element={<Dashboard setTheme={setTheme} theme={theme}/>} />
        <Route path={"/Assembly"} element={<Assembly setTheme={setTheme} theme={theme}/>} />
        <Route path={"/Data"} element={<Data setTheme={setTheme} theme={theme}/>} />
      </Routes>
    </div>
  );
};

export default App;
