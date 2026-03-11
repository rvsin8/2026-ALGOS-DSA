from typing import List  # Import List so we can annotate edge and answer arrays clearly.

class Solution:  # Define the LeetCode solution class.
    def minEdgeReversals(self, n: int, edges: List[List[int]]) -> List[int]:  # Main function.
        graph = [[] for _ in range(n)]  # Build adjacency list for a weighted undirected view of the tree.

        for u, v in edges:  # Go through each directed edge u -> v.
            graph[u].append((v, 0))  # From u to v, cost 0 because this edge already points the correct way.
            graph[v].append((u, 1))  # From v to u, cost 1 because using it that way means reversing u -> v.

        ans = [0] * n  # ans[i] will store the minimum reversals needed when starting from node i.

        def dfs1(node: int, parent: int) -> int:  # First DFS computes answer for root node 0.
            reversals = 0  # Count reversals needed inside this subtree when rooted at current node.
            for nei, cost in graph[node]:  # Explore each neighboring node and edge cost.
                if nei == parent:  # Skip the parent so we do not go backward in the tree.
                    continue  # Move to the next neighbor.
                reversals += cost + dfs1(nei, node)  # Add this edge's reversal cost plus child subtree cost.
            return reversals  # Return total reversals needed for this subtree.

        ans[0] = dfs1(0, -1)  # Compute minimum reversals needed so node 0 can reach all nodes.

        def dfs2(node: int, parent: int) -> None:  # Second DFS reroots the answer from parent to child.
            for nei, cost in graph[node]:  # Check every adjacent node.
                if nei == parent:  # Skip parent to avoid cycling back.
                    continue  # Continue to next neighbor.

                if cost == 0:  # Original edge is node -> nei.
                    ans[nei] = ans[node] + 1  # If rooted at nei instead, that edge becomes wrong, so +1.
                else:  # Original edge is nei -> node.
                    ans[nei] = ans[node] - 1  # If rooted at nei, that edge now helps, so one less reversal.

                dfs2(nei, node)  # Propagate rerooted answers deeper into the tree.

        dfs2(0, -1)  # Fill answers for every node using rerooting.
        return ans  # Return the minimum reversals for all starting nodes.