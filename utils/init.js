import welcome from 'cli-welcome';
import checkNode from 'cli-check-node';
import unhandled from 'cli-handle-unhandled';

export const init = (isMinimal, clear) => {
  unhandled();
  checkNode('18', {});

  const showWelcome = () => welcome({
    title: 'cli-alerts',
    tagLine: 'by Zhenya Sikirzhitsky',
    description: 'This is a simple cli alert library that can be used to display alerts in the console.',
    version: '1.0.0',
    bgColor: '#FADC00',
    color: '#000000',
    bold: true,
    clear
  });

  const showName = () => console.log('Zhenya Sikirzhitsky');

  return isMinimal ? showName() : showWelcome();
}
