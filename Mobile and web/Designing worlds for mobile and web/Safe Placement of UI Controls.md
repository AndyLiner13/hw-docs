Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557931283_835743075630312_7296711773413738046_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=XxgJydkQVIcQ7kNvwFOm_Gu&_nc_oc=Adm7i7T4EvWc3EnRxYZfUt2ZY5-aNT_5GP_ELDdV3TegHwLPBjhRF10mT-rZoWfkxqzEPCaQyihfgeX2VftpzKqo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfnaKXiOEBEqeY9uKpM_7dLnyx6E0_JlpzIagNPPcAfgZg&oe=69558DC2)*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615758_512532801284676_8886395584801346512_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=p2ERKA176tMQ7kNvwHQAIt-&_nc_oc=AdljEV_-82kaZE1n_mwrbg0u8fkqGXOJHkxRAqEBu6WusXNCr6YhRDWckorHTrks6HHQCHe_uHovcflcF1TVq4mj&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AflTp3_RAPC2IHaX6JHvGSVIZPE85udpFvSpyWnDubry9A&oe=69558BC4) Unobstructed.
* ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452883040_512532784618011_112216473924849842_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Lj5etPd260Q7kNvwEUt-wV&_nc_oc=AdlScoUvtsKlhUps3_BhjIO6cjHn4G5Imt-JIrbEhSmWj1GJ3s7COJVKcbH9kZVeZyKDbY3Q3Ky3-hrpDGJKDwnS&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfmF3cwvzSnXphL31LZVE8MspSC7JfPRb29sEizMNbtgtA&oe=695593B3) Potentially obstructed.
* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512532781284678_1258298437483562209_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=82kYufqXWLsQ7kNvwES1Hww&_nc_oc=AdnwSa34JhVpcccUC4wS12at7RYWXSUa3_7mckj-gxYoqV1bwmsFUNb50qYqbzf9kqJsIIPssTJGE2fUjk2yXjwb&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfnhPgxfVxgvpQtMzo3iZgaySd5RuObTyoSYCAjAj9j0KA&oe=6955906F) Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528040520_782028431001777_6820185301692830714_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z7V3D63spDYQ7kNvwHwJUb2&_nc_oc=Adkrjfx-8s7rR4A88BqJP17_IFSmMktFi6fAGMeSSOFNMmY6Wr3ttjHIUMnTHJ-gMbOdQYEnm9pKCjGEv0MEdUHX&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AflGTObg8gGcvtyYywjFbUIyWohu5zM-vlPyZZtbhq5VqQ&oe=69559EF7)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/527979922_782028447668442_7244985344024777297_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=wIvHRyUXhjkQ7kNvwHonqR6&_nc_oc=AdnV6f7MTY7DRIR3OhLSbEh6yBxeyPV0b8OBfWpyAJlHQOHZK1LlCBAlS-XOcMS7ILMFbEQLzG2hBCCSygKC1MSr&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfmOo9K8g6sLBXjkMc_R8FD4g3UHJQMV9O0Q7jAz2PwCoA&oe=69558919)*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/526964709_782028444335109_6196025312724401057_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=6MmyXoju8OUQ7kNvwEvo5gU&_nc_oc=AdmSCZAoOu3PEcM3P1Z1pNzvd5ReQq31wcpobW7UJsrUjeXYTqo0lQAsPuk5UFqaq3oSr0sOLYDL2QEe3nINv_Yg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_Afl8UBukE5SSYxq8bxWUuoOrHF7bk9FSiCwewOm-mfmUVw&oe=6955930B)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528034865_782028441001776_5691077705260993484_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RIJI6cCeiNsQ7kNvwGErjtG&_nc_oc=AdkFqdLxeLzmM1KdOF8ESspIN-7IrD9OC1JNkwY9U_RKZBiyuXZ-mIXvnLugKvSNCG-d2kpsrbJzuHsoNX1_tYWY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfnHvvnBUWwqImA1mmdAIfFROXthsUbRXxS6ABwfE1S63w&oe=69558C76)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527981935_782028451001775_205883410573939696_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=TXnFm0I94UgQ7kNvwGbp722&_nc_oc=Adkqus1kANl1vfSPvmTVUfX-QWt8KyficFfnLPQerp88kCiBTtrWbVwX3MqpUogGX1_KG41m0Q3LfQxBFGuEryC1&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfmNifn4U5cHumsiBT8uogul1mpFbby6UffKSW12n_jjuw&oe=69558B93)

## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/526991907_782028427668444_6750170821704673280_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=SSOOhzm9mCsQ7kNvwGvJDCp&_nc_oc=AdmiBAA8AUImu0WI0IY3gNVqPDyheFk_uQKfvr3zC3t9HC2qSGD0GZwt_nmBsIDhzR9g5_4xrdE9w18azdRNszFD&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfkY3MhTrcbpv8BtFNXIW1qw865VOiZ_eTVul-tQNUVVwg&oe=69559789)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528230183_782028424335111_3068904171470470838_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=zThKD5WhYbwQ7kNvwHyczPV&_nc_oc=AdkCUUIZwjCeSmyTCA2mMbTVAHO4K4o2OxRvfYbbRA3ZU3pxXXOO5-dZ-HGdO3c3KI3DuT1hXMYDBgWE2pDbNzTa&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AfkI84O0dOgH-75rTgfkCkPY4LEuB6IWnRpwXcp4RunafA&oe=695591A8)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527267521_782028434335110_3806974184132376722_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=SoGsYPn545gQ7kNvwGt7_E_&_nc_oc=Adl4FWLWx53430MSP5vopqkpm5fRfVvSVD6OIEthLKFWXExr9lEGBiWmzlaZV3ADBS4kksl2obUjNSXggx2pL3H8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kN6vmXF-fQD0h96-WxEUBQ&oh=00_AflOf1fHAcaSPsf1bF4yHHxWvH7X9EVC2I8pKA0AmqsHHg&oe=69558BEC)*Desktop (@1920x1080)*