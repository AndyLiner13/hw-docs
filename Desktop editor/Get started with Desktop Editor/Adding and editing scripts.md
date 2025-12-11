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
  ![The script properties appear in the Properties panel.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489087152_692067246664563_8655887400773932913_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=EChTLWpPr70Q7kNvwHE3lVk&_nc_oc=AdnvxWgbjXyu4H6U7QbjdQECd8CS1ASdX51KRsB8cR53KmL5WE-N7G4AhnaJUqa41YrTXau5F_mCce_t8HMBqSQ4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=q-GCGYt541xdp94IFcGRZw&oh=00_AflDd2-QgmDLTbxfKOZJQx8Aj4gExLWIhjzvsu6yeXw97A&oe=69556A7F)

## Copying scripts

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### To copy a script

- Open the **Properties panel** for an object that already has a script attached.
- Scroll down to the **Script** section, and click the menu dropdown.
- From the menu that appears, select **Copy Script**. The script is copied into memory.

![Image shows the script menu dropdown, with the "Copy Script" option highlighted.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485007786_677847718086516_1163809176474656229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=80Y75_eYCy0Q7kNvwFGI3YS&_nc_oc=Adm6XIa8asuC8sHcEvV132D-m5F15xmZKYxFSQ2DtflfSpm3TYm0sTA6CnR8jGvcXkhHM_Z9Yo-1BuAF5sKaHzIh&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=q-GCGYt541xdp94IFcGRZw&oh=00_AfkPrT53WKHiorv92lHfSakxrk4XsqZy-DwO0acpixzbWg&oe=69559DD5)

#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

![Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484986141_677847711419850_2591399028196323106_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=afl65I4ktiQQ7kNvwF8u7xu&_nc_oc=Admn_qiV0UVZjnYCyp9dWk8Tnuk7uvwSbVUtft9Pzh4g1Z7xe6LaZlrokwTSCRArQNe4n39hoFfNsPs39k-iUFnp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=q-GCGYt541xdp94IFcGRZw&oh=00_Aflwgzi2WPMfiJIdIVIV5m4UjgUitw81nLBX1MKdCq91GA&oe=69557332)