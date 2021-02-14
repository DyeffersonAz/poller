/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Role = require("./role");

module.exports = class Place {
  constructor({ name, roles, isSum }) {
    this.name = name;
    this.isSum = Boolean(isSum);
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
