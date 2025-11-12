Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/adding-and-editing-scripts

Learn

# Adding and editing scripts

## Set up desktop editor to use your IDE

Meta Horizon Worlds Creator docs reference using Visual Studio Code (VS Code), but you can use any IDE you’ve installed on your Windows PC. See [Adding an IDE to Desktop Editor](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md) for detailed instructions on how to set up desktop editor with your preferred IDE.

For troubleshooting VS Code refer to the documentation on [Troubleshooting VS code for Meta Horizon Worlds library module](/hw-docs/Scripting/Get%20started%20with%20TypeScript/If%20VS%20Code%20can’t%20find%20a%20V2%20module.md),

## Getting started with TypeScript scripting

Refer to [TypeScript Getting Started](/hw-docs/Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md) docs for more information on how to start using TypeScript with Meta Horizon Worlds.

## Adding an existing script to an entity

These instructions walk you through assigning a script reference after you have created the script.

- Select an object in the Hierarchy menu or in the scene pane.
- In the **Properties** panel, scroll to the **Script** section.
- Select a script from the **Attached Script** dropdown menu.
- The script is applied to the object, and the properties defined in the script now appear in the **Script** section of the **Properties** panel.
  ![The script properties appear in the Properties panel.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489087152_692067246664563_8655887400773932913_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=zzcF4yZkmwgQ7kNvwF_7Cm2&_nc_oc=AdlrjTPgyxkFm32k2ryKY62uccI-xsinMaJLP4vGNLNVT2IyZ3KXslUtofOZtlLMdNk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8u3h54PqprUzeNUVjStWTg&oh=00_AfhHRXwb9aYw_TpaVYei6gxdEWcVTdQKyGnZuIY7hnpdXg&oe=692EBE7F)

## Copying scripts

Script copying is an available feature to save you time. You can copy a script from an object, and paste it directly onto another. You can reference an object from a script by dragging it onto a script that is already attached to an object.

#### To copy a script

- Open the **Properties panel** for an object that already has a script attached.
- Scroll down to the **Script** section, and click the menu dropdown.
- From the menu that appears, select **Copy Script**. The script is copied into memory.

![Image shows the script menu dropdown, with the "Copy Script" option highlighted.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/485007786_677847718086516_1163809176474656229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=EWXzJDj4ZS8Q7kNvwEBpC9v&_nc_oc=AdmnYqLVyczvH2ms_aBDlxbu8OdYJUdFVyY6U4koly4OxDa58BoMckIEpdWH3h34Bik&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8u3h54PqprUzeNUVjStWTg&oh=00_Afip3WIOM1WqG2utqQMZopEqh20l27eK6Bg4XW4STuPPzg&oe=692EB995)

#### To paste a copied script

- Open the **Properties Panel** for another object.
- Navigate to the **Script** section, then click the menu dropdown.
- From the menu that appears, select **Paste all script properties**. A copy of the script is attached to the object.

![Image shows the script menu drop-down, with the "Paste as new attached script" option selected.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484986141_677847711419850_2591399028196323106_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ou8poj9JJyoQ7kNvwGn9jGj&_nc_oc=AdnlnumVB-Wp_mQ-E-5B6Qicd1azePjzmx7DdTBht-6BcoutRFj_XeEDnC5DiO5OAwM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8u3h54PqprUzeNUVjStWTg&oh=00_AfgrrlJgBF3BCmUnZQXuttQfFAL8OU4-ntngevtQj1qZ_Q&oe=692EC732)