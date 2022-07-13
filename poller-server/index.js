/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { createIfNotAlready } = require("./db");
const express = require("express");

const app = express();

const port = 3500;

app.get("/", (req, res) => {
  res.send("Poller server. Dyefferson Azevedo, 2022");
});

app.listen(port, () => {
  console.log(`Poller is running on port ${port}`);
});
