import React from "react";
import MainLayout from "./MainLayout";
import PageFontDemo from "./PageFontDemo"
import PageAddType from "./PageAddType"
import Firebase from "./Firebase"
import {
  HashRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Routing = () => {
  return (
    <MainLayout>
      <HashRouter basename='/'>
        <div>
          <nav className="hidden">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/add">Add type</Link>
              </li>
              <li>
                <Link to="/firebase">Firebase</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <PageFontDemo />
            </Route>
            <Route path="/add">
              <PageAddType />
            </Route>
            <Route path="/firebase">
              <Firebase />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </MainLayout>
  );
}

export default Routing