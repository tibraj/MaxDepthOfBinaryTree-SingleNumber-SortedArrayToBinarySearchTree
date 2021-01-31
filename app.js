//Maximum Depth of Binary Tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function maxDepth(root) {
    return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}





//Single Number






//Conver Sorted Array to Binary Search Tree