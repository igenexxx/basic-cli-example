import { cli } from './cli.js';

export const showHelp = (input) => {
  if (input.includes('help')) {
    cli.showHelp(0);
  }
}
