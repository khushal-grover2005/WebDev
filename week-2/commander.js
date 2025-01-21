const fs = require('fs');
const { Command } = require('commander');

const program = new Command();

program
    .version('1.0.0')
    .command('read <file>')
    .description('File Reader using fs and commander libraries')
    .action((file) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
                return;
            }
            console.log(`File content:\n${data}`);
        });
    });

program.parse(process.argv);
