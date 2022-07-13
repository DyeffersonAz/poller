/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

// const PollOption = require("./poll-option");

/**
 * Represents a Poll, which is an abstraction for a survey or an election.
 */
module.exports = class Poll {
  /**
   * Create a poll.
   * @param {string} title
   * @param {array} options - array containing objects that extend "Option".
   */
  constructor(title, options) {
    this.title = title;
    this.options = options;
  }
};
