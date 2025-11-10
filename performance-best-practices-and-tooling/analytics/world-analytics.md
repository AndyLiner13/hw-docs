Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/world-analytics

# World Analytics

World analytics is the usage and performance data associated with a world in Meta Horizon Worlds. These details are exposed to world creators through a self-service dashboard. It provides the usage data that you need to understand in order to make improvements to your world.

**Note**: To see the World Analytics dashboard for your world, it must have already had visitors for at least two days on the Production channel of Meta Horizon Worlds.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578340_512537547950868_1622790614547008646_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=tyTdq7Hm2moQ7kNvwGG5YUS&_nc_oc=Adnq4a4DacfZKLOCOTWjSloLQ5KYL10wJQrVtHZ_aMoeMCVr0dA6k5Tl-XEVxrl5LzI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=IdOEZNV9iwiGjhmugAcPmQ&oh=00_AfgAgQmkEhfqKlWKUyGCRycvJa2_Eh6dJ0enjZRMoNNQUg&oe=692BE74C)

## How to use the World Analytics tool

Follow this procedure to use the World Analytics tool. You must be an owner or collaborator of the world to access the tool.

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/). You’ll see a list of your worlds.
- Select the world you want to see analytic data for.
- From the left-side navigation, select **Insights** > **World**. The associated world analytics page appears.
- Configure parameters for information that you want to view.
- Select the **Metrics** that you want to view.
- Set **Filters** on which devices you want to include.
- Set the **Date range** for the report. You can either choose one of the preconfigured date ranges from the right side of the page, or you can configure a date range by selecting dates from the calendar. When you’re done, select **Apply settings**. Note that you can go back no further than January 1st, 2024.

**Note**: You can compare graphs for the three device types by selecting each one, and then deselecting **All devices**.

## World Analytics

The following metrics are reported over a specific date range.

| **Metric** | **Description** |
| --- | --- |
| Visits | The number of times the world has been visited by any user, as the number of Sessions. |
| Average time in world | Reports the duration of the average session. |
| Total time in world | Reports the total time spent in the world, across all sessions. |
| Average number of concurrent users (CCU) | Reports the average number of people included in sessions. |
| Returning new visitors (WAU @ D30) | The number of new users who returned to the world at least once in the past 7 days since their first visit, 30 days ago. |
| Churn rate | Reports the number of users that don’t return to the game after visiting it once. |
| FPS P25 | 75% users see frames per second (FPS) at or greater than this value. |
| Hitch fraction | The Average Hitch Fraction (AHF) is a performance metric used to measure the smoothness of gameplay. It represents the average time spent on hitches (stutters or freezes) per second. |
| Memory | The 80th percentile memory in gigabytes (GB) used by a person visiting the world. 80% of readings are under that threashold. Worlds must not exceed a maximum of 6.25 GB of memory. |
| Crash rate | The fraction of sessions that end due to the world crashing. |
| Unique visitors (xAU) | Reports the total number of unique users visiting the world. |
| Unique visitors xAU (7d avg) | Reports the total number of unique users visiting the world, using a seven day rolling average. |
| L1\_status | New, return, retained and resurrected daily users. |
| L7\_status | New, return, retained and resurrected weekly users. |
| L30\_status | New, return, retained and resurrected monthly users. |
| # World snapshot published | How many worlds snapshots have published on a day (to track published date). |
| World impressions 1d, 7d, 30d | Meta Horizon World viewport-views (VPVs) in the ecosystem. Viewport-views relate to the world card being visible to a player in the Horizon menu or Horizon app. |
| Sustained World Visits 1d, 7d, 30d | Meta Horizon World sustained visits (where a visit has >= 5mins time spent). |
| Total integrity actions | Total number of daily reports within the world for integrity actions such as muting and blocking other people in the world. |
| Integrity actions per concurrent user time spent | Integrity Action Count per time spent (hours) by users with other users also in the world. |
| Clickthrough rate | The percentage of users who start a world session after viewing an impression of the world. |
| Sustained visit rate | The percent of visits with time spent in the world over 2 and 5 minutes for mobile and VR respectively. |
| Average time per visit 1d, 7d, 30d | Average time (in minutes) visitors spend per visit in the world over the specific time period. |
| Returning visitors 1d, 7d, 30d | The number of returning visitors to the world over the specific time period. |
| Average time in world per visitor | The average time (in minutes) visitors spend in the world by monthly active users. |

### In-World Analytics

| **Metric** | **Description** |
| --------------- | --------------- |
| Average actions | Average number of Events logged for this Action (among all visitors).|
| Action prevalence | Percentage of World Visitors with 1+ Actions for this Action.|
| Area visitation rate | Percentage of World Visitors that Visited the area at least 1 time.|
| Average minutes spent | Average Time Spent in Minutes in the Area (among visited).|
| P50 minutes spent | P50 (Median) Time Spent in Minutes in the Area (among visited).|
| Game participation rate | Percentage of World Visitors that participated in the Game at least 1 time (started a round).|
| Discovery prevalence | Percentage of World Visitors that Discovered the item at least 1 time.|
| Average friction hit frequency | Average number of Times this Friction Hit per player (among 1+ experienced).|
| Average friction caused frequency | Average number of Times this Friction was Caused per player (among 1+ caused).|
| Friction hit player prevalence | Percentage of World Visitors that experienced the Friction Hit at least 1 time.|
| Friction caused player prevalence | Percentage of World Visitors that caused the Friction at least 1 time.|
| Game mode action rate | Percentage of World Visitors that experienced the game mode.|
| Distribution of visitors’ level | Distribution (percentile buckets) of number of Visitors that reached each Level.|
| Quest completion rate | Percentage of World Visitors that completed the Quest.|
| Average quests completed | Average # of Distinct Quests Completed per Player (among players with 1+ Completions).|
| Rewards earned participation rate | Percentage of World Visitors with Rewards Earned for this type.|
| Average rewards earned | Average Amount of Rewards earned for this type (among players with 1+ Rewards Earned Action).|
| Average rounds played | Average number of Distinct Rounds participated per round played player.|
| Round participation rate | Percentage of World Visitors who started the Round at least 1 time.|
| Stage participation rate | Percentage of World Visitors who started the Stage at least 1 time.|
| Stage abandonment rate | Percentage of World Visitors who started the Stage at least 1 time but never finished the Stage before exiting.|
| Section participation rate | Percentage of World Visitors who started the Section at least 1 time.|
| Section abandonment rate | Percentage of World Visitors who started the Section at least 1 time but never finished the Section before exiting.|
| Task participation rate | Percentage of World Visitors who started the Task at least 1 time.|
| Task step participation rate | Percentage of World Visitors that participated in the Task Step.|
| Total weapon equips | Total number of Weapon Equips for this weapon across all players (Volume).|
| Total weapon grabs | Total number of Weapon Grabs for this weapon across all players (Volume).|
| Total weapon releases | Total number of Weapon Releases for this weapon across all players (Volume).|
| Weapon equip rate | Percentage of World Visitors that Equipped this weapon.|
| Distribution of KO / Death Ratio | Distribution (percentile buckets) of within-player KOs/Deaths across all players.|
| Total wearable equips | Total number of Wearable Equips for this wearable across all players (Volume).|
| Total wearable releases | Total number of Wearable Releases for this wearable across all players (Volume). |
| Wearable worn rate | Percentage World Visitors that equipped/donned the wearable.|
| Average wearables equipped | Average Distinct number of Wearables Equipped across all players (among wearers).|
| Average task minutes | The average number of minutes spent on a specific task by those who started it.|
| P50 task minutes | The median number of minutes spent on a specific task by those who started it.|
| Total task step minutes | The total number of minutes spent on a specific task step by all players.|
| P50 task step minutes | The median number of minutes spent on a specific task step by those who started it.
| P50 game mode minutes spent | The median number of minutes spent in a specific game mode by those who started it.|
| Weapon usage | The percentage of time a weapon was used out of all available weapons.|