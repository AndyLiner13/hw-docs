---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/leaderboard-reset-frequency
---

# [Leaderboard Reset Frequency](#leaderboard-reset-frequency)

> [!Important]
>
> This feature is not available to all creators.

## [Overview](#overview)

Horizon’s Leaderboard Reset Frequency feature lets you set an option to reset a leaderboard at periodic intervals. You can configure the reset interval to one of the following values:

- **Daily**: Resets every day at 12:00 AM Pacific Time.
- **Weekly**: Resets every Monday at 12:00 AM Pacific Time (every Sunday night).
- **Monthly**: Resets on the 1st day of every calendar month at 12:00 AM Pacific Time.
- **Never**: Never resets. This is the default setting.

## [Linking persistent variables](#linking-persistent-variables)

If you use a persistent variable to store a player’s scores in the leaderboard, then you can link the persistent variable so that it’s reset along with the leaderboard. In addition, if a player’s persistent variable is linked, all player entries for the persistent variable become zero when the leaderboard resets.

## [How to set the leaderboard frequency](#how-to-set-the-leaderboard-frequency)

Learn the workflow involved in setting the leaderboard frequency by following these steps.

1. Choose a reset cadence for a new or existing leaderboard.
   1. In the CUI, navigate to **Systems** > **Leaderboards**. ![](../../.assets/images/4b479bdaa6f81879d120a86de2744f253fc5c8bf398547a8959e31e3072bb3e7.png)
   2. Either create a new leaderboard by selecting **Create Leaderboard**, or edit an existing leaderboard by selecting **Edit**. ![](../../.assets/images/260b42a2442bb50db531f4f8de54a1c7ec515e5abc4678d26b58e3cc6854a7b9.png)
   3. Beside **Reset frequency**, select the interval that you want. This can be Daily, Weekly, or Monthly. The value defaults to Never. ![](../../.assets/images/08a92f4d49e98b504d30c38fe34cfca487a17a888b3ad8bc26d3714e79a97f14.png)
   4. Save your changes by selecting **Save**.

2. Optional: Link a player’s persistent variable to the leaderboard reset.

   1. Set **Reset persistent variable (optional)** to Yes. ![](../../.assets/images/5e87d092a5d78af61bba6210275d913b9af0f82167a841119b169cf0b2d1db28.png)
   2. Select a persistent variable from one of the variable groups attached to this world.
      > [!Note]
      >
      > You can link only persistent variables with a number data type. ![](../../.assets/images/a39ca6d0855cb0610f15af7cddf1bed3fa9168c5694acbd48d5792f8deb44164.jpg)
   3. Save your changes by selecting **Save**.

## [How leaderboard frequency affects world visitors](#how-leaderboard-frequency-affects-world-visitors)

- All leaderboard entries are cleared on reset.
- Any user entries to the linked player persistent variable are set to zero.
- The Leaderboard gizmo shows a reset countdown for any leaderboard that periodically resets.

![](../../.assets/images/d192eeaee774c0deab29b1caef26b9874ca90927e9e8d165f65f7bae76f831c8.png)

- If there are active users in a world when a leaderboard is scheduled to reset, then all leaderboard(s) scheduled to reset at that time automatically reset.
- If there are no users in the world at the time of the reset, then the reset happens silently, and changes are reflected the next time a player enters the world.

## [Known Issue](#known-issue)

The effect of a leaderboard reset takes time to propagate to the gizmo due to propagation delay. In most cases, this delay goes unnoticed. But in a scenario where there are active players updating their leaderboard scores at reset time, there might be a few second delay before all entries are cleared.

