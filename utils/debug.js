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
