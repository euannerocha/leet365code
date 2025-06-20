class TreeNodeLowest {
    val: number;
    left: TreeNodeLowest | null;
    right: TreeNodeLowest | null;
    constructor(val?: number, left?: TreeNodeLowest | null, right?: TreeNodeLowest | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function lowestCommonAncestor(root: TreeNodeLowest | null, p: TreeNodeLowest | null, q: TreeNodeLowest | null): TreeNodeLowest | null {
    if (root === null || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
}