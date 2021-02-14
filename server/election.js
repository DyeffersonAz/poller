/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Poll = require("./poll");
const Place = require("./place");

module.exports = class Election extends Poll {
  constructor({ id, name, pluginName, overridesPath, places }) {
    super({
      id,
      name,
      type: "ELECTION",
      pluginName,
      overridesPath,
      options: [],
    });

    delete this.options;

    this.places = places.map(
      (place) =>
        new Place({
          name: place.name,
          type: place.type,
          isSum: place.isSum,
          roles: place.roles,
        })
    );
  }
};
