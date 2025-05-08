class TreeNodeB {
    val: number
    left: TreeNodeB | null
    right: TreeNodeB | null
    constructor(val?: number, left?: TreeNodeB | null, right?: TreeNodeB | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function leafSimilar(root1: TreeNodeB | null, root2: TreeNodeB | null): boolean {
    function getLeaves(root: TreeNodeB | null): number[] {
        const leaves: number[] = [];

        function dfs(node: TreeNodeB | null) {
            if (!node) return;
            if (!node.left && !node.right) {
                leaves.push(node.val);
                return;
            }
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return leaves;
    }

    const leaves1 = getLeaves(root1);
    const leaves2 = getLeaves(root2);

    if (leaves1.length !== leaves2.length) return false;

    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false;
    }

    return true;
}
