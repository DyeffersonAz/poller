/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Option = require("./option");
const path = require("path");

module.exports = class Poll {
  constructor({ name, pollPath, type, pluginName, overridesPath }) {
    this.name = name;
    this.path = path.normalize(pollPath);
    this.type = type ? type : "POLL";
    this.pluginName = pluginName ? pluginName : "local";
    this.overridesPath = path.normalize(overridesPath);
  }
};
