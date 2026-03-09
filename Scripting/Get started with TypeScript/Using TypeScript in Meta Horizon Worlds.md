---
source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds
---

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  ![The Scripts Panel dropdown](../../_assets/images/3476d2ff608a1782c51a5c923624dc134d64f3e65325e188cf9a942a0350fc0a.png)
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  ![Scripts panel showing no scripts](../../_assets/images/07238b4df10e7c9669b65e7dbe733e610f04a6bd15b498e1c9091884e1250bcf.png)

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  ![The Create New Script icon in the Scripts panel](../../_assets/images/db1cfe5ffa769f1a4509831e40854a5e8d4d3fe7070a4690fc75df390fc65065.png)
- Enter a name for your new script.

  ![Input field for script names](../../_assets/images/3d3331a35f72a784805d3bed09d6c1463f73c9f3697a8ff3c7d9fa22e28e5449.png)

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  ![A vertical ellipsis menu next to the script](../../_assets/images/914176c7536f5fd948fa86733e14a77d3d5733c4172fa8714fb4fd9b701f1911.png)
- Select **Open in External Editor**.

  ![Opening the External Editor](../../_assets/images/c41653dd27170be721aca8ef3227e44a3ef95567221d8e3884c05c64ef9899a7.png)
- Write your script in your external editor.

  ![A new script](../../_assets/images/0f144fd6bcdb3387ffcbec069ef48a181ad51276103e8dbd62289ea59560a193.png)

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](../../_assets/images/914176c7536f5fd948fa86733e14a77d3d5733c4172fa8714fb4fd9b701f1911.png)
- Select **Open in External Editor**.

  ![Opening the External Editor](../../_assets/images/c41653dd27170be721aca8ef3227e44a3ef95567221d8e3884c05c64ef9899a7.png)
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

![An error symbol next to a flawed script](../../_assets/images/af0f3c5b0af6fcdc1a49706135dd562e5024eb672b3eac33884007bf404eea9a.png)

You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](../../_assets/images/914176c7536f5fd948fa86733e14a77d3d5733c4172fa8714fb4fd9b701f1911.png)
- Select **Recompile**.

  ![Selecting the Recompile option](../../_assets/images/7c29fed5ee16e61d1eea7f9d18ac772fbafd65b32dc51104177c23b5b0d71f3c.png)

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](../../_assets/images/914176c7536f5fd948fa86733e14a77d3d5733c4172fa8714fb4fd9b701f1911.png)
- Select **Rename**.

  ![Selecting the rename option](../../_assets/images/5e7f8f60015d5f7a1aa44161194a9b2b470ad3eddbee6742481f4d50ab62fb68.png)
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](../../_assets/images/914176c7536f5fd948fa86733e14a77d3d5733c4172fa8714fb4fd9b701f1911.png)
- Select **Delete**.

  ![Selecting the Delete option](../../_assets/images/673d62cd42b6fb46e330bc66366f9b9761bfc577784a269b23c32e3b6108cc90.png)
- Click **Confirm** to delete the script.

## An example of a simple script

The following example script sets an entity’s color to red when you attach the script to it.

```
import { PropTypes } from 'horizon/core';
import { Component, Entity, PropsDefinition } from 'horizon/core';

class MoveAttachedEntity extends Component<typeof MoveAttachedEntity> {
  static propsDefinition = {
    target: {type: PropTypes.Entity},
    position: {type: PropTypes.Vec3},
};

  start() {
    this.world onUpdate(({ deltaTime }) => {
        this.entity.position.set(this.props.position!);
    });
  }
}

Component.register(MoveAttachedEntity);
```