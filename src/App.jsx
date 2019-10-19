import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Music from "./pages/Music/Music";
import NotFound from "./pages/NotFound";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";

function App() {
  const [binaryMode, setBinaryMode] = useState(false);

  return (
    <div className={`App ${binaryMode ? "bin-mode" : ""}`}>
      <Header binMode={binaryMode}/>
      <ToggleSwitch onSwitch={() => setBinaryMode(!binaryMode) } on={binaryMode} />
      <Switch>
        <Route exact path="/" render={() => <Main binMode={binaryMode}/>}/>
        <Route exact path="/about" render={() => <About binMode={binaryMode} />} />
        <Route exact path="/music" render={() => <Music binMode={binaryMode}/> }/>
        <Route render={() => <NotFound binMode={binaryMode} />} />
      </Switch>
    </div>
  );
}

export default App;
