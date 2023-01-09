#!/usr/bin/env node

import { Command } from "commander";
import { decode } from "jsonwebtoken";
import { log } from "./ui/logger";

const program = new Command();

program
  .name("jwt-decode")
  .description("CLI to decode your JSON WEB TOKEN")
  .version("1.0.0")
  .showHelpAfterError()
  .showSuggestionAfterError(true);

program.argument("<token>", "JSON WEB TOKEN").action((token) => {
  JWTdecode(token);
});

program.parse();

function JWTdecode(token: string) {
  try {
    const decodedToken = decode(token, { complete: true });
    log({ succes: true, message: "data", data: decodedToken });
  } catch (e) {
    log({ succes: false, message: "jwt error : wrong signature" });
  }
}
