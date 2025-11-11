Source: https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/item-traits

# Item Traits

Traits allow you to attach custom data to your avatar clothing items. This data can then be consumed and used by your worlds to apply new logic, enhancements, exclusive benefits and more to your players.

This feature allows creators to define collections of stats as JSON objects attached to their digital items. These stats can be used by the creator’s own worlds to apply bonuses or effects when a player wears the item. The system is designed to be agnostic about the meaning or logic of the stats, leaving interpretation and application fully to the world creators.

Some things to keep in mind about item traits:

* Item stats are immutable and cannot expire or be altered by the world, although creators are able to edit existing stats for game balance purposes
* Stats can be used across multiple worlds, but only those owned by the item creator

* Creators can add, update, and describe game stats on new or existing, unpublished items via the Developer Dashboard.

* Worlds can query the equipped stats of a player’s avatar to apply relevant bonuses
* To protect player privacy, the API returns only metadata about game stats, not full avatar configuration or item IDs

## Get started with traits

To create item traits for your avatar clothing items, use the following process:

- Navigate to <http://horizon.meta.com/creator/avatars>![Item Inventory](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/508606932_744511384753482_5044016739761263342_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=dCsNlvppQYkQ7kNvwGZ5ekY&_nc_oc=AdmiJJGDwlzwKSBqhYVv6YOvcDMwtQ1ftFzkLtNOXs9nc3JwPDshk0wEMK_jjlKl9Vo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Go9b4_bSWkI6swpA_zI_qA&oh=00_AfgXjJkk9GgoNypk0g4RBbOIq9YX40OpxAvORzLyzO_TgQ&oe=692C0712)
- Select an item from your created items list. If you need to create an item, check [Avatar Clothing Creation & Selling](/hw-docs/full-bodied-avatars/avatar-clothing-creation-and-selling).
- In the edit modal, click **Add script**.
- For the traits description, write something that will describe to players how your item will affect their experience in affected worlds.
- In the JSON input, add a JSON object with one more stats. Values can be booleans, numbers, strings, arrays, or even objects. For example:
  - `{ "canFly": true, "speed": 200 }`
- Save the item (you’ll need to set the basic info of the item as well (name, description, price)).

## Enable your item in your world

Once you’ve created an item with traits, you’ll need to enable your world to use that item. To do so, use the following process:

- Open your world in the desktop editor and select **Systems** > **Commerce**.
- Click the + icon and select **List avatar item**.
- Check off the item with traits you want to use.
- Ensure that the “Activate traits on items in this world” checkbox is checked at the bottom of the modal.
- Click **List**.
  ![Items listed in desktop editor](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/563042604_840955015109118_2967796144021959629_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=LSGebOBMLdwQ7kNvwGMDTnS&_nc_oc=AdlA-HPuNlIttG1aPPWrV1zjj9I1paBv9cXKw0yvCCooLEAi3nne6pi0qGRP2DdyZPg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Go9b4_bSWkI6swpA_zI_qA&oh=00_Afi_DnI8Nk_xO5mpLpLtnjVlg3OSsXn4h5le8HKxUCiIRA&oe=692BEFC6)

## Access traits with the AvatarTraits API

Now that you’ve created an item with traits and enabled your world to use it, you can access the traits in your world. To do so, use the following process:

- In your script, get the player (e.g. `var player = this.world.getPlayers()[0]`)
- Get the traits string using the getAvatarTraits API (e.g., `var traitsString = player.getAvatarTraits()`)
- With this, you have a string that is a JSON-formatted array of any and all item traits that are associated with the player’s avatar. For example, if a player has a shirt and pants that your world can view the traits for, the string might be:

  ```
   [  
   {"canFly": true, "speed": 200},  
   {"armor": 150, "speed": 75}  
   ]
  ```
- From here you can parse the JSON and iterate through each item’s traits looking for the relevant keys for your world. What the keys are and how you use them is entirely up to you! To parse the string into a JSON object and iterate through it, you can use code like the following:

```
    var traitsArray = JSON.parse(traitsString);  
    for (var item in traitsArray) {  
      var itemTraits = traits[item];  
      for (var key in itemTraits) {  
        if (key == "[YOUR KEY]" && /*[CONDITION]*/) {  
          //[CUSTOM LOGIC HERE]  
          return;  
        } else {  
          //[CUSTOM LOGIC HERE]  
        }  
      }  
    }
```

### Update when a player changes their avatar appearance

- In the `start()` function of your comment, add a CodeBlockEvent Listener:

  ```
   this.connectCodeBlockEvent(  
   this.entity,  
   CodeBlockEvents.OnAvatarTraitsChanged,  
   (player: hz.Player, traitsString: string) => {  
     this.OnAvatarTraitsChanged(player, traitsString);  
   }  
    );
  ```
- The event will pass both the player that changed and the new traits string, so you can confirm which player to update (if needed) as well as directly access the new string, instead of needing to get it manually from the Player object.
- The traits string will be in the same format as the manual retrieval, so you can use the same parsing and iteration to access your traits.

**Appendix: Scripting Examples**

### Scripting Example 1

```
// EXAMPLE 1  
  
  
import * as hz from 'horizon/core';  
import { Player } from 'horizon/core';  
  
class TextCheckTraits extends hz.Component<typeof TextCheckTraits> {  
static propsDefinition = {  
          textGizmo: { type: hz.PropTypes.Entity}, // Declare a property for the Text Gizmo  
      };  
  
  
start() {  
    this.props.textGizmo?.as(hz.TextGizmo).text.set("Start state");  
  
  
    this.connectCodeBlockEvent(  
      this.entity,  
      CodeBlockEvents.OnAvatarTraitsChanged,  
      (player: hz.Player, traitsString: string) => {  
        this.OnAvatarTraitsChanged(player, traitsString);  
      }  
    );  
  
  
    var p = this.world.getPlayers()[0];  
    var attJson = p.getAvatarTraits();  
    this.UpdateText(attJson);  
}  
  
  
OnAvatarTraitsChanged(player: hz.Player, traitsString: string) {  
  this.UpdateText(traitsString);  
}  
  
  
UpdateText(traitsString: string) {  
  if (traitsString == null || traitsString == ""){  
      this.props.textGizmo?.as(hz.TextGizmo).text.set("No traits found");  
      return;  
    }  
  var traitsArray = JSON.parse(traitsString);  
    for (var item in traitsArray) {  
      var itemTraits = traitsArray[item];  
      for (var key in itemTraits) {  
        if (key == "canFly" && itemTraits[key]) {  
          this.props.textGizmo?.as(hz.TextGizmo).text.set("You can fly!");  
          return;  
        } else {  
          this.props.textGizmo?.as(hz.TextGizmo).text.set("You cannot fly!");  
        }  
      }  
    }  
}  
}  
hz.Component.register(TextCheckTraits);
```

### Scripting Example 2

```
  // EXAMPLE 2  
import * as hz from 'horizon/core';  
import { Player } from 'horizon/core';  
  
  
class CheckTraitsComponent extends hz.Component<typeof CheckTraitsComponent> {  
  
  
  start() {  
  // connect to code block event first  
      this.connectCodeBlockEvent(  
        this.entity,  
        CodeBlockEvents.OnAvatarTraitsChanged,  
        (player: hz.Player, traitsString: string) => {  
          this.OnAvatarTraitsChanged(player, traitsString);  
        }  
      );  
  
  
  // check for any traits at start time  
      var p = this.world.getPlayers()[0];  
      var traitJson = p.getAvatarTraits();  
      this.TraitsUpdateFunction(traitJson);  
  }  
  
  
  OnAvatarTraitsChanged(player: hz.Player, traitsString: string) {  
    this.TraitsUpdateFunction(traitsString);  
  }  
  
  
  TraitsUpdateFunction(traitsString: string) {  
    if (traitsString == null || traitsString == ""){  
        //[LOGIC IF NO TRAITS]  
        return;  
      }  
    var traitsArray = JSON.parse(traitsString);  
      for (var item in traitsArray) {  
        var itemTraits = traits[item];  
        for (var key in itemTraits) {  
          if (key == "[YOUR KEY]" && /*[CONDITION]*/) {  
            //[CUSTOM LOGIC HERE]  
            return;  
          } else {  
            //[CUSTOM LOGIC HERE]  
          }  
        }  
      }  
  }  
}  
hz.Component.register(CheckTraitsComponent);
```

# Best Practices

- **Adhere to Content Guidelines**: Familiarize yourself with the content rating classifications below to ensure your digital items are age-appropriate. **\_Note: For now, all items must be 10+ age rating. Reach out with any questions and also refer to the [Code of Conduct for Virtual Experiences](https://www.meta.com/legal/quest/code-of-conduct-for-virtual-experiences/) as well as the [Meta Horizon Worlds Content Guidelines](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/restrictions-to-worlds-in-horizon#how-digital-goods-are-rated) \_**

  **Not Allowed**:

  * Nudity or revealing/sexualized clothing (e.g. lingerie, swimsuits designed to be provocative)
  * Blood, gore, or violent imagery (e.g. bullet holes, severed limbs, graphic injuries)
  * Strong or offensive language on the clothing
  * Drug, alcohol, or tobacco references
- **Prohibited Content**: Regardless of age rating, some things are not allowed at all. Avoid creating or promoting content that is illegal, abusive, or could lead to physical harm. This includes:
  * Clothing that has sexually explicit or provocative material
  * Clothing that promotes bullying, violence, abuse, or physical harm
  * Clothing that displays personal information of users, doxxing others, and sharing malware or malicious software
- **Create Original Content**: Create original content that doesn’t infringe on others’ IP rights as stated in [Meta Horizon Creator Digital Items Offering Terms](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/policy-and-legal/meta-horizon-creator-digital-items-offering-terms).

  **Not allowed:**

  * Copying real-world brands without permission
  * Using logos, sports teams, movie characters, or game characters without permission
  * Tracing or reusing another creator’s clothing design without permission

    If you are using brands or logos, you are responsible for securing all rights necessary. We work to promote original content on our platform. When content violates the Terms, depending on the circumstances, we may remove the content, pause or terminate MHCP participation, and/or disable an account.
- **Content Review**:

  ```
  Be aware that your content may undergo reviews to ensure compliance with guidelines.
  ```

  If your clothing violates Meta’s terms, it may be removed from Horizon and you may be given a “strike” on your account. In serious or repeat cases, your creator account may be paused or disabled.
- **Leverage AI Responsibly**: Utilize AI-powered tools responsibly to enhance content creation while ensuring compliance with Meta’s [AI policies](https://www.facebook.com/legal/ai-terms).
  - Use AI as a starting point. You can refine by downloading the texture and editing it yourself.
  - Do not use AI to generate clothing that contains nudity, sexual content, gore, or offensive imagery.
  - You are responsible for what AI generates. Before you publish, make sure your creation complies with Meta’s Content Guidelines and Terms.
  - Leverage the “feedback” tool available on your creations.
- **Transparency and Communication**: Clearly communicate with users about the nature of your digital items, especially to help users understand what you are selling.

## Limitations and Known Issues

While Item Traits provide powerful customization capabilities, there are some limitations to be aware of:

### Current Limitations

* **Creator Scope**: Item traits can only be used in worlds owned by the same creator who created the item
* **Data Size**: JSON objects for traits should be kept reasonably small to avoid performance issues
* **Immutability**: Once a player equips an item, the traits cannot be modified by the world during gameplay
* **Privacy**: The API only returns trait metadata, not full avatar configuration or specific item IDs
* **Publishing Status**: Traits can only be added to unpublished items (Status: “Ready to list” or “Needs item details”)

### Known Issues

* **Trait Parsing**: Large or deeply nested JSON objects may cause parsing delays
* **Cross-World Compatibility**: Trait keys used in one world may not be meaningful in another world by the same creator
* **Update Delays**: Changes to item traits may take a few minutes to propagate to all world instances

## Performance Considerations

To ensure optimal performance when using Item Traits:

* **Keep JSON Simple**: Use flat JSON structures when possible rather than deeply nested objects
* **Limit Trait Checks**: Avoid calling `getAvatarTraits()` frequently in loops or every frame
* **Cache Results**: Store parsed trait data locally rather than re-parsing the JSON string repeatedly
* **Efficient Logic**: Use early returns in your trait checking logic to avoid unnecessary processing

## Frequently Asked Questions

**Q: Can I use Item Traits with items created by other creators?**

* A: No, Item Traits only work with items you’ve created yourself and can only be used in worlds you own.

**Q: How many traits can I add to a single item?**

* A: There’s no hard limit, but keep your JSON object reasonably sized for performance. We recommend focusing on 3-10 meaningful traits per item.

**Q: Can I modify trait values while a player is wearing the item?**

* A: No, trait values are immutable during gameplay. You can only read the trait values, not modify them.

**Q: Do Item Traits work in VR, desktop, and mobile?**

* A: Yes, Item Traits work across all platforms where Horizon Worlds is available.

**Q: Can I use Item Traits for items that are already published?**

* A: No, you can only add or modify traits on unpublished items. Published items cannot have their traits changed.

**Q: What happens if I delete an item that has traits?**

* A: If you delete an item, all associated traits are also removed. Make sure to back up your trait configurations if needed.

**Q: Can I share trait data between different worlds I own?**

* A: Yes, if you list the same item in multiple worlds you own, the traits will be available in all of those worlds.