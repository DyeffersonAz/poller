/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Color = require("color");

module.exports = class Option {
  constructor({ title, votes, color }) {
    this.title = title;
    this.votes = votes;

    const colorMax = 150;
    const colorMin = 10;
    if (color) {
      this.color = color;
    } else if (this.title.toLowerCase() == "yes") {
      this.color = Color("green");
    } else if (this.title.toLowerCase() == "no") {
      this.color = Color("red");
    } else {
      this.color = Color.rgb(
        Math.floor(Math.random() * (colorMax - colorMin) + colorMin),
        Math.floor(Math.random() * (colorMax - colorMin) + colorMin),
        Math.floor(Math.random() * (colorMax - colorMin) + colorMin)
      );
    }
  }
};
