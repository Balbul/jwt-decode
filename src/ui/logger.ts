import chalk from "chalk";
import { logSymbols } from "./symbols";

export function log({
  succes = true,
  message = "",
  data,
}: {
  succes: boolean;
  message: string;
  data?: unknown;
}) {
  if (succes) {
    console.log(logSymbols.success, chalk.bgGreen.bold(message + " :"), data);
  } else {
    console.log(logSymbols.error, chalk.bgRed.bold(message));
  }
}
