/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import Color from "color";
class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: Color(
        `${this.props.op.color.model}(${this.props.op.color.color.join(", ")})`
      ),
    };
  }

  render() {
    return (
      <div>
        <p>
          <b
            style={{
              backgroundColor: this.state.color,
              color: this.state.color.negate(),
            }}
          >
            {this.props.op.title}
          </b>{" "}
          - {this.props.op.votes} votes
        </p>
      </div>
    );
  }
}

export default Option;
