#!/usr/bin/env node

import alert from 'cli-alerts';
import { cli } from './utils/cli.js';
import {adMsg, formattedBio, formattedSocial} from './utils/data.js';
import {showDebugInfo, showError} from './utils/debug.js';
import {showHelp} from './utils/help.js';
import {init} from './utils/init.js';
import {showFollowers} from './utils/stats.js';
import {showPosts} from './utils/posts.js';

const { flags: {
  bio: bioFlag,
  social: socialFlag,
  ad: adFlag,
  posts: postsFlag,
  stats: statsFlag,
  minimal: minimalFlag,
  clear: clearFlag,
  debug: debugFlag
}, input } = cli;

(async () => {
  init(minimalFlag, clearFlag);
  showHelp(input);

  const displayMap = new Map()
    .set({ display: bioFlag }, () => console.log(formattedBio))
    .set({ display: socialFlag }, () => console.log(formattedSocial))
    .set({ display: adFlag }, () => alert({ type: 'info', msg: adMsg }))
    .set({ display: postsFlag }, async () => showPosts({ count: 10 }))
    .set({ display: statsFlag }, () => showFollowers('igenexxx'));

  !minimalFlag && await Promise.all(Array.from(displayMap).filter(([key]) => key.display).map(([, fn]) => new Promise(() => fn()))).catch(showError());

  showDebugInfo(debugFlag);
})();
