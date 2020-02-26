#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");
const fs = require("fs");

/*function parse_arg_one(data) {
  let filename = "";
  switch(data) {
  case "help":
    // code block
    break;
  case "version":
    // code block
    Console.log("1.0.0");
    break;
  default:
    // code block
    filename = data;
    return filename;
  }
}*/

var argv = require('yargs')
  .options({
    'file': {
      alias: 'f',
      describe: 'the path to the package.json',
      demandOption: true
    },
    'about': {
      alias: 'a',
      describe: 'About this application',
      demandOption: false
    }
  })
  .help()
  .argv

var filename = argv.file;


var info = JSON.parse(fs.readFileSync(filename))
var creator = info.author
var version = info.version
var name = info.name
var description = info.description
var license = info.license


var lineone = name + " v" + version;
var linetwo = "Under the " + license + " License"
var linethree = "Created by " + creator;
var linefour = "Description: " + description;

console.log(chalk.green(lineone));
console.log(chalk.red(linetwo));
console.log(chalk.green(linethree));
console.log(chalk.blue(linefour));
