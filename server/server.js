/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

const Hapi = require("@hapi/hapi");
const Poll = require("./poll");

const init = async () => {
  const server = Hapi.server({
    port: 3001 || process.env.PORT,
    host: "localhost" || process.env.HOST,
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      const elecs = {
        elec1: new Poll({
          name: "Eleição pra presidente da Ilha do Sino",
          type: "ELECTION",
        }),
        elec2: new Poll({
          name: "Vamos jogar pique-esconde?",
          type: "YESNO",
        }),
      };
      console.log(elecs);
      return elecs;
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
