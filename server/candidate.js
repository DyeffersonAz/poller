/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Option = require("./option");

module.exports = class Candidate extends Option {
  constructor({ name, votes, color, group, code, status }) {
    super({ name, votes, color });
    this.group = group;
    this.code = code ? code : null;
    this.status = status ? status : "NOTELECTED";
  }
};
