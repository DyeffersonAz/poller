/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import React from "react";
import styles from "./Poll.module.css";
import Option from "./Option";

class Poll extends React.Component {
  constructor(props) {
    super(props);

    this.getElection = this.getElection.bind(this);
    this.state = { poll: {} };
  }

  async componentDidMount() {
    const fetchpoll = await this.getElection(this.props.id);
    this.setState({ poll: fetchpoll });
  }

  async getElection(id) {
    const res = await fetch("http://localhost:3001/getpoll/" + id);
    const json = await res.json();
    console.log("fetched json", json);
    return json;
  }

  render() {
    if (this.state.poll.options) {
      return (
        <div className={styles.poll}>
          <h2>{this.state.poll.title}</h2>
          {this.state.poll.options.map((op) => (
            <Option op={op} />
          ))}
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

export default Poll;
