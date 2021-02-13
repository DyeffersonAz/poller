/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Poll = require("./poll");
const Role = require("./role");

module.exports = class Election extends Poll {
  constructor({ id, name, pluginName, overridesPath, roles }) {
    super({
      id,
      name,
      type: "ELECTION",
      pluginName,
      overridesPath,
      options: [],
    });

    delete this.options;

    this.roles = roles.map(
      (role) =>
        new Role({
          title: role.title,
          type: role.type,
          candidates: role.candidates,
        })
    );
  }
};
