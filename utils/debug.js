import alert from 'cli-alerts';
import {cli} from './cli.js';

export const showDebugInfo = (showDebug) => {
  if (showDebug) {
    alert({ type: 'warning', msg: 'DEBUGGING INFO ⬇️'})
    console.log('[DEBUG]: cli', cli.input);
    console.log('[DEBUG]: cli.flags', cli.flags);
    console.log('\n');
  }
}

export const showError = (err) => {
  const { flags: { debug: showDebug } } = cli;

  if (showDebug) {
    alert({ type: 'error', msg: 'ERROR ⬇️'})
    console.error(err);
    console.log('\n');
  } else {
    alert({ type: 'error', msg: 'Something went wrong! Run with `--debug` flag for more info.'})
  }
}
