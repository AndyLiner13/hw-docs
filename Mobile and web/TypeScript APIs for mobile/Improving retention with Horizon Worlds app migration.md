Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/app-migration

# Improving retention with Horizon Worlds app migration

Graduating world visitors from other Meta apps to the Meta Horizon app provides a more immersive and seamless metaverse experience. The Horizon app leverages advanced social, creative, and interactive features that are not fully available on other Meta platforms.

Encouraging users to transition enables them to access richer content, participate in real-time events, and engage with a vibrant community optimized for VR and 3D environments. This transition provides better support, onboarding, and feature discovery, driving higher engagement and satisfaction among users exploring social experiences.

This feature allows creators to **influence time spent and user retention** in their worlds by **rewarding users who switch to the Horizon app**. Horizon app users have better return rates because they experience a consistent entry point, better visibility of metaverse offerings, and Horizon-focused social features.

<details>
<summary>App migration upgrade offer UI</summary>

<p></p>

[App migration upgrade offer UI](../../image_data/a9f80d087feb48037fe97e75696596c89e67ec03debe9a6947fe35cdf11c3ed4.md)

### Overview
This image is a promotional advertisement for a game called "Meta Horizon." It features two animated characters in a room setting, with a call-to-action encouraging users to download the game to unlock rewards. The layout includes a large banner at the top, rewards displayed in the center, and interactive buttons at the bottom.

### Key Elements
- **Left Character**: A female character wearing a yellow shirt with red accents and a red skirt. She has a friendly expression and is pointing towards the rewards.
- **Right Character**: A male character dressed in a purple and green jumpsuit with a colorful hairstyle. He is in a dynamic pose, suggesting excitement.
- **Banner**: A red banner with a yellow crown at the top reads "UPGRADE TODAY."
- **Rewards**: Three distinct rewards are shown:
  - **Coin Reward**: A circular icon labeled "6000 Coins."
  - **Loot Reward**: A hexagonal icon labeled "4000 Loot."
  - **T-shirt Reward**: An image of a white T-shirt with red trim and a logo, labeled "Exclusive Offer 'Employee' T-shirt."
- **Text**: Promotional text in the center states, "Download Meta Horizon to play Profit or Perish and instantly unlock these rewards."
- **Buttons**: Two buttons at the bottom:
  - **"Maybe later"**: A white button with black text.
  - **"Get Meta Horizon"**: A yellow button with black text and a circular arrow icon.

### Visual Flow / Relationships
The most prominent visual elements are the characters and the rewards. The banner draws attention first, followed by the rewards, and then the buttons at the bottom. There are no arrows or lines connecting elements, but the layout suggests a sequential reading order moving from the banner down to the rewards and finally to the buttons.

</details>

<p></p>



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

- **Show the offer when a user will understand why the reward is desirable.** Surfacing the migration offer at the right time increases engagement when the user can connect the reward with something they want to achieve in the game. Consider showing it after they’ve seen your in-game shop for the first time or after a certain amount of playtime.
- **Be specific about what the reward will be.** Tell the user exactly what they will receive for completing the app migration. Use colorful imagery to catch their attention.
- **If at first you don’t succeed, try and try again.**

  Re-offer the migration to eligible users periodically, as they might change their mind after spending more time in your world. However, be careful not to annoy them.
- **Make the reward claim a positive action.** Ensure the user knows they have successfully completed their journey by providing a simple action to claim their reward upon completing migration. This reconnects them with the offer and could inspire them to seek out other rewards in your world.
- **Be creative.** The rewards and manner in which you present app migration to visitors is completely up to you. Rather than using a 2D UI panel with buttons, you could use in-world text and trigger volumes.

<details>
<summary>Welcome back rewards claim screen</summary>

<p></p>

[Welcome back rewards claim screen](../../image_data/5371e0331fde49ad91a0e09d9403fe2be018b9b02ceff81134cae9a0fcd09282.md)

### Overview
This image depicts a vibrant in-game reward screen with a "Welcome Back" banner at the top. Two animated characters flank a central message and rewards display. The scene is set in a room resembling a workplace environment, with a vending machine and a poster in the background.

### Key Elements
- **Left Character**: A female character wearing a yellow shirt with red accents and a red skirt. She has a friendly expression and is gesturing towards the central message.
- **Right Character**: A male character dressed in a purple and green tracksuit with a distinctive hairstyle. He is in a dynamic pose, seemingly excited.
- **Central Message**: A large banner reads "WELCOME BACK" with a crown icon above it. Below the banner, the text states "Your rewards are ready!".
- **Rewards Display**: Three icons are shown below the message:
  - **First Icon**: A red coin with the text "6000 Coins".
  - **Second Icon**: A hexagonal loot icon labeled "4000 Loot".
  - **Third Icon**: An "Employee" T-shirt with a "Claim Now!" tag.
- **Claim Button**: A prominent yellow button at the bottom with the word "Claim".

### Visual Flow / Relationships
The most prominent visual elements are the "Welcome Back" banner and the two characters. The central message draws attention first, followed by the rewards displayed below. The claim button at the bottom is designed to be easily accessible. The characters frame the central message, creating a balanced composition.

</details>

<p></p>



## Enabling the Migration Module

- In the editor, open the **Scripts** menu.
- Click the cog icon to open **Script Settings**.
- Navigate to the **API** section and enable `horizon/migration`.

<details>
<summary>API Settings (808x412px)</summary>

<p></p>

[API Settings (808x412px)](../../image_data/1f4b49f8a81dd83b325794763260c6a73fb527c8730b4b5690960bba7e9ef68f.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, likely part of a software application. The interface includes a sidebar with navigation options ("API," "Console," "Script editing") and a main content area displaying API settings. The API version is set to "2.0.0."

### Key Elements
- **Sidebar Navigation**: Located on the left side, with options "API," "Console," and "Script editing." Each option has a blue vertical line indicating selection.
- **Main Content Area**: Occupies the right side of the window, showing API settings.
  - **API Version Label**: Positioned at the top-right corner of the main content area.
  - **API Settings List**: Contains multiple toggle switches, some of which are highlighted with a red bounding box. The text "horizon/migration" is visible next to one of the toggles.
  - **Toggle Switches**: Located on the far right of the API settings list. Some toggles are in the "on" position, indicated by a blue background and white checkmark.
- **Buttons**: At the bottom of the window, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the API settings list, as it occupies the largest portion of the screen. The toggle switches are arranged vertically within this list. The "horizon/migration" label is emphasized by the red bounding box. The "Cancel" and "Apply" buttons are positioned at the bottom, suggesting that users can cancel changes or apply them after making adjustments.

</details>

<p></p>



## Setup

### Import module in relevant scripts

The Migration module is an extension of the player class, so it can be imported as such:

```
import {PlayerMigration} from 'horizon/migration';
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
this.migratingPlayer.mobileAppPlatform.get();
```

This will return one of the following:

```
/**
 * The player is not on a mobile device.
 */
((NOT_MOBILE = 'NOT_MOBILE'),
  /**
   * The player is playing through the dedicated Meta Horizon app
   */
  (META_HORIZON = 'META_HORIZON'),
  /**
   * The player is playing through other Meta Apps like Facebook or Instagram.
   */
  (META_OTHER = 'META_OTHER'));
```

**NOTE:** You want to look for `"META_OTHER"` to know the player is playing on one of the Family of Apps to be migrated to Meta Horizon App.

## Triggering the Migration

You can customize the migration with a **`migrationIdentifier`** and **`destinationWorldId`**.

The **migration ID** allows you to filter migrations if you have multiple migrations in your world when checking the data after the player has migrated (see the Getting Migration Data section).

The **destination world ID** specifies a different world for the player to migrate to if you don’t want them to migrate to the current world they’re playing in the Family of Apps.

```
let migrated = await this.migratingPlayer.migrateToHorizonApp({
  migrationIdentifier: `testId`,
  destinationWorldId: this.world.id.get().toString(),
});
```

You can await the API call results to return a **`Promise<bool>`** indicating whether the call was successful.

A successful call sets the migration ID for the player and target world (destination or current if no destination is set), and **triggers the migration** from the Family of Apps to the Meta Horizon app or directs the player to the relevant App Store to install the Meta Horizon app if not already installed.

## Getting Migration Data

Once a user has migrated to the Meta Horizon app (**`META_HORIZON`** on the `mobileAppPlatform` check), you can call the API to get the player’s migration data.

```
this.migratingPlayer.getMigrationData().then(migrated => {
  console.log(
    `migrated data: ${migrated.migrationIdentifier} | hasMigrated: ${migrated.hasMigrated}`,
  );
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
this.migratingPlayer.setMigrationComplete().then(migrated => {
  console.log(`migration completed: ${migrated}`);
});
```

This completes the player migration flow.

## How to Test

To test the app migration flow, access your world through the Facebook app to simulate the real user journey.

- **Publish your world** and set it to publicly available.
- **Open the Facebook app** on your mobile device.
- **Open the hamburger menu** and tap **Games.** If you don’t see it, tap **See more** first.
- **Find your world** in the **Jump back in** section.
- **Enter your world** and trigger the migration offer to test the complete flow.