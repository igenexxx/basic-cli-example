import alert from 'cli-alerts';

const printAd = (msg) => alert({type: 'info', msg});

const stripHTMLTags = (str) => str.replace(/<[^>]*>/g, '');

export {
  printAd,
  stripHTMLTags
}
