//也 不用管谁包含谁，只要随便找一个节点，直到某个祖先节点（或自己）包含另一个节点就行了。 oNode.contains(oNode)是等于true的
function commonParentNode(oNode1, oNode2) {
  for(;oNode1;oNode1 = oNode1.parentNode) {
    if(oNode1.contains(oNode2)) {
      return oNode1
    }
  }
}
