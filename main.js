// UtilX provides a command-line interface for effortless discovery, installation, and management of standalone software features.
// UtilX is a free and open-source software licensed under the MIT License.

const HOST = "https://utilx.ddns.net/"
const VERSION = "1.0.0"

const fs = require('fs')
const path = require('path')

const { Command } = require('commander')
const program = new Command()

program.name('utilx')
program.description('A command-line interface for effortless discovery, installation, and management of standalone software features.')
program.version(VERSION)

//for search
program
    .command('search <package>')
    .description('Search for a package')
    .action((package) => {
        console.log(`Searching for ${package}...`);
        // Add your search logic here
    });

program.parse(process.argv);