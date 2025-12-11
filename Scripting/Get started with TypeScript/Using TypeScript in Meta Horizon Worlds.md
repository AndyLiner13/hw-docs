Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/using-typescript-in-horizon-worlds

# Using TypeScript in Meta Horizon Worlds

The following topics explain some of the basics about using TypeScript in Meta Horizon Worlds. The following operations may also be performed by opening the **Properties** panel and clicking the **Attach script** button.

## Create a new script

- Open the desktop editor and click **Scripts**.

  ![The Scripts Panel dropdown](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/585631442_869065675631385_1991915292221211359_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=LOC8EOjgh3EQ7kNvwGdG8tM&_nc_oc=AdkgL_xol4gtdypMpN39PGxaC-3Wvq97OX-FEf7q-C_vuXaG2CdElHkSeIKBbfqH6ihPjPtRiHN4csksoNdlgcG-&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfkGfvfi3PYgmeKBGaxmd6flVgE7DB6K3ciCItDjaRLPOg&oe=6955747C)
- Click **Create new script**.

  **Note**: This button is only visible if you have no scripts created for this world.

  ![Scripts panel showing no scripts](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484802329_673266578544630_8504929731369833307_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=lh3DPvhO-RcQ7kNvwEyy9Ol&_nc_oc=AdkBWMmWEb6BWd8dH9mrWU4rQpgoCnM5JTvhtc3fh9IN0LRklLbYdh6yHaMRZZyFKCqZKTO34lKJVHvrtpZDWUrl&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfkwC1saW9iZtvEJboy5UIi0N9DJp8njTZrjgJK_xRIrwQ&oe=6955A049)

  If you already have scripts created, you can click the **Create new script** icon to create a new script.

  ![The Create New Script icon in the Scripts panel](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/483926645_673266588544629_7561383049359713985_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=4oENosOY-iAQ7kNvwEJlOd4&_nc_oc=AdkPJMH4MDIqTe7BUoqDOUWJ2QTmV3wv2u8uuyghUh0LETOp0nxtw-D-pdNMmJQPhT-P_qtVjpGSnWA4hg-3eg8K&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfnLRWN_7jGtXW91n2ZF-hYiztdMQ0K3puqfxPUOdEORfQ&oe=69557AA6)
- Enter a name for your new script.

  ![Input field for script names](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484444051_673266595211295_4649633267835532323_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ysTHJB42X9sQ7kNvwEjGBWM&_nc_oc=AdndY5km3x8eNKJvusCoivhyLajJLkrOu9pVV6V1e3vLKnhiVfgzKqnFTqy8I9K1OGDzlI3Z6g8HzAMuYOLWUEB6&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfnPvjjmnpvRuV1A-9aV9SzmmlywSrEfgkamL7-vTaDYfQ&oe=695577FA)

  The new script will appear in the scripts list, first with the action **compiling** next to it, and then **compiled**.
- Hover over your script item, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=brzUhbx1sf0Q7kNvwEdeVm4&_nc_oc=AdnT7CBouftzWT_K_9B4mdOYQdOD43V78xQ7L1dnIiwrAFFY1WCA7WST-T-6a6VfxpGTh8JnH_mWvnUnIoUGVJno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afmbuu_SZmosoSzWmaO1F8lidsPCJDuOUPTk_C1m5fbV9w&oe=6955724E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=G7j1db9wz6AQ7kNvwHt74g0&_nc_oc=Adnickf6WNQRuv8Lu9Gg1jb8PWgR8Nw633rcIjFKSx1Q8svIVd6AQSpLHkV9c32TazlS8p2OI-bAp3GhVJMJrVp_&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfkPrxNI3YQ_3BKQHz_dQbyDbghMYSb1Wjsuglvo8lfcfw&oe=69558BF9)
- Write your script in your external editor.

  ![A new script](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482979187_673266615211293_5554301202913487763_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=tTmFIOKm7wUQ7kNvwEiuVHG&_nc_oc=AdlpXraG7KTpurDRQOJFAbR4a1NrgwptYNO5zDdeEC_xMI4u6c-gq5dudBP45QtaZ58hJcKpZ2YOinPHztM0fQB_&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afm6_rjD38gjmL77sCw-dRtlBtgecBW6EHxqOTllK-0DXA&oe=69559C08)

  When VS Code opens, your new script is ready for writing. It will automatically include a default class definition and multiple statements.

**Note**: The first statement in your script imports the required Meta Horizon worlds module. For example: `import { PropTypes } from 'horizon/core';`

## Edit an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=brzUhbx1sf0Q7kNvwEdeVm4&_nc_oc=AdnT7CBouftzWT_K_9B4mdOYQdOD43V78xQ7L1dnIiwrAFFY1WCA7WST-T-6a6VfxpGTh8JnH_mWvnUnIoUGVJno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afmbuu_SZmosoSzWmaO1F8lidsPCJDuOUPTk_C1m5fbV9w&oe=6955724E)
- Select **Open in External Editor**.

  ![Opening the External Editor](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482980197_673266618544626_7846625789842542784_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=G7j1db9wz6AQ7kNvwHt74g0&_nc_oc=Adnickf6WNQRuv8Lu9Gg1jb8PWgR8Nw633rcIjFKSx1Q8svIVd6AQSpLHkV9c32TazlS8p2OI-bAp3GhVJMJrVp_&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfkPrxNI3YQ_3BKQHz_dQbyDbghMYSb1Wjsuglvo8lfcfw&oe=69558BF9)
- Make your changes and save the file in your external editor.

Once your changes have been made and saved in your external editor, the desktop editor will attempt to compile them. If there are errors in your script, the compiling will not be successful and the script will display a red warning symbol:

![An error symbol next to a flawed script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484074913_673266631877958_5898024896263246539_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=_AYjujBVrKIQ7kNvwHJh176&_nc_oc=AdkZaLijzdoNINAZSfbFFaGDfzYPi_Ouiit3_u-VkSKdbClAUV8spxvDbHmjJtAUxcVDVfCOt53M6M58Sw4kWpy4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afn1Z2AADd_VsuLU29poQUlJwwjlIPUx7X_O8ets9muuoQ&oe=6955757C)

You can hover over the symbol to get a description of the error. To fix the error, open the script in the external editor again and make your changes.

## Recompile an existing script

**Note**: The desktop editor will automatically recompile a script once you’ve saved it in the external editor.

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=brzUhbx1sf0Q7kNvwEdeVm4&_nc_oc=AdnT7CBouftzWT_K_9B4mdOYQdOD43V78xQ7L1dnIiwrAFFY1WCA7WST-T-6a6VfxpGTh8JnH_mWvnUnIoUGVJno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afmbuu_SZmosoSzWmaO1F8lidsPCJDuOUPTk_C1m5fbV9w&oe=6955724E)
- Select **Recompile**.

  ![Selecting the Recompile option](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/484176691_673266581877963_3979474993532795633_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=BwRO6YWb0_sQ7kNvwHOU7n4&_nc_oc=AdlUmdhhokv0rcfxtK4zX-XAGYLyuuINlefahmyv55f05pUUKR0sHy9VG2jhKIBIUFPKpCcs_f4zQB2XUXBHfkyd&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Aflwf4hZylnGmneimZbQkG1jiQFGXcDJ71-6_tKdmg0Gaw&oe=69559E99)

## Rename an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=brzUhbx1sf0Q7kNvwEdeVm4&_nc_oc=AdnT7CBouftzWT_K_9B4mdOYQdOD43V78xQ7L1dnIiwrAFFY1WCA7WST-T-6a6VfxpGTh8JnH_mWvnUnIoUGVJno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afmbuu_SZmosoSzWmaO1F8lidsPCJDuOUPTk_C1m5fbV9w&oe=6955724E)
- Select **Rename**.

  ![Selecting the rename option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482989027_673266625211292_1290338324610601907_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LNnkew7EmnQQ7kNvwHkEPmS&_nc_oc=AdnWYj06pn5mZcU9AvrisrqP7TP2iESkPiJjxqpuxxnTYRuMbDKWZyeLDIqQw_KQiyqS0IZyHUjQaIz1cCfRT49m&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfmFuLNXEs-F135R9D626OWjU5JXraUNIJytYkI8a92ucA&oe=69556DB2)
- Make any name changes in the text box.
  **Note**: Changing the name of a script will only change the reference to it. It will not recompile the script.

## Delete an existing script

- Select the TypeScript file in your script library.
- Hover over the script file, and click the menu button.

  ![A vertical ellipsis menu next to the script](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482961547_673266611877960_3416918244632570124_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=brzUhbx1sf0Q7kNvwEdeVm4&_nc_oc=AdnT7CBouftzWT_K_9B4mdOYQdOD43V78xQ7L1dnIiwrAFFY1WCA7WST-T-6a6VfxpGTh8JnH_mWvnUnIoUGVJno&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_Afmbuu_SZmosoSzWmaO1F8lidsPCJDuOUPTk_C1m5fbV9w&oe=6955724E)
- Select **Delete**.

  ![Selecting the Delete option](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484139456_673266605211294_8095133706982699723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Reuyjol69Q8Q7kNvwHsjtOy&_nc_oc=AdmCHMXBkjayrKwaVzhEeXo-4ToBBZtW9WOvQXkg5qEFk1ZnwIJJSTVETe1VN6jFmI4Spel_yHOkK7c8ECfs3UVN&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y1tKGVqSoAWMevJSj9JnHg&oh=00_AfkrlvfAGuwXCN-Uacy5Xc3x4ZPNo-HmA5pxO0COjyb1rQ&oe=69559BEF)
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