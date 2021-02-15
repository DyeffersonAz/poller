/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Option = require("./option");
const path = require("path");

module.exports = class Poll {
  constructor({ id, title, type, pluginName, overridesPath, options }) {
    this.id = id;
    this.title = title;
    this.type = type ? type : "POLL";
    this.pluginName = pluginName;
    this.overridesPath = path.normalize(overridesPath);
    if (options) {
      this.options = options.map((op) => {
        return new Option({
          title: op.title,
          votes: op.votes,
          color: op.color,
        });
      });
    }
  }
};
