Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-limits-for-a-world

# Performance limits for a World

All systems have limits. When designing a world, you should consider the following world limits. Keep in mind that these are ballpark numbers and may not apply to every world under every condition. We recommend using the performance tools to validate and ensure you’re considering the conditions for your own world when creating in Meta Horizon Worlds.

## Runtime world budgets

Understanding runtime limits enables you to effectively allocate the total number of assets required for creating your world, and develop a comprehensive asset plan. These limits are view dependent however, since there is no occlusion culling, the world limit can often approach the following view limits.

|  | **Approximate limits for a gameplay heavy world** | **Maximums, when you have a more static world** |
| --- | --- | --- |
| **Total Vertices** | 600,000 | 1 Million |
| **Draw Calls** | 200 | 550 |

## Travel time world budgets

The following limits are designed to keep world travel times in check, especially for visitors with lower internet speeds.

|  | **Approximate limits for acceptable download time for a gameplay heavy world** | **Approximate limits for acceptable download time for a more static world** |
| --- | --- | --- |
| **Unique Vertices** | 200k | 400k |
| **Texture Megapixels** | 40 megapixels | 80 megapixels |

One megapixel is equivalent to an area of 1024 x 1024 bits. Therefore, a 2048 x 2048 bit area is four megapixels. More megapixels means it takes more time to load the textures, which may impact world travel times or take the world longer to look fully loaded. 40 Megapixels = 25 MB (ASTC 6x6).

## Generic asset recommendation

We recommend the following general limits.

|  | **Polygons** | **Vertices** | **Texture Size** |
| --- | --- | --- | --- |
| **5 m****3****Object** | 2000 | 1000 | 2048 x 2048 |
| **1 m****3****Object** | 1000 | 500 | 512 x 512 |

## Miscellaneous recommendations

We also recommend the following limits.

|  | **Limit** |
| --- | --- |
| **Leaderboards** | 3 |