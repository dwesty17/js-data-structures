# `js-data-structures`

A collection of common data structures implemented in JavaScript.

## Getting Started

These instructions will get you a copy of the project up and running on 
your local machine for development and testing purposes. See deployment 
for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js

### Installation

#### Clone & cd into project

```
$ git clone https://github.com/dwesty17/js-data-structures.git
$ cd js-data-structures
```

#### Install dependencies

```
$ npm install
```

### Running the tests

```
$ npm run test
```

## Usage

```javascript
const { MinHeap } = require("js-data-structures");

const minHeap = new MinHeap();

minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(1);

console.log(minHeap.extract()); // 1
console.log(minHeap.extract()); // 2
console.log(minHeap.extract()); // 3
```

## License

This project is licensed under the MIT License.
