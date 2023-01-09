import chalk from "chalk";

export const EMOJI = {
  HEART: "❤️",
  COFFEE: "☕",
  BEER: "🍺",
  ROCKET: "🚀",
  OK_HAND: "👌",
  ZAP: "⚡",
  SUCCES: "✅",
  ERROR: "❌",
  WARNING: "❗",
};

interface ILogSymbols {
  info: string;
  success: string;
  warning: string;
  error: string;
}

export const logSymbols: ILogSymbols = {
  info: chalk.blue("ℹ"),
  success: chalk.green("✔"),
  warning: chalk.yellow("⚠"),
  error: chalk.red("✖"),
};
