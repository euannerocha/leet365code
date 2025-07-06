
class TreeNodeDelete {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        let minLargerNode = root.right;
        while (minLargerNode.left) {
            minLargerNode = minLargerNode.left;
        }

        root.val = minLargerNode.val;
        root.right = deleteNode(root.right, minLargerNode.val);
    }

    return root;
}