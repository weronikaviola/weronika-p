import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Music from "./pages/Music/Music";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/music" component={Music} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
