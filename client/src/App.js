/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import "./App.css";
import Poll from "./components/Poll";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import PollSelectionForm from "./components/PollSelectionForm";

function App() {
  return (
    <Router>
      <div></div>
      <Switch>
        <Route path="/selection">
          <PollSelectionForm />
        </Route>
        <Route path="/poll">
          <Polls />
        </Route>
      </Switch>
    </Router>
  );
}

function Polls() {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:id`}>
          <Poll />
        </Route>
        <Route path={match.path}>
          <h3>Please select a poll.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
