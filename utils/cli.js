import meow from 'meow';
import chalk from 'chalk';

const { green, yellow, cyan, dim } = chalk;

const helpText = `
  Usage
     ${green('npx greeting')} ${yellow('[options]')} ${cyan('[command]')}
      
  Commands
     ${cyan('help')}               Show help info
    
  Options
     ${yellow('--social, -s')}     Include social message ${dim('(default: true)')}
     ${yellow('--bio, -b')}        Include bio message ${dim('(default: true)')}
     ${yellow('--ad, -a')}         Include ad message ${dim('(default: true)')}
     ${yellow('--minimal, -m')}    Minimal output
     ${yellow('--clear, -c')}      Clear console ${dim('(default: true)')}
     ${yellow('--no-social')}      Exclude social message
     ${yellow('--no-bio')}         Exclude bio message
     ${yellow('--no-ad')}          Exclude ad message
     ${yellow('--debug, -d')}      Show debug info
     ${yellow('--version, -v')}    Show version 
  
  Examples
      ${green('npx greetings')}
      ${green('npx greetings')} ${yellow('--no-social')}
      ${green('npx greetings')} ${yellow('--no-ad ')}
      ${green('npx greetings')} ${cyan('help')}
      ${green('npx greetings')} ${yellow('--no-ad --debug')} ${cyan('hey')}
`;

const options = {
  importMeta: import.meta,
  inferType: true,
  flags: {
    social: {
      type: 'boolean',
      shortFlag: 's',
      default: true,
    },
    bio: {
      type: 'boolean',
      shortFlag: 'b',
      default: true,
    },
    ad: {
      type: 'boolean',
      shortFlag: 'a',
      default: true,
    },
    minimal: {
      type: 'boolean',
      shortFlag: 'm',
    },
    clear: {
      type: 'boolean',
      shortFlag: 'c',
      default: true,
    },
    debug: {
      type: 'boolean',
      shortFlag: 'd',
      default: false,
    },
    version: {
      type: 'boolean',
      shortFlag: 'v',
    },
  }
}

const cli = meow(helpText, options);

export { cli };
