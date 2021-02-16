/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import "./App.css";
import Poll from "./components/Poll";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Poller</h1>
        <Poll id="005" />
      </div>
    );
  }
}

export default App;
