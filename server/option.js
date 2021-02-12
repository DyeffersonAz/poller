/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Color = require("color");

module.exports = class Option {
  constructor({ name, votes, color }) {
    this.name = name;
    this.votes = votes;
    const colorMax = 150;
    const colorMin = 10;

    this.color = color
      ? Color(color)
      : Color.rgb(
          Math.floor(Math.random() * (colorMax - colorMin) + colorMin),
          Math.floor(Math.random() * (colorMax - colorMin) + colorMin),
          Math.floor(Math.random() * (colorMax - colorMin) + colorMin)
        );
  }
};
