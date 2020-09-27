import request from "superagent";
import prefix from "superagent-prefix";
import * as logger from "superagent-logger";
import config from "../config";

function createAgent() {
  const api = config.get("api");

  return request
    .agent()
    .use(prefix(`${api.url}/v1/public`))
    .use(logger)
    .query({
      apikey: api.publicKey,
      hash: api.hash,
      ts: 1,
    });
}

export const superagent = createAgent();
