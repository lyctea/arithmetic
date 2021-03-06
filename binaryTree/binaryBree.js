function BinaryBree(key) {
    //构造节点方法
    var Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    //二叉树根节点
    var root = null;

    //二叉树插入接口实现
    var insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    //二叉树插入接口
    this.insert = function(key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    //中序遍历接口
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback);
    };

    //中序遍历接口实现方法
    var inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);

            callback(node.key);

            inOrderTraverseNode(node.right, callback);
        }
    };

    //前序遍历接口
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback);
    };

    //前序遍历接口实现
    var preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };

    //后续遍历接口
    this.postOrderTraverse = function(callback) {
        postOrderTraverseNode(root, callback);
    };

    //前序遍历接口实现
    var postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };

    //查找最小值
    this.min = function() {
        return minNode(root);
    };

    var minNode = function(node) {
        if (node) {
            //如果当前节点存在左节点，继续执行循环
            while (node && node.left !== null) {
                node = node.left;
            }
        }
        return node.key;
    };

    //查找最大值
    this.max = function() {
        return maxNode(root);
    };
    var maxNode = function(node) {
        if (node) {
            //如果当前节点存在右节点，继续执行循环
            while (node && node.right !== null) {
                node = node.right;
            }
        }
        return node.key;
    };

    //查找指定数值
    this.search = function(key) {
        return searchNode(root, key);
    };

    var searchNode = function(node, key) {
        if (node === null) {
            return false;
        }
        if (node < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    };

    //删除指定指定节点接口
    this.remove = function(key) {
        root = removeNode(root, key);
    };
    //查找排序二叉树中最小节点
    var finMinNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
        }
        return node;
    };
    //删除指定指定节点实现
    var removeNode = function(node, key) {
        if (node === null) {
            return null;
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = removeNode(node.right, key);
            return node;
        } else {
            //左右都没有节点则为叶子节点，可直接删除
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            //只有右节点，将当前节点替换成右节点
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                //只有左节点，将当前节点替换成做左节点
                node = node.left;
                return node;
            }
            //拥有左右节点的情况
            var aux = finMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right, aux.key);
            return node;
        }
    };
}

module.exports = BinaryBree;
