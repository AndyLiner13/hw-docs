Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/adding-and-editing-scripts

# Adding and editing scripts

## Set up desktop editor to use your IDE

Meta Horizon Worlds Creator docs reference using Visual Studio Code (VS Code), but you can use any IDE you’ve installed on your Windows PC. See [Adding an IDE to Desktop Editor](../../Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md) for detailed instructions on how to set up desktop editor with your preferred IDE.

For troubleshooting VS Code refer to the documentation on [Troubleshooting VS code for Meta Horizon Worlds library module](../../Scripting/Get%20started%20with%20TypeScript/If%20VS%20Code%20can’t%20find%20a%20V2%20module.md),

## Getting started with TypeScript scripting

Refer to [TypeScript Getting Started](../../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) docs for more information on how to start using TypeScript with Meta Horizon Worlds.

## Adding an existing script to an entity

These instructions walk you through assigning a script reference after you have created the script.

- Select an object in the Hierarchy menu or in the scene pane.
- In the **Properties** panel, scroll to the **Script** section.
- Select a script from the **Attached Script** dropdown menu.
- The script is applied to the object, and the properties defined in the script now appear in the **Script** section of the **Properties** panel.
  ![The script properties appear in the Properties panel.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489087152_692067246664563_8655887400773932913_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=rySzcGZb5OgQ7kNvwE3HVWb&_nc_oc=AdkLon4i5Q4xOzWfPuswom1-AhS7qW4T97siZ8JDKCRRULQKvyj4w7YKlU96-JGImyI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TN3Y-jNLKeypf3_NpqH1Nw&oh=00_AfkmWl3ZF1EBXW9JirJMvG6OtpOaHiv43k8bhMFcOazQoQ&oe=694BBF7F)

## Copying scripts

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### To copy a script

- Open the **Properties panel** for an object that already has a script attached.
- Scroll down to the **Script** section, and click the menu dropdown.
- From the menu that appears, select **Copy Script**. The script is copied into memory.

![Image shows the script menu dropdown, with the "Copy Script" option highlighted.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485007786_677847718086516_1163809176474656229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=aHtwgFu0eagQ7kNvwEcQZSS&_nc_oc=AdldAs69FzhIERJyu3JslWqeCFcVAhhST8F5M2-Df4TFk6g34PB_QWAOoZ4me78WY5Q&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TN3Y-jNLKeypf3_NpqH1Nw&oh=00_Afm0k1qtqrozVRf6VzfNSh0EYUlhFA4r8gRiN2orqpbAKg&oe=694BBA95)

#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

![Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484986141_677847711419850_2591399028196323106_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=pNWLwVNXeEQQ7kNvwH1PTNY&_nc_oc=Adn7PgWYN7spI7Jnti5ADvjsojqBZqs0HJjIdoXFGB4t_6fgku04izDKcLnt_yULEvw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TN3Y-jNLKeypf3_NpqH1Nw&oh=00_AfmMPpia8Wf3xRNlYyGAHPObZE7FB_GnR11achGi-FWRxg&oe=694BC832)