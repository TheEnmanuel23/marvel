import request from "superagent";
import prefix from "superagent-prefix";
import config from "../config";

function createAgent() {
  const api = config.get("api");

  return request
    .agent()
    .use(prefix(`${api.url}/v1/public`))
    .query({
      apikey: api.publicKey,
      hash: api.hash,
      ts: 1,
    });
}

export const superagent = createAgent();
