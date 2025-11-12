Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds

Learn

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  ![The Scripts Panel dropdown](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482978961_673266598544628_7050048925004861677_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jBI_lkeGtiUQ7kNvwEpESQj&_nc_oc=AdnoW8wr3q6mpaOz0N-IzqklHS3IUaL6fvnPhc_gF3R57QO0YbzB9AeGqIznnEz3mjA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afg4halveQ14gZIxgSJ4CSm7BHkxQAojj1pWO5oxhsQLwg&oe=692EA0D6)
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  ![Scripts panel showing no scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484802329_673266578544630_8504929731369833307_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=b3oRdwjqWdAQ7kNvwFjytE6&_nc_oc=AdmKZoqqCrjfOT4wfc2i04NVANGyCC8BxhmrPsFgrnFdL9uNmmE_Q4dC9K5xLazyFMo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfhwHbHntkyI6IAOBxZvqVBsHELteNV7a7e4zuved9i7qg&oe=692EBC09)

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  ![The Create New Script icon in the Scripts panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/483926645_673266588544629_7561383049359713985_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yg6GLnrHJBsQ7kNvwHvyDnj&_nc_oc=AdnKbJCeJXjYALDItZ0awkCd0praC0WsQ_ke-np9IwtiIHK3xrgQpJCj4nVU9aoEjEk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfgVcG333K8ZT3y49OTnDJBWDrJLNaHYhiRM0tM-MsnyQg&oe=692E9666)
- Enter a name for your new script.

  ![Input field for script names](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484444051_673266595211295_4649633267835532323_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ileh-D9_0oEQ7kNvwH6_qAu&_nc_oc=AdktqfsOt3w58OtAQeDIOtHRbfK_t_GC9O9PV2EbE7PjZxNHTyvqqwhd2J7e1R9yZhY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfiYho_PYWodhtLQHSq6-vc-LEA_ZFa34cg1Ul_XyDPBSg&oe=692E93BA)

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vsm_R_p-0R8Q7kNvwHG3iDc&_nc_oc=Adnd2vxJO1s4fRcxhuqQJBq14HMZ_fblJtuwn645Dxsq5SzrF2YaQbYiojOWGyo7PME&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh7Jkj51JgVorVqBI2DUXd_-3S76gKH_3cgkIsc6FQiNQ&oe=692EC64E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cD_kzwJQ71YQ7kNvwG8ZlUN&_nc_oc=Adnrb1C0Xab7iIDVabt-QaJkSbrvp0BNcyvDUzsd1zfMPJo_cB200ITSvOZ0WekAwu4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfjQzrXeV1Gr7tvU7wAMNQ2L3jHu42X3OkdaVAaQqdVN8g&oe=692EA7B9)
- Write your script in your external editor.

  ![A new script](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482979187_673266615211293_5554301202913487763_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HbG7m7lhPAsQ7kNvwH6GfR8&_nc_oc=Adk9gG8KGsUScL0cYb6CqY40v93hZeqbpFetfvIousfSYKzSekGQFZknPTEOWHgu9FM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh8tFbatS2nSyOcp1dCk4E-reiKyJ3kG15M0VdRITzzjw&oe=692EB7C8)

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vsm_R_p-0R8Q7kNvwHG3iDc&_nc_oc=Adnd2vxJO1s4fRcxhuqQJBq14HMZ_fblJtuwn645Dxsq5SzrF2YaQbYiojOWGyo7PME&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh7Jkj51JgVorVqBI2DUXd_-3S76gKH_3cgkIsc6FQiNQ&oe=692EC64E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cD_kzwJQ71YQ7kNvwG8ZlUN&_nc_oc=Adnrb1C0Xab7iIDVabt-QaJkSbrvp0BNcyvDUzsd1zfMPJo_cB200ITSvOZ0WekAwu4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfjQzrXeV1Gr7tvU7wAMNQ2L3jHu42X3OkdaVAaQqdVN8g&oe=692EA7B9)
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

![An error symbol next to a flawed script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484074913_673266631877958_5898024896263246539_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fpb0HDWmYqYQ7kNvwGEv_cA&_nc_oc=AdlliVhpWyhKG9hyOXL9MtSsA5LLcCf88muPFnCIDhyS6vt9bgl_YeXFTzFRudJdRPA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_AfhkSrRVmyOK9o01Ye9p6nc_-hGgjTmrYH__wRj7YHECAA&oe=692E913C)

You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vsm_R_p-0R8Q7kNvwHG3iDc&_nc_oc=Adnd2vxJO1s4fRcxhuqQJBq14HMZ_fblJtuwn645Dxsq5SzrF2YaQbYiojOWGyo7PME&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh7Jkj51JgVorVqBI2DUXd_-3S76gKH_3cgkIsc6FQiNQ&oe=692EC64E)
- Select **Recompile**.

  ![Selecting the Recompile option](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484176691_673266581877963_3979474993532795633_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=5cKnWEe4LrcQ7kNvwEh5xmy&_nc_oc=AdmusZJcztIL5JEW1bPbRdbVC8zsReb9xZZSJxMTB5U-7U03-fm1bV1UTwYNPk-xqF4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh1ahwNmqdMkZGdU29_4-mRO877tnoloQ4T71LeRw5N6g&oe=692EBA59)

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vsm_R_p-0R8Q7kNvwHG3iDc&_nc_oc=Adnd2vxJO1s4fRcxhuqQJBq14HMZ_fblJtuwn645Dxsq5SzrF2YaQbYiojOWGyo7PME&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh7Jkj51JgVorVqBI2DUXd_-3S76gKH_3cgkIsc6FQiNQ&oe=692EC64E)
- Select **Rename**.

  ![Selecting the rename option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482989027_673266625211292_1290338324610601907_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=B0BCuA1A6PkQ7kNvwFuch1o&_nc_oc=Adk1zcrd-bLKXO8j7BsQuWdoKb7iiqHHti3PmsCd4dFZSf5WNze1ou2NvmfWKM-gXFc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afi6dr2KYGdBsBPZqe6pp9YDi0g6pZ2UYvYKkzk_QRJCjg&oe=692EC1B2)
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=vsm_R_p-0R8Q7kNvwHG3iDc&_nc_oc=Adnd2vxJO1s4fRcxhuqQJBq14HMZ_fblJtuwn645Dxsq5SzrF2YaQbYiojOWGyo7PME&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afh7Jkj51JgVorVqBI2DUXd_-3S76gKH_3cgkIsc6FQiNQ&oe=692EC64E)
- Select **Delete**.

  ![Selecting the Delete option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484139456_673266605211294_8095133706982699723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_MW0b9EK0XIQ7kNvwGdEnPz&_nc_oc=Adk32GFjJQm-SdlozM-oEQS6kyrEqUbmPiMY2MT8C6qAWk1oHwnmAF1krr3v2HJ7GUU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=23mjaigfwChAE0JMeclcGw&oh=00_Afj-1Tca-SKftiJ_5nnfEScW4xZyHkt6qu_Wpx3v-CBULA&oe=692EB7AF)
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