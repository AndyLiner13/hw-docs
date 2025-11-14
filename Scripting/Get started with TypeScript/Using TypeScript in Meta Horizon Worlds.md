Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  ![The Scripts Panel dropdown](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482978961_673266598544628_7050048925004861677_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jBI_lkeGtiUQ7kNvwEpESQj&_nc_oc=AdnoW8wr3q6mpaOz0N-IzqklHS3IUaL6fvnPhc_gF3R57QO0YbzB9AeGqIznnEz3mjA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfgqrYctGRZfrX7mlgy0B8K7t7mMNNU1NVDAVEnNvbPgCQ&oe=693143D6)
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  ![Scripts panel showing no scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484802329_673266578544630_8504929731369833307_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=b3oRdwjqWdAQ7kNvwFjytE6&_nc_oc=AdmKZoqqCrjfOT4wfc2i04NVANGyCC8BxhmrPsFgrnFdL9uNmmE_Q4dC9K5xLazyFMo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afh9nNuGwiLd4maDDUnI1qWe_O74O8WeTJYJDiWshxkFmQ&oe=693126C9)

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  ![The Create New Script icon in the Scripts panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/483926645_673266588544629_7561383049359713985_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=y_A9mjIvUpgQ7kNvwHGXOUS&_nc_oc=AdnHvaYNA_Ote_fbzDj-9597lXO37bAARnXfBxUQKCUnt3FLvsKhsVsff9dJy8ZtfV4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afgd95iQljW0DJ1eyXlwrnvr6JXlyl_-UuWVpiAUBaFhGA&oe=69313966)
- Enter a name for your new script.

  ![Input field for script names](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484444051_673266595211295_4649633267835532323_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0eq73xfo3EsQ7kNvwGCkIx5&_nc_oc=Admgu7EG8LSfotP5Q1NKDKhNv8XRqDbjndlvqTOsMKlh1XhEQNDCSfW3wU8iOTm-inw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfjQ9kMh6WWoFQQQys9DBEDfWMC50cogIn4zCrbvgGiX6A&oe=693136BA)

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTGtJTOPwO4Q7kNvwHYTUHl&_nc_oc=AdlUwKxDA6bqFXNrMzA2sW5nLkErBvy0q89kB5dxsT-CF2b_GcROzbXV46VFvbSonWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afi3Sqjj3EWJ1kkTodBB-HE_JdQ7qH7fnrvy7IlTnlAKzA&oe=6931310E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cD_kzwJQ71YQ7kNvwG8ZlUN&_nc_oc=Adnrb1C0Xab7iIDVabt-QaJkSbrvp0BNcyvDUzsd1zfMPJo_cB200ITSvOZ0WekAwu4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfiEMLqzB60vT85LabGSTS_TxVZO7JFsRQsH55sMZyR86g&oe=69314AB9)
- Write your script in your external editor.

  ![A new script](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482979187_673266615211293_5554301202913487763_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HbG7m7lhPAsQ7kNvwH6GfR8&_nc_oc=Adk9gG8KGsUScL0cYb6CqY40v93hZeqbpFetfvIousfSYKzSekGQFZknPTEOWHgu9FM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfhuQQ12Ug-8pfCLixzzAbBKrXtys8svsm1fz-MEwqS8_g&oe=69312288)

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTGtJTOPwO4Q7kNvwHYTUHl&_nc_oc=AdlUwKxDA6bqFXNrMzA2sW5nLkErBvy0q89kB5dxsT-CF2b_GcROzbXV46VFvbSonWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afi3Sqjj3EWJ1kkTodBB-HE_JdQ7qH7fnrvy7IlTnlAKzA&oe=6931310E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cD_kzwJQ71YQ7kNvwG8ZlUN&_nc_oc=Adnrb1C0Xab7iIDVabt-QaJkSbrvp0BNcyvDUzsd1zfMPJo_cB200ITSvOZ0WekAwu4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfiEMLqzB60vT85LabGSTS_TxVZO7JFsRQsH55sMZyR86g&oe=69314AB9)
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

![An error symbol next to a flawed script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484074913_673266631877958_5898024896263246539_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ui2CkmFJpdsQ7kNvwFe3SlO&_nc_oc=AdnS6tgQGyAb2t9ltrMYfE6KbWtvxagUd_X7FfnGm1EQ3OaKjHCxNK8SygkPuepcBNM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afj23oiZIh-UZhi_N7PdCqTVh0LM3SiMs_wGyTEmIQOMWA&oe=6931343C)

You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTGtJTOPwO4Q7kNvwHYTUHl&_nc_oc=AdlUwKxDA6bqFXNrMzA2sW5nLkErBvy0q89kB5dxsT-CF2b_GcROzbXV46VFvbSonWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afi3Sqjj3EWJ1kkTodBB-HE_JdQ7qH7fnrvy7IlTnlAKzA&oe=6931310E)
- Select **Recompile**.

  ![Selecting the Recompile option](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484176691_673266581877963_3979474993532795633_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5cKnWEe4LrcQ7kNvwEh5xmy&_nc_oc=AdmusZJcztIL5JEW1bPbRdbVC8zsReb9xZZSJxMTB5U-7U03-fm1bV1UTwYNPk-xqF4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfiJ4S6zqv8GTunHlPuoqNIMllU7q2cMjUVfts4tzU1EVg&oe=69312519)

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTGtJTOPwO4Q7kNvwHYTUHl&_nc_oc=AdlUwKxDA6bqFXNrMzA2sW5nLkErBvy0q89kB5dxsT-CF2b_GcROzbXV46VFvbSonWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afi3Sqjj3EWJ1kkTodBB-HE_JdQ7qH7fnrvy7IlTnlAKzA&oe=6931310E)
- Select **Rename**.

  ![Selecting the rename option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482989027_673266625211292_1290338324610601907_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=QPAcy9tvmU8Q7kNvwHMBUWr&_nc_oc=AdmhtEi6xAODM0xPLYqUysg0QE4pzTm54996JaHjUBEakxvfBT28g5KOcxGgALRXZP8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfjUzMz889zVGlcQr_6oHJthHvnqAXmCke9mbm7S8oQ8cg&oe=69312C72)
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XTGtJTOPwO4Q7kNvwHYTUHl&_nc_oc=AdlUwKxDA6bqFXNrMzA2sW5nLkErBvy0q89kB5dxsT-CF2b_GcROzbXV46VFvbSonWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_Afi3Sqjj3EWJ1kkTodBB-HE_JdQ7qH7fnrvy7IlTnlAKzA&oe=6931310E)
- Select **Delete**.

  ![Selecting the Delete option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484139456_673266605211294_8095133706982699723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_MW0b9EK0XIQ7kNvwGdEnPz&_nc_oc=Adk32GFjJQm-SdlozM-oEQS6kyrEqUbmPiMY2MT8C6qAWk1oHwnmAF1krr3v2HJ7GUU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dFX5oh1y16gEuYNavDNhsA&oh=00_AfjSyRTkpTFtd0Uz8outKWTncCPeO_LbhDRpz4b0HbUlRQ&oe=6931226F)
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