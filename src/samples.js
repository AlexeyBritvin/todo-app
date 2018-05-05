import {getRandom} from './helpers';

const todoSamples = [
  {
    id: getRandom(),
    title: 'Buy some bread',
    description: 'Nina loves bread!',
    importance: 'Usual',
    date: '2018-05-05',
    complete: false
  },
  {
    id: getRandom(),
    title: 'Call Mom',
    description: 'Dont forget about her birthday. Need to buy a present.',
    importance: 'High priority',
    date: '2018-05-09',
    complete: false
  },
  {
    id: getRandom(),
    title: 'Pay for the internet',
    description: '',
    importance: 'Usual',
    date: '2018-05-30',
    complete: false
  }
];

export default todoSamples;
