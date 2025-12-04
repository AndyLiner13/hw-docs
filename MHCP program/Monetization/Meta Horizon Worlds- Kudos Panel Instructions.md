Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/meta-horizon-worlds-kudos-panel-instructions

# Meta Horizon Worlds: Kudos Panel Instructions

**Note**: This functionality is not currently supported for Meta Horizon Worlds on web and mobile.

Hey Creators! The Meta Horizon Worlds team has created a new “Kudos Panel” asset to help with monetizing your worlds. The Kudos Panel is a ready-to-use component that automatically configures your world with everything you need to allow people to purchase Kudos as a way to show their support for your creations.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452672915_512509574620332_6330255663687350902_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=TdSmvm50JVwQ7kNvwEdvm7b&_nc_oc=Adl1wf9CjIIlGEfw3ehFquNADU8SeeTXuso_ERadaOuBGuz-jc_oP1ukcdHzgFZglsI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=O_BbFKL1LqnOnFnQGVJLXg&oh=00_Afn35mpketOniiBr7OrTLs8lYTOPACBLc2gxuapOIBBSuw&oe=694BDE92)

## Benefits of the Kudos Panel

As mentioned above, the Kudos Panel will automatically configure the needed components in your world to allow you to start earning from your creations. When you place a Kudos Panel in your world, it will add the necessary player variables, Kudos leaderboard, and commerce items that will properly configure the required scripts to enable purchases. No additional scripting or coding is required to implement the feature.

Additionally, Creators can edit or tie scripts into the Kudos player variables. This allows you to use Kudos Panel as a starting point for creating your own purchasable items or use Kudos as a gating mechanism for areas of your world with restricted access.

Once created, the Kudos Panel will allow users to purchase Kudos. They are automatically consumed commerce items that will increase the purchaser’s Kudos score. This score is shown on the Kudos Panel leaderboard.

## Kudos Panel Components

The Kudos Panel asset will add the following components to your world:

● **“kudos\_total” player variable:** a persistent player variable to track the total Kudos score for a player. Level 1 Kudos purchase will give 100 Kudos points, level 5 will give 500 Kudos points and level 10 will give 1000 Kudos points.

● **“Kudos” leaderboard:** leaderboard for tracking current Kudos score ranks for all users in this world.

● **Commerce items:** Kudos Panel will create three commerce items with the base names of “Level 1 Kudos”, “Level 5 Kudos”, and “Level 10 Kudos”. These will have the purchase prices of $0.99, $4.99, and $9.99, respectively.

> **NOTE:** If you want to adjust the Kudos commerce item prices, you can! You will need to create new commerce items and update the scripts, text, and In-App Purchase gizmos accordingly.

● **Scripts, In-App Purchase, and leaderboard gizmos:** Kudos Panel also adds all the scripts and visual elements needed to purchase Kudos and show the Kudos score leaderboard.

## How to Use Kudos Panel

In order to access the Kudos Panel, you will need to be part of our Creator Monetization Program and have your payment information properly configured.

The Kudos Panel can only be added to your world once. It is not currently supported to add multiple instances of the Kudos Panel to a single world. If you have previously added a Kudos Panel to your world and fully deleted it, you can add a replacement Kudos Panel to your world.

Adding multiple Kudos Panels to your world will result in Kudos Points being awarded incorrectly and Kudos Leaderboards showing inaccurate Kudos scores.

## Adding a Kudos Panel to your world

To add a Kudos Panel to your world, please do the following:

- Confirm that you have no more than two leaderboards in your world. If you have previously added a Kudos Panel to your world and have a leaderboard called “Kudos” you can skip this step.
- Open the Creation UI and select Assets->Asset Library.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452964709_512509571286999_2791455551734617244_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=FsbCmaKVFksQ7kNvwHUIGIj&_nc_oc=AdnPXibFanygI1u7uEP8Ez5_5qyrVeNe83VXyt2D-cJcVczSz0cTbkA0GxlogRBjbH0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=O_BbFKL1LqnOnFnQGVJLXg&oh=00_AflRm6e8zvzl30QJMZsPtvnNFiZBKASqQWP0fDv5lJSKuw&oe=694BDDD9)
- Select the Commerce folder.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512509591286997_2165290840578957292_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=fBQrXP2UWrAQ7kNvwF0dM6S&_nc_oc=AdmhCY_jZ2nAHsNVsCO2MybIUzZhXt2Q46B8e0lT2t7ESNe_yd8LXYJ3c6cC-Go6TpU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=O_BbFKL1LqnOnFnQGVJLXg&oh=00_AfltTEC6cGaMAHc8gmmwqFzxrhiG5eRPYW2TLMrEHnKUMw&oe=694BD26A)
- Select the Kudos Panel asset and place it in your world.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916228_512509587953664_2086566107633930231_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=n5E-yC_4cHEQ7kNvwHymZu4&_nc_oc=AdkwMIIqYTzLMhA1Q_gJllpd2D5cO2EZixR_tXTk6X2wdj3Qp_FANtce5qp-XXiFwMg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=O_BbFKL1LqnOnFnQGVJLXg&oh=00_Afnc868A8GT6D81-VCi_tUK5X7NL8YsYSMs4s9idVr0pBQ&oe=694BE71F)
- Once the Kudos Panel is placed in your world, Publish your world. The Kudos Panel asset is now ready to use.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597981_512509584620331_2747521599041840352_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=f7L2PkWUvx8Q7kNvwGcCTWI&_nc_oc=AdmQtfvp72xFec0vGk4f1t-MsQWKXqNa8-9d1DWDOudbe1Zq_zPK-AFrkT3hstB5Y7Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=O_BbFKL1LqnOnFnQGVJLXg&oh=00_AfmqIPjWdtNQfOSOOJmuV9NefqWrj_Po_j4nNB7fRVXIOQ&oe=694BE67F)

> **NOTE:** If you do not see these options, it means you have not been correctly added to the Creator Program. You must be invited to join the Creator Program before you can use the Kudos Panel.

### FAQ

**● Can I add multiple Kudos Panels to my world?**

○ No, while the system doesn’t prevent you from adding multiple Kudos Panels to your world, doing so will cause Kudos scores to be updated incorrectly and Kudos leaderboard panels to show incorrect scores.

**● Can I customize the Kudos Panel components once they are placed in my world?**

○ Yes, you can update Kudos Panel components after they have been placed.

○ Common updates include changing the leaderboard gizmo title.

○If you want to adjust the Kudos commerce item prices, you would need to create new commerce items and update the scripts, text, and In-App Purchase gizmos accordingly.

> **NOTE:** If you update the leaderboard name or create new commerce items, those changes will not be automatically reflected in new instances of the Kudos Panel added from the Asset Library.

**● Do Kudos Panel scores reset?**

○ Kudos scores do not automatically reset.

○ If you want to add scripting support to reset Kudos, you are welcome to.

**● Can I remove the Kudos Panel from my world?**

○ Yes, to fully remove the Kudos Panel from your world, delete all the gizmos associated with the Kudos Panel. You will also need to delete the “kudos\_total” player variable, the “Kudos” leaderboard, and the “Level 1 Kudos”, “Level 5 Kudos” and “Level 10 Kudos” commerce items. If visitors have purchased any of these commerce items, you will not be able to delete them, but as long as they are not attached to an In-World Purchase object, visitors will not be able to purchase them.