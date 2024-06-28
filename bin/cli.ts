#!/usr/bin/env ts-node
import { LocalWindowsClientProvider } from "@/index";
import { program } from "commander";

const displayPort = async () => {
  const provider = new LocalWindowsClientProvider();

  const host = await provider.provide();
  console.log(host);
};

const main = async () => {
  program.name("scr-node").version("0.0.1");

  program
    .command("display")
    .description("display the full uri for the locally runnning bw web api")
    .action(async () => {
      await displayPort();
    });

  program.parse();
};

main();
