#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs
 .usage("Usage: -f <filename>")
 .option("f", { alias: "filename", describe: "The name of the file to parse", type: "string", demandOption: true })
 .argv;

 var filename = options.filename;

 fs.readFile(filename, 'utf-8', (err, data) => {
   if (err) throw err;

   // Converting Raw Buffer to text
   // data using tostring function.
   var info = JSON.parse(data)
   var creator = info.author
   var version = info.version
   var name = info.name
   var description = info.description
   var license = info.license
 }

console.log(chalk.green("${name} v${version}"));
console.log(chalk.red("Under the ${license} license"));
console.log(chalk.green("Created by ${creator}"));
console.log(chalk.red("Description: ${description}");
