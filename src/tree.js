// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/Graph.js
import Graph from 'javascript-algorithms/src/data-structures/graph/Graph';
import Species from './species';
import Edge from './edge';

class Tree extends Graph {
  constructor(raw) {
    console.log('raw data', raw);
    super();

    console.debug('tree initializing');



    console.debug('tree built');
  }
}

export default Tree;
