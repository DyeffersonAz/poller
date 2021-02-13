/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Hapi = require("@hapi/hapi");
const Local = require("./plugins/local");
const pathLib = require("path");
const buildPoll = require("./buildPoll");

const init = async () => {
  const server = Hapi.server({
    port: 3001 || process.env.PORT,
    host: "localhost" || process.env.HOST,
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Success! 🎉";
    },
  });

  server.route({
    method: "GET",
    path: "/getpoll/{pollId}",
    handler: (req, h) => {
      try {
        return buildPoll(`polls/${req.params.pollId}`);
      } catch (err) {
        h.response("not found").code(404);
      }
    },
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
