/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Poll = require("../../poll");
const Option = require("../../option");
const pathLib = require("path");
const fs = require("fs");

module.exports = {
  onLoad() {
    console.log("Plugin Local loaded!");
  },
  getData(path) {
    const index = fs.readFileSync(
      `${pathLib.dirname(require.main.filename)}/${path}/index.json`
    );
    const parsed = JSON.parse(index.toString());
    console.log(parsed);
    parsed.overridesPath = pathLib.resolve(
      `${pathLib.dirname(require.main.filename)}/${path}/overrides.json`
    );
    return parsed;
  },
};
