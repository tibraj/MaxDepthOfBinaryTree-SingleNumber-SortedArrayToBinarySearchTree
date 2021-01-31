//Maximum Depth of Binary Tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function maxDepth(root) {
    // return !root ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    if(!root) return 0;
    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);
    return Math.max(leftDepth + 1, rightDepth + 1);
}


// Recursion, the maximum depth is the larger value in the left and 
// right subtrees, +1 each time the child node is recursive

// Depth-first: Traverse the nodes of the tree along the depth of the tree, 
// searching for branches of the tree as deep as possible.
// When the edge of node v has been explored, the search will go back 
// to the starting node of the edge where node v was found.
// This process continues until all nodes that have been found reachable 
// from the source node.



//Single Number

function singleNumber(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result ^= nums[i];
    }
    return result;
}




//Conver Sorted Array to Binary Search Tree