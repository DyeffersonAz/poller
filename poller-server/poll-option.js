/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const Color = require("color");
const { v4: uuidv4 } = require("uuid");

/**
 * Represents an Option
 */
module.exports = class PollOption {
  /**
   * Creates an Option.
   * @param {string} [id=uuidv4()]
   * @param {string} title
   * @param {Color} [color=Color.rgb(0, 0, 255)] - A color represented by a color object from color package. Defaults to blue.
   * @param {string=} [image] - A path that leads to an image somewhere.
   */
  constructor(id, title, color, image) {
    if (id) {
      this.id = id;
    } else {
      this.id = uuidv4();
    }

    if (color) {
      this.color = color;
    } else {
      this.color = Color.rgb(0, 0, 255);
    }

    if (image) {
      this.image = image;
    }

    this.title = title;
  }
};
