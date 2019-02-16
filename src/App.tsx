import 'babel-polyfill'
import * as React from 'react';
import './styles/app.scss';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/navigation";
import Home from "./components/home";
import Projects from "./components/projects";
import Teams from "./components/teams";
import Sponsor from "./components/sponsor";
import Join from "./components/join";
import Events from "./components/events";

class App extends React.Component {
  public render() {
    return (
      <div className="app-container">
        <Router basename={process.env.PUBLIC_URL}>
          <div>
            <Header />
            <div className="content-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/sponsor" component={Sponsor} />
              <Route exact path="/join" component={Join} />
              <Route exact path="/events" component={Events} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
