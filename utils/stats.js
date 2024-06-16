import ora from 'ora';
import chalk from 'chalk';

const { green } = chalk;

const title = 'Github followers'

const getFollowers = async (username) => {
  const spinner = ora({ text: 'Fetching followers...', color: 'yellow' }).start();

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  spinner.stop();

  return data.followers;
}

export const showFollowers = async (username) => {
  const followers = await getFollowers(username);
  console.log(`${green(title)}: ${followers}`);
  console.log('\n');
}
