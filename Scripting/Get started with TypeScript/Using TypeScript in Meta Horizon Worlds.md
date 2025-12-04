Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  ![The Scripts Panel dropdown](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/585631442_869065675631385_1991915292221211359_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=m9GG4q1AY08Q7kNvwHRJIVR&_nc_oc=Admob1v2YFvyV4Auwe86L_0p_2qJ80iEm98MCR-4nGQ0YDCmwDybXYnBJQN45rVCr48&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfmuMbCXr3UQ_yIfkbXY62ahF_NYsNfK7oOzHxulWdmVAQ&oe=694BC97C)
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  ![Scripts panel showing no scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484802329_673266578544630_8504929731369833307_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=vbI1kolYmw8Q7kNvwGXz7Dp&_nc_oc=AdmOeHHjev1x1M_uUlrXRUlkH0T-xbqMepmOBtH4XJjc2mp0qgMD1vtFyMyIWFrysfQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afn9WB2FAUiaGksPqhH74v0TOUbQudSeCcES1jT5gdpitw&oe=694BBD09)

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  ![The Create New Script icon in the Scripts panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/483926645_673266588544629_7561383049359713985_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=g3pKIX9iRjMQ7kNvwGJeuvf&_nc_oc=Adk55uRnBVDxO7Ysa8x5Hfte4RX22rpF5V1Mxuq48z7gY9m1HRJef6l68q2ePuxvxdI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afno3sQTmjr2l-1QKdJAUephpnph0wEkvRUSwn2QqmlLNQ&oe=694BCFA6)
- Enter a name for your new script.

  ![Input field for script names](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484444051_673266595211295_4649633267835532323_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VFROu4oFzNwQ7kNvwHgEe4-&_nc_oc=Adlakz462l-JshD5A2ReuTheXPS5utOVWDZDpJn3EUeeoa2wrZ5lps7iLDnm1Gqfozg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afl19JfTJCq5aaf10FzZzoMm80GVJjAhOsX8Hc4Ei0aAqA&oe=694BCCFA)

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4rgpNyQJYwQ7kNvwHBl1RC&_nc_oc=AdmrBM3GzD--NHH5gUqn6k3ld4bL5z51bLXCAgxO0bnBVvl9TGY2raUi070Nvp6PxOk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfnhP7OYjtXsvpPW5eiEZQ8h8usqNNucDwKeHhnl7TskpA&oe=694BC74E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=RlVEgwloLIIQ7kNvwESt5CA&_nc_oc=Adl2Oq8GUAJjivl_aAB4N1MUClSEN1orVd9bVknqwDswf1LAwKsz6NBpaHBkyAOLBYU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afni6sXMT-cut3KSwHXhOjadEiOhwHjnUaB7VfikHSJ_fw&oe=694BE0F9)
- Write your script in your external editor.

  ![A new script](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482979187_673266615211293_5554301202913487763_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=rO8CvYsJCvMQ7kNvwGUBze-&_nc_oc=Adm2hyyu9GNUnI3_mdwaL20g2-s9811LaIpBbGFOureELoxJ-W8h5txnRoO4k4x9szc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfloDeqCGlpduga05aNvlqnmiVfOyp3mSCgSI1QCgrtLGA&oe=694BB8C8)

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4rgpNyQJYwQ7kNvwHBl1RC&_nc_oc=AdmrBM3GzD--NHH5gUqn6k3ld4bL5z51bLXCAgxO0bnBVvl9TGY2raUi070Nvp6PxOk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfnhP7OYjtXsvpPW5eiEZQ8h8usqNNucDwKeHhnl7TskpA&oe=694BC74E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=RlVEgwloLIIQ7kNvwESt5CA&_nc_oc=Adl2Oq8GUAJjivl_aAB4N1MUClSEN1orVd9bVknqwDswf1LAwKsz6NBpaHBkyAOLBYU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afni6sXMT-cut3KSwHXhOjadEiOhwHjnUaB7VfikHSJ_fw&oe=694BE0F9)
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

![An error symbol next to a flawed script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484074913_673266631877958_5898024896263246539_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=SYploW__9owQ7kNvwHbvNwg&_nc_oc=AdllMXfKloWl2z7zYyzZK2qb834B3i9A1FZ9N-YBELehH7wX97S716-52wm5ENFiPcw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfmwYc6vq5heidu7cZFJuneOkTyCQOPZA5OAzkmLT4B_1A&oe=694BCA7C)

You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4rgpNyQJYwQ7kNvwHBl1RC&_nc_oc=AdmrBM3GzD--NHH5gUqn6k3ld4bL5z51bLXCAgxO0bnBVvl9TGY2raUi070Nvp6PxOk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfnhP7OYjtXsvpPW5eiEZQ8h8usqNNucDwKeHhnl7TskpA&oe=694BC74E)
- Select **Recompile**.

  ![Selecting the Recompile option](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484176691_673266581877963_3979474993532795633_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6cHRbvZa5q4Q7kNvwEKy-bp&_nc_oc=AdnO7mwLxx7vdWIbpqkSpiUXau0asmByCwI-gMX3Nlk9vYQFhahgBLfOrwbmq802IXM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afk6QMUDobLVtzGsh46hlKJVSWsuPs8XmfjnGpWEzXEAtQ&oe=694BBB59)

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4rgpNyQJYwQ7kNvwHBl1RC&_nc_oc=AdmrBM3GzD--NHH5gUqn6k3ld4bL5z51bLXCAgxO0bnBVvl9TGY2raUi070Nvp6PxOk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfnhP7OYjtXsvpPW5eiEZQ8h8usqNNucDwKeHhnl7TskpA&oe=694BC74E)
- Select **Rename**.

  ![Selecting the rename option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482989027_673266625211292_1290338324610601907_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=S52u9wIfHNwQ7kNvwEX2tMU&_nc_oc=AdlCW3MmelukkC1ws40jZkbdwOW7bWLSU-KmvLSt3XXXOcRqD3aXNgbmcFSkaU8kVGI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_Afl0Cs2gyv9I5nOf3BeglIgZl9OfNzhxxkMwWO-f0Z329w&oe=694BC2B2)
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=a4rgpNyQJYwQ7kNvwHBl1RC&_nc_oc=AdmrBM3GzD--NHH5gUqn6k3ld4bL5z51bLXCAgxO0bnBVvl9TGY2raUi070Nvp6PxOk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfnhP7OYjtXsvpPW5eiEZQ8h8usqNNucDwKeHhnl7TskpA&oe=694BC74E)
- Select **Delete**.

  ![Selecting the Delete option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484139456_673266605211294_8095133706982699723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=IXXU_mCISkMQ7kNvwFA4EdK&_nc_oc=AdlmLfIMltf9jJWtI9-0w9NEVw16bVUNIIi67rbE94pm9GU9plsteMaNAB38C6z4wiE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=RW_Gd6W_ui29j1muCesqRQ&oh=00_AfkrJGaKHEY_FIksySQJxe4Q9Yvtx0uL1FXALgHD8F4pfg&oe=694BB8AF)
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