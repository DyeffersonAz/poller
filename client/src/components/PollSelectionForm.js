/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function PollSelectionForm(props) {
  const history = useHistory();

  const [select, setSelected] = useState("");

  function goTo(e) {
    e.preventDefault();
    history.push(`/poll/${select}`);
  }

  function handleChange(e) {
    setSelected(e.target.value);
  }
  return (
    <form>
      <label to="pollInput">What poll?</label>
      <input id="pollInput" onChange={handleChange}></input>
      <button type="submit" onClick={goTo}>
        Go
      </button>
    </form>
  );
}

export default PollSelectionForm;
