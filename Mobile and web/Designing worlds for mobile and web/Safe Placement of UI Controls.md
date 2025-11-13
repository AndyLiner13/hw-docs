Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557931283_835743075630312_7296711773413738046_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=aI3M71n4jo0Q7kNvwGrRRqT&_nc_oc=AdkmDCXsSzv0LqOTe89XtnegEIs8dJX1znTF705WGxavnXSwc5HdMjRsRg8cCwhXROA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfhctEw4eOQOdeSIBK9GsrsvSGJff-o8lIFop2F-xxFEdA&oe=692FC2C2)*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615758_512532801284676_8886395584801346512_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=NmAyh_KJar0Q7kNvwF-gKSv&_nc_oc=AdkV3O7hO0USUBXWZwiW_kQx7dMkXq9kjZCDatapQGLihXDhz_zvH8DMTpeqavj0LIM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfjgyxwRPzPF92-BkStVWliNh_Y3PEJJ-N2Zq58NlZfkaA&oe=692FC0C4) Unobstructed.
* ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452883040_512532784618011_112216473924849842_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pl-PbkEq70QQ7kNvwGxwm1D&_nc_oc=Adk0Lltxy1T_NfMBWv80zSUmbj1VcWuqE35IX2kJucZLyJkJ3G3gbQrBTLCtrOrRWv0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfjnXtIM8STiM3b7Vdrf2Px_1WVN89ZBTv_v2ol_spu-wA&oe=692FC8B3) Potentially obstructed.
* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512532781284678_1258298437483562209_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=qQTVL6CddToQ7kNvwGxD7Q1&_nc_oc=AdkYYAkiruxwnrOjcBYMWERiecXOYTIPB4KpkyBCJ0W9jiKX9cJODx4uYBmhq8Y3QKs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_Afj54l8nlm_cQu2Ak-gV3DoZeZim_m-CxpkT2ED7JrO6ZA&oe=692FC56F) Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528040520_782028431001777_6820185301692830714_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=bepd6yQB34QQ7kNvwFJUzh0&_nc_oc=Adnvj1AZdX0g2jdAzEukj3V9Nyo1aNtjXAidlHH2rz-pGZ4OYtqUEm5iJ94fUqIgzP0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfjlTGerzQp5WBg2Z0f-T8w-y7Mu_-zPDAMA4hhvejUCEA&oe=692F9BB7)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/527979922_782028447668442_7244985344024777297_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=kZIcTilNibQQ7kNvwH-NVyc&_nc_oc=AdlGiWJb9kNX4vH1JqPwdDckpCGwNySV2qMJ3Veg5dJsrHToCzDQgyjz9ECOTeN-2Vo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfgNupdFsyq_09sfgf5Z1I18szXMBQBMG6RBcxwCPYl4zg&oe=692FBE19)*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/526964709_782028444335109_6196025312724401057_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YQwGffD0UEMQ7kNvwFtlQnb&_nc_oc=Admwqx403DaL0SIw14bGy7qRWoUlmdf7PMZYHhjkCqp-USCS68T8HgAIotrdD3J8fRs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfiwFpyxLFQfZvFltIg5mIvyx5g6h89YgkTE5jRh21jnFg&oe=692FC80B)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528034865_782028441001776_5691077705260993484_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=pEKrZpVNJpoQ7kNvwFil168&_nc_oc=AdkqlXN6m0oM5zG_VL6vwa9BHEW44PEWWdpIqVevqCFfAe1W4zJkWChPM2V6xZ60B34&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_Afg_-x993iGVEzIBwqAo8m9bdChw-dEjZedmgoc6wD7jWg&oe=692FC176)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527981935_782028451001775_205883410573939696_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=2EIafSCpJo0Q7kNvwEQ1DTP&_nc_oc=AdkOqmLRaL8tmOsXIKJjRNo6LvwqDm6CW_p6mtAbFagyQX0gyP9xkIzH-mjy4-mVOkQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_Afi1DGPTwsbMHFE9AkWpQvV265wKVIDxZV58mphPMUNnMg&oe=692FC093)

## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/526991907_782028427668444_6750170821704673280_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=H0f8gu48oaIQ7kNvwEkhI3j&_nc_oc=AdkehBer8_VfY5O7nHvSFZVWENnWjGE6B9yeATV6OzI79pjWU2g6hRMNEL0ckvuGd7w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfgoyFvNkymDrxL0NXCIc9mr8ezDfIzTSTubNrZOzR7V5Q&oe=692FCC89)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528230183_782028424335111_3068904171470470838_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=EGv8GPNNK-MQ7kNvwEx7HAU&_nc_oc=AdkKIMV22zBFlHBdLCMJPxGqvgkLW3Hksa2cv0mKxTE1XZrC9eCflWgsDdp7YEAI9sk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_AfjnmHhol-kwLG9gxNerwJz2Uc_5zQyS78_jEX8KTdkI2Q&oe=692FC6A8)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527267521_782028434335110_3806974184132376722_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=ItsHZqvKPjUQ7kNvwE6T7XY&_nc_oc=AdkU8ECkZNr5RyH9nsqNG2TxvRGuYtfeQNAGuv_vIYlWVvSdC0RC7-6QPOzhvtWi8dw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=sZMXNVfT1yu6OUmZvucNTg&oh=00_Afjt7sAaTs29HKXjjutXC93PmE_IL4nnIRYrSLRtvY35fA&oe=692FC0EC)*Desktop (@1920x1080)*