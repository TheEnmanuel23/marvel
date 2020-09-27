import path from "path";
import convict from "convict";

const config = convict({
  env: {
    format: ["production", "development", "test"],
    default: "development",
    arg: "env",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 8000,
    env: "PORT",
  },
  api: {
    url: "http://gateway.marvel.com",
    publicKey: {
      default: "",
      arg: "public_key",
      env: "PUBLIC_KEY",
    },
    hash: {
      default: "",
      arg: "hash",
      env: "HASH",
    },
  },
});

const env = config.get("env");

if (env !== "production") {
  const filePath = path.join(__dirname, `${env}.json`);
  config.loadFile(filePath);
}

config.validate();

export default config;
