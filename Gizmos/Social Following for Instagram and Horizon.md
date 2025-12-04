Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/profiles-to-follow-asset-template

# Social Following for Instagram and Horizon

## Overview

The new Social Following feature enables Horizon World creators to seamlessly connect and promote their Instagram and Horizon profiles to their Worlds. This allows visitors to easily follow creators’ social accounts directly from within Horizon Worlds, reducing friction and enhancing creator engagement.

![Social Following Asset Template in editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/563443649_837715312099755_5519017558597424000_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ri59DEYQJ00Q7kNvwHPvVkt&_nc_oc=AdmKoRYjochKkdRrpvRPypjME_JzQJXgB3Qxmz3Xe-TfDDGerjwnHLQ08ftvFGykAOo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6TC2TuSuyk-Hl6ki7taNPQ&oh=00_AfkfgNhH29eZ-7brnfmqEwz5MUwvdcuhN-uR9DJynrHW0A&oe=694BE1C8)

## Key benefits

* Increases creators’ social followers and engagement.
* Reduces friction for users to follow creators (no need to remove headset or switch devices).
* Provides a standardized, privacy-respecting way to display and interact with social handles.

## Feature highlights

* **Asset Template for Social Handles:**
  Creators can add their Instagram handles and Horizon profiles via an asset template in the HUR editor.
* **In-World Follow Panel:**
  Users can interact with the asset template in a World, opening a Panel UI (PUI) that displays the creator’s social handles. From here, users can click “Follow” to follow the creator on Instagram or Horizon.

## How it works

### For creators

There are 2 ways you can make use of the Social Following feature:

* Using the ready made Social Following asset template, which can be customized.
* Using the [`showProfilesToFollow`](/hw-mcp-tools/documentation/hw-docs/Reference/social/Classes/Social.md) API in your own assets.

### Use the Social Following asset template

You can add social handles to your World using the Social Following asset template. To do so, use the following process:

- In the HUR editor, go to the **Asset Library**.
- Search for **Social Following** and add the asset to your World.
- Enter your Instagram handles and/or Horizon profiles in the asset configuration.
- Save and publish your World.

![Social Following Asset Template in editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/565120812_837715315433088_2479173747082082933_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=hETK3UgaQ3AQ7kNvwGTdzEl&_nc_oc=AdmHtZbBV3vjLBwMI8iHwaMr4BTccMtN8iwDh69hQwycNaly8je_jF3lPuZHsqgbfS4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6TC2TuSuyk-Hl6ki7taNPQ&oh=00_Aflx2BdWAX2pxHlEfCLDOHzNhZjuclhTez7RSFj2lzdH0w&oe=694BC974)

Once added, the asset template appears as a standardized UI element in your World. Users can view your linked social accounts and follow you with a single click.

### Use the TypeScript API

For creators who want more control or wish to build custom social experiences, the [`showProfilesToFollow`](/hw-mcp-tools/documentation/hw-docs/Reference/social/Classes/Social.md) method from `horizon/social` API is now publicly available. This API allows you to show a panel with follow buttons for your social profiles in Instagram and Horizon.

To use the TypeScript API:

- Import the required modules from `horizon/social`:

  ```
  import { Social, SocialPlatformType, ProfileToFollow } from "horizon/social";
  ```
- Define the profiles you want to promote:

  ```
  const profilesToFollow: Array<ProfileToFollow> = [
    {
      profileHandle: "yourInstagramUsername",
      platform: SocialPlatformType.INSTAGRAM,
    },
    {
      profileHandle: "yourHorizonAlias",
      platform: SocialPlatformType.HORIZON,
    }
  ];
  ```
- Show the follow panel to the local player:

  ```
  const result = await Social.showProfilesToFollow(this.world.getLocalPlayer(), profilesToFollow);
  console.log(`Success: ${result.success}`);
  ```

### For users

Users can follow creators’ social profiles directly from within a World. To do so, use the following process:

- Approach the Social Following asset in a World.
- Click the asset to open the follow panel.
- Click **Follow** for the Instagram or Horizon account you want to follow.

![Social Following panel view](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/563996210_837715318766421_3194938916108605084_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=hKxDqpgIdgAQ7kNvwHh_jS6&_nc_oc=AdkniHvTFdesVftL9y9E0-jVUMZIhLRnbPUwt0ShEs-i0n7rTQ-tINZDi1BFCU089pA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6TC2TuSuyk-Hl6ki7taNPQ&oh=00_AfmnGUzCWW-UZ7ytZIHYUQeCcXAC9jX9FW916zme6jxczw&oe=694BC9EB)

Users will follow the Instagram accounts using their linked Instagram in their Meta Accounts.

## Frequently Asked Questions

**Q: Can I link more than one social account?**
**A:** Yes, you can link both Instagram and Horizon accounts. Only public accounts are supported.

**Q: What if a user doesn’t have a linked social account?**
**A:** Following is only available for users who have linked their accounts (Instagram and Horizon) in their Meta Account center.

**Q: Is this feature available on all platforms?**
**A:** The feature is available to all users in VR, desktop, and mobile (via the Meta Horizon App).

**Q: Can I link Facebook accounts or pages, or Discord servers, so users can follow those?**
**A:** We are actively exploring other links to support to help creators build their communities.