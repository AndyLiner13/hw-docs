# Daily Rewards Asset Template

## Access the Daily Rewards Asset Template

 To access the Daily Rewards Asset Template: In the desktop editor, enter the
Build mode and select Asset Library > Public Assets from the bottom menu bar. Next, search for “Daily Rewards” in the search field.
Finally, select the Daily Rewards Asset Template and drag it into the scene.
You can now edit the new asset template properties in the Properties panel. ![Finding the Daily Rewards Asset Template](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/503910304_734911829046771_4309394035385604873_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=kBNAtWUtoxgQ7kNvwFZlg1R&_nc_oc=Adny8w4NYT0L8215HRwYHIltDpLbhHsHE5GXsarOv1V1OscoSOxT-XJoQmlDEOL6kBU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EmOfgf6n-bUr745RoKMhzw&oh=00_AfcaZqXp9D...

## Daily Rewards Asset Template properties

### Visual and interaction

 Here you can change the following:
• Id: ID of the daily rewards. Used to differentiate between multiple daily rewards
in the same world.
• Displayed Title: Tile displayed in the top-left corner of the daily rewards UI.
• Displayed Title Icon: Select an icon to display next to the daily rewards title.
• Persistent Object Variable: Id of the Persistent Variable of type Object used to store the event state. See the note above for details on how to create
it.
• Daily Rewards Activation: Whether the daily rewards system is active (default true). Set this to false when you prefer to enable it via the TypeScript API.
• Auto Repeat: Indicates if the daily rewards automatically restarts after the player has
collected all rewards available (default true).
• Show Timer: Whether the timer with the remaining time for the next reward to be available
should be shown (default true).
• Reset Streak If Day Is Missed: Whether missing a day resets the player’s streak (default false).
• Day X Reward SKU: The SKU of an item you want to award the player for logging in on day X.
• Day X Reward Quantity: The quantity of the chosen award item to be granted.
• Day X Reward Thumbnail: The thumbnail of the chosen award item to be granted.

### Daily Rewards items

 To use the Daily Rewards Asset Template, you will need to create in-world items
through the Systems > Commerce menu. Once you have done this, you can add these items to the awards list using
the Daily Rewards Asset Template properties. You can use the Daily Rewards Asset Template properties to configure which
in-world items to grant on each day and their respective quantities.  

 The Daily Rewards Asset Template properties can be configured in the Properties panel or through scripting. Note In order to save the state of the daily rewards for each player, you will need
to create a new Persistent Variable of type Object and assign it’s key under the Daily Rewards Asset Template properties. Find out
how to create and use Persistent Variables [here](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/quests-leaderboards-and-variable-groups/variable-groups/managing-persistent-variables-associated-with-a-variable-group).  

## Scripting

 You can interface with the Daily Rewards Asset Template directly through
TypeScript and fully customize the feature’s behavior. Please refer to the [World Inventory TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/experimental_worldinventory) documentation for more information on the economy APIs.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fdaily-rewards-asset-template%2F)

# Daily Rewards Asset Template

 ![Daily Rewards Asset Template](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/497935804_734911832380104_6962771998323814286_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=SY-3m7yi2B4Q7kNvwF-S8o5&_nc_oc=Adl6Y6gNiB93kNGYHr_0B4mpdS7KIoMz3cvH8lMAuR2QpaD-mFCyi3wsXsOsmgN2deI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=EmOfgf6n-bUr745RoKMhzw&oh=00_AfccpAsAADvQ5_mZPBcGy2KpsT1f8frmT-ij5YE07...
 Note You will need to be a member of MHCP and have accepted the monetization Terms Of
Service in the creator portal in order to create in-world items and currency.
Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program). The Daily Rewards Asset Template allows users to be granted rewards for each day
they log in to your world helping improve retention and engagement. The Daily Rewards Asset Template can be configured to grant in-world items
created in the Systems > Commerce menu. For more information on creating in-world items, visit the [In-World Purchase Guide](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/meta-horizon-worlds-inworld-purchase-guide#creating-an-item). Behind the scenes, the world inventory stores how many of each in-world item is
owned by each player. While the Daily Rewards Asset Template interfaces with the
world inventory automatically, you can use [World Inventory TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory) to manually query, grant, and consume in-world items in a player’s world
inventory.  

## Access the Daily Rewards Asset Template
## Daily Rewards Asset Template properties
## Scripting
## Additional Links
      Learn
# Daily Rewards Asset Template
