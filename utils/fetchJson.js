import ora from 'ora';

export const fetchJson = async ({ url, message = 'Fetching data...'}) => {
  const spinner = ora({ text: message, color: 'yellow' }).start();

  const res = await fetch(url);
  const data = await res.json();

  spinner.stop();

  return data;
}
