import React from 'react';
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header"

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Music from "./pages/Music/Music";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" render={props => <Main {...props} />} />
        <Route exact path="/about" render={props => <About {...props}/>} />
        <Route exact path="/projects" render={props => <Projects {...props}/>} />
        <Route exact path="/music" render={props => <Music {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
