var BinaryBree = require('./binaryBree.js');

var nodes = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var binaryBree = new BinaryBree();

nodes.forEach(function(key) {
    binaryBree.insert(key);
});

var callback = function(key) {
    console.log(key);
};

binaryBree.inOrderTraverse(callback);
// binaryBree.preOrderTraverse(callback)
// binaryBree.postOrderTraverse(callback)

// console.log(binaryBree.min());
// console.log(binaryBree.max());
// console.log(binaryBree.search(8));

// binaryBree.inOrderTraverse(callback);
// binaryBree.remove(3);
// binaryBree.inOrderTraverse(callback);
