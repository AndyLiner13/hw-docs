Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/if-vs-code-cant-find-a-v2-module

# If VS Code can’t find a V2 module

VS Code ships with a recent stable version of the TypeScript transpiler. By default, VS Code uses this version to provide IntelliSense in your workspace. The workspace version of TypeScript is independent of the version of TypeScript that you use to compile your TypeScript files.

In Meta Horizon Worlds development, you need to change the version of TypeScript if VS Code can’t locate a V2 Meta Horizon Worlds library module when you include it. For example:

![Changing the version of Typescript](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452846047_512510441286912_3891839820288091188_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=QubDcpJx5KAQ7kNvwHyUmQv&_nc_oc=AdmsiZ4zb1ZDd_Fmj7WEENkWgMCvnC-R5usDVh49wvFNwFXRw-fb8uGwwEAVvTVVqOHoHHwv8ty5qDWaQVq69A1h&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=iX1pSh29lL45MFSXmdQzDA&oh=00_AfkEXoamNa7KKMgxZnxIEP3vgcMRVS4yhbNJfBitlhlL4A&oe=69556F1A)

## How to use the workspace version of TypeScript

If VS Code can’t locate a V2 Meta Horizon Worlds library module, you need to configure VS Code to use the workspace version of TypeScript. You should use TypeScript v4.7.4 for all versions of the Meta Horizon Worlds TypeScript API.

- Open one of the script files from your project in VS Code. Notice the word “TypeScript” in the bottom right part of the screen. Beside it is the version number.

![The Typescript version number](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452672478_512510437953579_5274654559469467809_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=SiO_QdHaHKwQ7kNvwF1eRpt&_nc_oc=AdmHXamJHuaxsa8cFlpIV9M_4eo32s1eDMd1w6A1xIs2ahjRBvKfcFFtBG0PvPRl6Kf_EUil3GSG8N9GdmhiMOkj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=iX1pSh29lL45MFSXmdQzDA&oh=00_Afk3fBVDtFuGl8omUKiFXaESIZwXN0xq8DXOndyP-2djBA&oe=69557D43)

- Click on the version number. A fly-out menu appears at the top of the screen.

![Version number menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863904_512510491286907_3447494278802419232_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q7hhwB5erRcQ7kNvwEyLX0l&_nc_oc=AdkzhmtINZjYE6TcjdEyw26VRZ4vWf5PzGFKAxS31Tw_No9r0GVu9f1K5uVrsShZX2cdwYObz8pzsVcnFatm2GW6&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=iX1pSh29lL45MFSXmdQzDA&oh=00_Afm4OFFIWI_MRvq6hCZ6t5ofbC_y5FbGfQ9iaxQmBdfxlw&oe=69557F71)

- Select the option **Use Workspace Version**. This configures VS Code to use version 4.7.4.

You should now stop getting the “Can’t find module” error.

**Note**: For more information about TypeScript versions, see VS Code’s documentation on [Using newer TypeScript versions](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions).