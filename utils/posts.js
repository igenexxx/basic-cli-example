import chalk from 'chalk';
import {fetchJson} from './fetchJson.js';
import {showError} from './debug.js';
import {stripHTMLTags} from './utils.js';

const { cyan, yellow } = chalk;

const apiUrl = 'https://awais.dev/api/posts';

const fetchPosts = async () => {
  return fetchJson({ url: apiUrl, message: 'Fetching posts...' }).catch(showError());
}

export const showPosts = async ({ count }) => {
  const posts = await fetchPosts();
  console.log(`📝 Latest ${count} posts:\n`);
  posts.slice(0, count).forEach(({ title: { rendered }, modified, link }, index) => {
    console.log(`${index + 1}. ${stripHTMLTags(rendered)} - ${new Date(modified).toDateString()}`);
    console.log(`${yellow('source')}: ${cyan(link)})`);
    console.log();
  });
}
