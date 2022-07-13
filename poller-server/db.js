/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

require("dotenv").config({ path: __dirname + "/.env" });
const { MongoClient } = require("mongodb");

const dbAccess = `mongodb+srv://dyefferson:${process.env.DB_PASSWORD}@cluster0.jp420.mongodb.net/?retryWrites=true&w=majority`;
const dbClient = new MongoClient(dbAccess);
const DATABASE = "poller";

/**
 * Checks if such entry exists, then inserts it if not.
 * @param {object} obj - object to be checked for.
 * @param {string} collectionName - collection to which the "obj" refers to.
 * @param {string} key - property of the object that differs from others (EXCEPT ID).
 */
async function createIfNotAlready(obj, collectionName, key) {
  try {
    const database = dbClient.db(DATABASE);
    const collection = database.collection(collectionName);

    const query = {};
    query[key] = obj[key];

    const search = await collection.findOne(query);

    if (search) {
      return search;
    } else {
      const result = await collection.insertOne(obj);
      return result;
    }
  } finally {
    await dbClient.close();
  }
}

module.exports = { createIfNotAlready };
