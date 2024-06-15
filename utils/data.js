import chalk from 'chalk';

const styles = {
  dim: chalk.dim,
  italic: chalk.italic,
  twitter: chalk.hex('#1da1f2'),
  github: chalk.hex('#6cc644'),
  purple: chalk.hex('#8a63d2')
};

const social = new Map()
  .set('Twitter', {
    style: 'twitter',
    url: 'https://twitter.com/eugenexjs'
  })
  .set('GitHub', {
    style: 'github',
    url: 'https://igenexxx.github.io'
  })
  .set('Blog', {
    style: 'purple',
    url: 'https://igenexxx.github.io/blog'
  });

const bio = `
Hi, I'm Igenexxx, a software engineer who enjoys building things for the web. I'm passionate about 
open-source and love sharing my knowledge with the community. I'm currently working on a few side projects and 
writing articles on my blog. Feel free to connect with me on Twitter or GitHub.
`;

const adMsg = 'Checkout my blog for more content!';


const formattedSocial = Array.from(social.entries())
  .map(([resource, {style, url}]) => `${styles[style].inverse(` ${resource.padEnd(8)} `)} ${styles.dim(url)}`)
  .join('\n');


const formattedBio = styles.italic(bio);

export {
  formattedBio,
  formattedSocial,
  adMsg
};
