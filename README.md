# Petrie

![petrie](https://github.com/nebulousdog/petrie/blob/master/petrie.png)

![vulnerabilities](https://snyk.io/test/github/nebulousdog/petrie/badge.svg?targetFile=package.json)
![coverage](https://coveralls.io/repos/github/nebulousdog/petrie/badge.svg?branch=master)

a Graph-based phylogenetic tree, implemented in Javascript.

## Phylogeny and Taxonomy

Whether your purposes are phylogenetic or taxonomic in nature doesn't matter. That is, whether you are making a evolutional tree, or a species classification tree. Your source of graph data will determine the utility.

* https://en.wikipedia.org/wiki/Phylogenetic_tree
* https://en.wikipedia.org/wiki/Taxonomic_rank

## Graph

* https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph

### Implementation

todo

## Nepenthes Example

I chose Nepenthes, because I grow them at home! This project is part of a bigger one related to carnivorous plants and terraria that I'm breaking apart.

* http://www.carnivorousplants.org/cp/evolution/Nepenthes

I'm a hobbiest, so if youre actually in a scientific field and have favorite phylogenetic database, data structure, protocol to share this kind of data, or other research I know nothing about!, I'd love to hear about it [in the issues](https://github.com/nebulousdog/petrie/issues).

## Getting started

Install package.

```bash
yarn add petrie
```

Import module.

```javascript
import Tree from 'petrie';
```

Create a cached tree from the ICPS [Carnivorous Plant Names Database](http://cpnames.carnivorousplants.org/).

```javascript

```

Create a cached tree using NCBS.

```javascript

```

Creating your own tree.

```javascript

```

Import your data.

```javascript
import data from './data'; // default export location
```

Initialize a new `Tree` instance.

```javascript
const tree = new Tree(data);
```

Searching.

```javascript
tree.find('nepenthes');

tree.find('nepenthes a');
```

Taxonomy

```javascript
const ampullaria = tree.find('nepenthes ampullaria')[0];

ampullaria.name // binomial name
ampullaria.domain
ampullaria.order
ampullaria.species

ampullaria.divisions // synonymous with Species.prototype.children
ampullaria.order.divisions

// using HAMT methods to determine parents and children
ampullaria.children
const nepenthes = tree.find('nepenthes')[0]
ampullaria.isParent(nepenthes);
// false
nepenthes.isParent(ampullaria);
// true

```

Phylogeny

```javascript
const nepenthes
ampullaria.geneticDistance();
```

HAMT

Using HAMT means that we have an entire tree-searching algorithm at our hands.
Let's use it to create a binomial name searching autocomplete.

```javascript

```

Graphing

D3 is an optional dependency to try to keep this project footprint small, and because not everybody needs graphing. If you like other chart libraries, please feel free to let me know in the issues.

```javascript
import d3 from 'd3';

```

## Contributing

Issues and pull requests are very welcome!

### Tests

`yarn test`

## License

MIT
