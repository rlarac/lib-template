export interface TreeNode<T = any> {
  children: Array<TreeNode<T> | null>;
  data: T;
}

/**
 * @public
 * @param data - leaf data
 * @param children - leaves
 */
export function createTree<T extends any>(
  data: T,
  ...children: Array<TreeNode<T> | null>
) {
  const root: TreeNode<T> = {
    data,
    children,
  };
  return root;
}
/**
 * @public
 * @param root - TreeNode 
 */
export function bfs<T>(root: TreeNode<T>): T[] {
  const queue: TreeNode[] = [root];
  let current: TreeNode | undefined, child: TreeNode | null;
  const result: T[] = [];
  while (queue.length > 0) {
    if (!(current = queue.shift())) break;
    result.push(current.data);
    for (let i = 0; i < current.children.length; i++) {
      if (!(child = current.children[i])) continue;
      queue.push(child);
    }
  }
  return result;
}
