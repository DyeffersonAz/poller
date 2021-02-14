/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const pathLib = require("path");
const fs = require("fs");
const Poll = require("./poll");
const Election = require("./election");

module.exports = function buildPoll(path, pluginName) {
  if (!pluginName) {
    pluginName = "local";
  }
  plugin = require(`${pathLib.dirname(
    require.main.filename
  )}/plugins/${pluginName}/`);

  plugin.onLoad();
  let poll = plugin.getData(path);

  const overrides = JSON.parse(fs.readFileSync(poll.overridesPath).toString());

  Object.keys(poll).forEach((key) => {
    if (overrides[key]) {
      poll[key] = overrides[key];
    }
  });

  Object.keys(overrides).forEach((key) => {
    if (!poll[key] && overrides[key]) {
      poll[key] = overrides[key];
    }
  });
  if (poll.type == "POLL" || poll.type == "YESNO") {
    return new Poll({
      id: poll.id,
      type: poll.type,
      name: poll.name,
      pollPath: path,
      pluginName: pluginName,
      overridesPath: poll.overridesPath,
      options: poll.options,
    });
  } else if (poll.type == "ELECTION") {
    return new Election({
      id: poll.id,
      type: poll.type,
      name: poll.name,
      pollPath: path,
      pluginName: pluginName,
      overridesPath: poll.overridesPath,
      places: poll.places,
    });
  }
};
