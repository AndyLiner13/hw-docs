Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls

# Safe Placement of UI Controls

When designing your game’s user interface, consider both the gameplay controls and transient platform UI (such as notifications, NUX prompts, and world chat). These elements can partially or permanently obscure your interface.

The following illustration provides general guidance for where you can place UI, combining both desktop and mobile surfaces:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/557931283_835743075630312_7296711773413738046_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=iazpVI9sn90Q7kNvwHqfdih&_nc_oc=AdmMGg0WbpQUujX4ScoY2yTX9TPNZo-Qz2LexkLkvo4u8Knezb-7AlhbrW2J61J91og&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AflrNzrKqHE5bf4HlnE52t3AkP2J_5blmfWJFL_Sd1-xcw&oe=694BE2C2)*Mobile (@852x393 screen - iPhone 16)*

## Portrait orientation considerations

When designing for portrait orientation on mobile devices, the available screen space and UI placement considerations differ significantly from landscape mode. Portrait orientation typically provides different safe zones due to status bars, notches, and navigation areas.

When testing your world’s UI for portrait orientation:

- Use the [**Preview Configuration**](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options to ensure safe zones are kept clear to avoid overlapping UI.
- Consider how UI elements stack vertically rather than horizontally in portrait mode.
- Test with different device models to account for various screen aspect ratios and safe areas.

**Note:** You can configure different camera parameters for portrait and landscape orientations using the [spawn point gizmo](/hw-mcp-tools/documentation/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) to optimize the visual experience for each orientation.

* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615758_512532801284676_8886395584801346512_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z9KvVTR0hp0Q7kNvwFBtCMv&_nc_oc=AdneMuTZj3yNkxio2fgH1--QVcDpoMwJSlJccDicpo7xuwJjokro0reKMG5aWZmZqAA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfkSo2-ZT-MRcYQPPd1QEUoANz28uUaGwCwtK4r2gEqCug&oe=694BE0C4) Unobstructed.
* ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452883040_512532784618011_112216473924849842_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=mu1StMsY9_EQ7kNvwHKPaWJ&_nc_oc=Adm_idy8jp5w77t0ZX_KK2UgBQoiR3MoANxalI-AlzWpPYnoMGMhw7UlSJAkcQZWK94&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfkdGKCFzDSzva1y8UYZ1QMR0C59fW_9Tc8TaBhUjoJILA&oe=694BE8B3) Potentially obstructed.
* ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512532781284678_1258298437483562209_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=_p0ahi09EdsQ7kNvwHeUw4k&_nc_oc=AdlL_RIqKDF36uZ1kB3G4MT-pM6gYfLdAHZzEDmwtveHm4vEfRB1_2rwT-91QCDL3xU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfkMPdUCZREdfaspuksoLieQoeYWHbMc17Ab2uJfcpLZGA&oe=694BE56F) Permanently obstructed.

> **Note:** The amount of space will vary depending on the features your world has enabled, how you set up grabbables, and the user’s screen size.

Always test your world on both mobile and desktop, to check for any overlapping or obscured UI.

For a deeper look at why these regions, let’s take a look at each surface with all possible UI states enabled:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528040520_782028431001777_6820185301692830714_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sLP0Xxh0ssQQ7kNvwHpKb0o&_nc_oc=AdnzvSI2ZM_r1BGti5fqKwChabc3C4Na7QoiwsmZ3eRO-bJf725atca7rcnUSRX6awA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfmZ_CKs0ITY2O-K3s0TMXqxazqvMwo5sspQ2SgpiNWDxw&oe=694BBBB7)*Mobile (@852x393)*

Taking into account the typical usage percentage of each gameplay control and the frequency of each transient UI element, the per-surface safe zones look like this:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/527979922_782028447668442_7244985344024777297_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=dC7ib3iqukMQ7kNvwH27xU6&_nc_oc=AdnjE_tEvwg-0WNrXooGy2llEyQurTbRsg0slXQGsFrFr57y-rMvlIa2zgT55pYeZ2E&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AflTN4KloBSVgzwCEiZymg43hSjhAZSchjhcHe_4iwxtwA&oe=694BDE19)*Mobile (@852x393)*

## Mobile

The most important thing to note for mobile controls is that they are contextual. The number of on-screen buttons is determined by how you set up your grabbables.

For example, if you have a simple world with grabbables that have either one or no actions, then you’ll have more available UI space than a world using complex grabbables, custom input etc.

No held item:

Item with Primary & Secondary actions:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/526964709_782028444335109_6196025312724401057_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=knaC7SL0j18Q7kNvwGuDGN7&_nc_oc=Adnp1Fc5aHfIL4XAJCivrrh7WpqAzLJJHsgQW9xoB--C440ukIDBD_gyjYtDxaj0tRE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfkeQ2cD3CTTN-pXLT-HLVdrjcD3HwqsP4kgG_AHXaW4cQ&oe=694BE80B)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528034865_782028441001776_5691077705260993484_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=tPQxlWrJrAgQ7kNvwEFDjc5&_nc_oc=Adkl1luFhHyOM1Q8jPQ67lJx-PWkqm5sRaO_eSsfs6u4EGK9zLlk07SzZYfIeVlBIm8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_Afl29WcMDJYqBFhfCsDQAN50vXrGimDfNGXmwrAnvF6D-w&oe=694BE176)

Item with Primary, Secondary and Tertiary actions Holstering enabled on world Using Custom input:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527981935_782028451001775_205883410573939696_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=4wSoEd-LlEMQ7kNvwGcTVoM&_nc_oc=Adnzdvx1d952e02i3_RgLmOFcE2MjoSktH9qnPHhVYDeGWA6u03TRwbRPNAMsX1MOQw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_Afnb3zN-XLi0NZ3jngwJSEX_9fpCFWonzOM1Jyyu528Srg&oe=694BE093)

## Desktop

Desktop controls are also contextual, but they’re limited to a list anchored in the bottom right portion of the screen.

You generally have more space available on desktop, because the on-screen elements are confined to the top left, top right, and bottom right corners.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/526991907_782028427668444_6750170821704673280_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=2Qlt4cYMXeQQ7kNvwEx_Oy4&_nc_oc=AdkWE1_6ZxhMAxPI2-sIDhONMyQVp0WMIZLZ4ts6ubz1QZnOWX4uEsQzFso_ZxJUpUI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfmeWuTRaca7PWDYdE053iBc9lbgA0L-REhY0ei1qA6FKg&oe=694BB449)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/528230183_782028424335111_3068904171470470838_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=sdY0vhD2szYQ7kNvwF5b32F&_nc_oc=Adk6-dVp0pRWF5lreW-L-68hZJky1aZzlQ5-FssqUhUK1zR0h2c3wVV3I-rMSSd-bng&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AfnEwXtuC8NnK_bAiaVx1GsNb2mZczmVygLYF_YPIkd0NA&oe=694BE6A8)*Desktop (@1920x1080)*

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/527267521_782028434335110_3806974184132376722_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wu7UEjGyYHgQ7kNvwFIgTZf&_nc_oc=AdkxcCoRe83oWlfbychI2IUWNrq2_CIzb9C6zBV6sgJbbWiIZttkJQFYnZr2dxDkD1Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=70WifFt7K1vSn0XSi4k6bQ&oh=00_AflQJrhM2OuoFfTJSsN1_UbPBVoEwWYalawPl0EpEd3R0Q&oe=694BE0EC)*Desktop (@1920x1080)*