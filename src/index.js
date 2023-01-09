"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command();
program
    .name("jwt-decode")
    .description("CLI to decode your JSON WEB TOKEN")
    .version(require("../package.json").version);
program.argument("<token>", "JSON WEB TOKEN").action((token) => {
    console.log("token:", token);
});
program.parse();
program.showHelpAfterError();
program.showSuggestionAfterError(true);
