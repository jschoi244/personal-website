/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 / sum each node in in the tree.
 */
const SumBST =( root) => {
    let sum = 0;
    var traverse = (node) => {
        if (node) {
            traverse(node.left);
            sum += node.val;
            traverse(node.right);
        }
    }
    traverse(root);
    return sum;
}

const hello = () =>{
}
class Graph{
    constructor(val, children=[]){
        this.val = val;
        this.children = children;
    }
}
const rangeSumBST = (root, low,  high) => {
}