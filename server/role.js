/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Candidate = require("./candidate");

module.exports = class Role {
  constructor({ title, type, candidates }) {
    this.title = title;
    this.type = type ? type : "ONEWINNER";
    this.candidates = candidates.map(
      (cand) =>
        new Candidate({
          name: cand.name,
          votes: cand.votes,
          group: cand.group,
          code: cand.code,
          status: cand.status,
        })
    );
  }
};
