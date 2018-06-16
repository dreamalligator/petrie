// https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/graph/Graph.js
import Graph from 'javascript-algorithms/src/data-structures/graph/Graph';
import Species from './species';
import Edge from './edge';
import ITISSearch from 'petrie-itis';

// TODO: do binomial names use diacritics? didnt really compare the diff levenshtein modules yet
import levenshtein from 'js-levenshtein';

class Tree extends Graph {
  constructor(raw) {
    console.log('raw data', raw);
    super(true); // directed

    console.debug('tree initializing');


    const looseTree = raw.map(species => (new ITISSearch(species.name)).map(speciesInfo => new Species(speciesInfo)));

    // choose tsn from regular search her

    console.log(looseTree);

    // add edges here
    // add vertexes here

    console.debug('tree built');
  }
}

export default Tree;
