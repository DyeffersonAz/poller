/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const fetch = require("node-fetch");
const fs = require("fs");
const pathLib = require("path");

module.exports = {
  onLoad() {
    console.log("Plugin Strawpoll loaded!");
  },
  async getData(path) {
    const index = fs.readFileSync(
      `${pathLib.dirname(require.main.filename)}/${path}/index.json`
    );
    const toJSON = JSON.parse(index.toString());

    let strawpollAPI = await fetch(
      "https://strawpoll.com/api/poll/" + toJSON.id
    );
    strawpollAPI = await strawpollAPI.json();
    let parsedObject = {};

    parsedObject.id = strawpollAPI.content.cookie_id;
    parsedObject.title = strawpollAPI.content.poll.title;
    parsedObject.type = "POLL";
    parsedObject.pluginName = "strawpoll";
    parsedObject.options = [];
    strawpollAPI.content.poll.poll_answers.forEach((option) => {
      parsedObject.options.push({
        title: option.answer,
        votes: option.votes,
      });
    });
    parsedObject.overridesPath = pathLib.resolve(
      `${pathLib.dirname(require.main.filename)}/${path}/overrides.json`
    );
    return parsedObject;
  },
};
