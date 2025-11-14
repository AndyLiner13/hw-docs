Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/daily-rewards-asset-template

# Daily Rewards Asset Template

![Daily Rewards Asset Template](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/497935804_734911832380104_6962771998323814286_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=_a0rX2tqoScQ7kNvwEG4bpT&_nc_oc=AdkJWQn0dyCIeaheN4CaaBUiSfKjYqL7Uz5R9Z2V4RzP7hcgook_3LavZxMra2dM83w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=FMeIw6BFazbpiZkJnYcnRA&oh=00_Afg1ppFU7-bCI84LKJRJ38wriiUn8SOLGjLl2nuOGV29Dw&oe=69309F78)

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

The Daily Rewards Asset Template allows users to be granted rewards for each day they log in to your world helping improve retention and engagement.

The Daily Rewards Asset Template can be configured to grant in-world items created in the **Systems > Commerce** menu. For more information on creating in-world items, visit the [In-World Purchase Guide](/hw-docs/MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item).

Behind the scenes, the world inventory stores how many of each in-world item is owned by each player. While the Daily Rewards Asset Template interfaces with the world inventory automatically, you can use [World Inventory TypeScript APIs](/hw-docs/Reference/core/Classes/WorldInventory.md) to manually query, grant, and consume in-world items in a player’s world inventory.

## Access the Daily Rewards Asset Template

To access the Daily Rewards Asset Template: In the desktop editor, enter the Build mode and select **Asset Library > Public Assets** from the bottom menu bar. Next, search for “Daily Rewards” in the search field. Finally, select the Daily Rewards Asset Template and drag it into the scene. You can now edit the new asset template properties in the **Properties** panel.

![Finding the Daily Rewards Asset Template](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/503910304_734911829046771_4309394035385604873_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=IHXdnz7U1y0Q7kNvwEAxR1h&_nc_oc=AdloT9N6Q_YERkVrofOUbgv8shllEM7Pp4JAFLYcpSVFt0XZoFj0fY3SiiRYb2c-rcc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=FMeIw6BFazbpiZkJnYcnRA&oh=00_AfhtdSc_xRtf2VeAeh61OuYGA746w6etbCYS7U5kmxr-8Q&oe=6930B496)

## Daily Rewards Asset Template properties

The Daily Rewards Asset Template properties can be configured in the **Properties** panel or through scripting.

Note

In order to save the state of the daily rewards for each player, you will need to create a new Persistent Variable of type *Object* and assign it’s key under the Daily Rewards Asset Template properties. Find out how to create and use Persistent Variables [here](/hw-docs/Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Managing%20Persistent%20Variables%20Associated%20with%20a%20Variable%20Group.md).

### Visual and interaction

Here you can change the following:

* **Id**: ID of the daily rewards. Used to differentiate between multiple daily rewards in the same world.
* **Displayed Title**: Tile displayed in the top-left corner of the daily rewards UI.
* **Displayed Title Icon**: Select an icon to display next to the daily rewards title.
* **Persistent Object Variable**: Id of the Persistent Variable of type *Object* used to store the event state. See the note above for details on how to create it.
* **Daily Rewards Activation**: Whether the daily rewards system is active (default *true*). Set this to *false* when you prefer to enable it via the TypeScript API.
* **Auto Repeat**: Indicates if the daily rewards automatically restarts after the player has collected all rewards available (default *true*).
* **Show Timer**: Whether the timer with the remaining time for the next reward to be available should be shown (default *true*).
* **Reset Streak If Day Is Missed**: Whether missing a day resets the player’s streak (default *false*).
* **Day X Reward SKU**: The SKU of an item you want to award the player for logging in on day X.
* **Day X Reward Quantity**: The quantity of the chosen award item to be granted.
* **Day X Reward Thumbnail**: The thumbnail of the chosen award item to be granted.

### Daily Rewards items

To use the Daily Rewards Asset Template, you will need to create in-world items through the **Systems > Commerce** menu. Once you have done this, you can add these items to the awards list using the Daily Rewards Asset Template properties.

You can use the Daily Rewards Asset Template properties to configure which in-world items to grant on each day and their respective quantities.

## Scripting

You can interface with the Daily Rewards Asset Template directly through TypeScript and fully customize the feature’s behavior. Please refer to the [World Inventory TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/experimental_worldinventory) documentation for more information on the economy APIs.