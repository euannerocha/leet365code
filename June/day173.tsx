class TreeNodeMax {
    val: number
    left: TreeNodeMax | null
    right: TreeNodeMax | null
    constructor(val?: number, left?: TreeNodeMax | null, right?: TreeNodeMax | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function maxLevelSum(root: TreeNodeMax | null): number {
    if (!root) return 0;

    let maxSum = root.val;
    let maxLevel = 1;
    let currentLevel = 1;

    const queue: (TreeNodeMax | null)[] = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node) {
                levelSum += node.val;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++;
    }

    return maxLevel;
}
