/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const pathLib = require("path");
const fs = require("fs");
const Poll = require("./poll");
const Election = require("./election");
const override = require("json-override");

module.exports = async function buildPoll(path) {
  const index = fs.readFileSync(
    `${pathLib.dirname(require.main.filename)}/${path}/index.json`
  );
  const parsed = JSON.parse(index.toString());

  if (!parsed.pluginName) {
    parsed.pluginName = "local";
  }
  const plugin = require(`${pathLib.dirname(require.main.filename)}/plugins/${
    parsed.pluginName
  }/`);

  plugin.onLoad();
  let poll = await plugin.getData(path);

  const overrides = JSON.parse(fs.readFileSync(poll.overridesPath).toString());

  poll = override(poll, overrides);

  if (poll.type == "POLL" || poll.type == "YESNO") {
    return new Poll({
      id: poll.id,
      type: poll.type,
      title: poll.title,
      pollPath: path,
      pluginName: parsed.pluginName,
      overridesPath: poll.overridesPath,
      options: poll.options,
    });
  } else if (poll.type == "ELECTION") {
    return new Election({
      id: poll.id,
      type: poll.type,
      title: poll.title,
      pollPath: path,
      pluginName: pluginName,
      overridesPath: poll.overridesPath,
      places: poll.places,
    });
  }
};
