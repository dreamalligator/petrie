import Tree from '../src/tree';
import ITISSearch from '../../src/itis';

const data = new ITISSearch('nepenthes');
window.tree = new Tree(data);
console.log('final tree', window.tree);
