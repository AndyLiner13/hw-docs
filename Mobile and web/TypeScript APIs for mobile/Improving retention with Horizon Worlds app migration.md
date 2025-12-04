Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/app-migration

# Improving retention with Horizon Worlds app migration

Graduating world visitors from other Meta apps to the Meta Horizon app provides a more immersive and seamless metaverse experience. The Horizon app leverages advanced social, creative, and interactive features that are not fully available on other Meta platforms.

Encouraging users to transition enables them to access richer content, participate in real-time events, and engage with a vibrant community optimized for VR and 3D environments. This transition provides better support, onboarding, and feature discovery, driving higher engagement and satisfaction among users exploring social experiences.

This feature allows creators to **influence time spent and user retention** in their worlds by **rewarding users who switch to the Horizon app**. Horizon app users have better return rates because they experience a consistent entry point, better visibility of metaverse offerings, and Horizon-focused social features.

![App migration upgrade offer UI](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/582202036_865015572703062_7049078428565750275_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=TvoXh5nmRCYQ7kNvwFAWTv5&_nc_oc=AdnRQvmQMMggtnQvKWypEKQvOPfa2UV-52ugth6EKpYfAfTpSJUYh0xRCmIrjIT2Igc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Z-Htp9x-hr3ARjKjJFEfLA&oh=00_AfmbQsuFzdqlRt_IWYCLRytEoRoBoJCi9CjbAWvCKIXKPw&oe=694BBA71)

### Feature eligibility

The app migration feature is available to all Horizon world creators who use the TypeScript API for their world’s logic and scripting.

### Conceptual usage guide

The migration API provides three key functions:

- **Detection mechanism** - Determine whether the user is accessing the world through the Horizon app, another Meta app, or any other Horizon platform. Use this first to detect eligible users.
- **Trigger mechanism** - Start migration to the Horizon app. This immediately directs the user out of the world to install the Horizon app from their app store. After starting the Horizon mobile app, the world automatically reloads to complete the migration journey.
- **Migration check** - Verify if the user has completed migration and is eligible for a reward. The reward format is up to the world creator, making it relevant to the content.

The high-level flow should generally be as follows:

- Determine if the user is on a migratable device.
  - **IF** they are on the Horizon app, check for open migrations and reward users who completed them.
  - **IF** they are on any other Meta app (e.g., Facebook or Instagram), consider offering them the migration path via your choice of UI.
  - **IF** they are on any other platform (e.g., VR or desktop website), take no further action.
- If the user is on the Horizon app, check for migrations. If an active migration is returned, **give the player the appropriate reward** via your world logic and **finish the migration** to prevent it from appearing again.
- If the user is on another Meta app, invite them at an appropriate time to install Meta Horizon and explain the additional benefit. **Allow the user to close the offer without effect** if they are not interested.

Warning

**Do not trigger the in-world migration event without offering it as a choice to the world visitor.** Unexpectedly kicking players from the world will alienate them and cause them to not come back.

### Presenting an effective migration offer

Some advice on what and when to offer migration to a new user.

- **Show the offer when a user will understand why the reward is desirable.**
  Surfacing the migration offer at the right time increases engagement when the user can connect the reward with something they want to achieve in the game. Consider showing it after they’ve seen your in-game shop for the first time or after a certain amount of playtime.
- **Be specific about what the reward will be.**
  Tell the user exactly what they will receive for completing the app migration. Use colorful imagery to catch their attention.
- **If at first you don’t succeed, try and try again.**

  Re-offer the migration to eligible users periodically, as they might change their mind after spending more time in your world. However, be careful not to annoy them.
- **Make the reward claim a positive action.**
  Ensure the user knows they have successfully completed their journey by providing a simple action to claim their reward upon completing migration. This reconnects them with the offer and could inspire them to seek out other rewards in your world.
- **Be creative.**
  The rewards and manner in which you present app migration to visitors is completely up to you. Rather than using a 2D UI panel with buttons, you could use in-world text and trigger volumes.

![Welcome back rewards claim screen](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/581715000_865015569369729_7470897419061814929_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=n9ih1CYr2JoQ7kNvwF8e5qz&_nc_oc=AdkGrnHip1uWv7XvRU78S86d0_adTisR2rjWblR8wVCHgr8ubAsNnWkQ9gLQkcJlgUY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Z-Htp9x-hr3ARjKjJFEfLA&oh=00_Afng0LyfJFR5Q4RnO6JoBqCbK0inkT8ZIMiRrcrH_xEjJw&oe=694BD55F)

## Enabling the Migration Module

- In the editor, open the **Scripts** menu.
- Click the cog icon to open **Script Settings**.
- Navigate to the **API** section and enable `horizon/migration`.

![API Settings (808x412px)](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/571286590_850327374171882_228439192796093506_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=7413S4Yy1AsQ7kNvwGFLaYT&_nc_oc=AdkC93tOw491bcEssvi-M_FjaZ3Pc6CqYVXV3_4lmfadt6T7K4ORGYxMHkcyfhVpZrI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Z-Htp9x-hr3ARjKjJFEfLA&oh=00_AflB8Eps71vmML3NfLntvOGfgLvUgn_7MpZnJzpsY8TTXg&oe=694BD2AF)

## Setup

### Import module in relevant scripts

The Migration module is an extension of the player class, so it can be imported as such:

```
import { PlayerMigration } from 'horizon/migration';
```

### Create PlayerMigration from Local Player

Declare your migrating player:

```
migratingPlayer!: PlayerMigration;
```

Assign the `migratingPlayer` from a local player that has been declared the owner of the script:

```
if (this.entity.owner.get().id != this.world.getServerPlayer().id) {
  this.migratingPlayer = new PlayerMigration(this.entity.owner.get().id);
}
```

You can now call the migration API on this declared and assigned variable.

## Getting the App Platform

Migrations are performed from Meta’s Family of Apps (e.g., Facebook or Instagram).

To ensure you call the migration on the correct platform, get the current App Platform by calling the following API:

```
this.migratingPlayer.mobileAppPlatform.get()
```

This will return one of the following:

```
/**
 * The player is not on a mobile device.
 */
NOT_MOBILE = "NOT_MOBILE",
/**
 * The player is playing through the dedicated Meta Horizon app
 */
META_HORIZON = "META_HORIZON",
/**
 * The player is playing through other Meta Apps like Facebook or Instagram.
 */
META_OTHER = "META_OTHER"
```

**NOTE:** You want to look for `"META_OTHER"` to know the player is playing on one of the Family of Apps to be migrated to Meta Horizon App.

## Triggering the Migration

You can customize the migration with a **`migrationIdentifier`** and **`destinationWorldId`**.

The **migration ID** allows you to filter migrations if you have multiple migrations in your world when checking the data after the player has migrated (see the Getting Migration Data section).

The **destination world ID** specifies a different world for the player to migrate to if you don’t want them to migrate to the current world they’re playing in the Family of Apps.

```
let migrated = await this.migratingPlayer.migrateToHorizonApp({migrationIdentifier: `testId`, destinationWorldId: this.world.id.get().toString()});
```

You can await the API call results to return a **`Promise<bool>`** indicating whether the call was successful.

A successful call sets the migration ID for the player and target world (destination or current if no destination is set), and **triggers the migration** from the Family of Apps to the Meta Horizon app or directs the player to the relevant App Store to install the Meta Horizon app if not already installed.

## Getting Migration Data

Once a user has migrated to the Meta Horizon app (**`META_HORIZON`** on the `mobileAppPlatform` check), you can call the API to get the player’s migration data.

```
this.migratingPlayer.getMigrationData().then((migrated) => {
  console.log(`migrated data: ${migrated.migrationIdentifier} | hasMigrated: ${migrated.hasMigrated}`);
});
```

If there is an active migration, `getMigrationData()` returns the **migration identifier**. Use this to filter the migration next steps, such as giving specific rewards for specific migrations.

You can call this API with an **auto-reward parameter** so you don’t need to call the manual completion API.

```
this.migratingPlayer.getMigrationData(autoRewardPlayer: true)...
```

## Manually Completing Migration Flow

**NOTE:** This is only required if you do not auto-reward when you call the `getMigrationData` API.

Use this if you want to perform extra steps between getting the migration data and fully finalizing the flow.

```
this.migratingPlayer.setMigrationComplete().then((migrated) => {
  console.log(`migration completed: ${migrated}`);
});
```

This completes the player migration flow.