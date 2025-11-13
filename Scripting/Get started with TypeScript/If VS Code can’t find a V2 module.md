Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/if-vs-code-cant-find-a-v2-module

Learn

# If VS Code can’t find a V2 module

VS Code ships with a recent stable version of the TypeScript transpiler. By default, VS Code uses this version to provide IntelliSense in your workspace. The workspace version of TypeScript is independent of the version of TypeScript that you use to compile your TypeScript files.

In Meta Horizon Worlds development, you need to change the version of TypeScript if VS Code can’t locate a V2 Meta Horizon Worlds library module when you include it. For example:

![Changing the version of Typescript](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452846047_512510441286912_3891839820288091188_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=3JIfrvcAtlcQ7kNvwGdkrjW&_nc_oc=Adk95VbfBXnOU2tn1pwGjF9hoEeiGKmac-rWaWC8q8zwXcH23RWpa19x5GTCWNytlCs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=NakutgK9LomNfR4Qqwdv0Q&oh=00_AfiJxVqIpvuRj1zrq7HfoTy48K62rJEwpkNyRspmqdRazw&oe=692FA41A)

## How to use the workspace version of TypeScript

If VS Code can’t locate a V2 Meta Horizon Worlds library module, you need to configure VS Code to use the workspace version of TypeScript. You should use TypeScript v4.7.4 for all versions of the Meta Horizon Worlds TypeScript API.

- Open one of the script files from your project in VS Code. Notice the word “TypeScript” in the bottom right part of the screen. Beside it is the version number.

![The Typescript version number](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452672478_512510437953579_5274654559469467809_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=iauLxQmWEJwQ7kNvwFl44Mr&_nc_oc=Adm_TAcS7BZNXpN7sWitYbM629h86m7SAsGuVF0c-QD4VBaawcySHl4kSFz4RRoqPdQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NakutgK9LomNfR4Qqwdv0Q&oh=00_AfiP4zfqg75rsMv-gZx9DuXTcAFtPgzdmP58g_O0V82WRQ&oe=692FB243)

- Click on the version number. A fly-out menu appears at the top of the screen.

![Version number menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863904_512510491286907_3447494278802419232_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=HMX7RWI0YzIQ7kNvwHIDc2G&_nc_oc=AdnPnAHYkah__KHcjzvh6nfgHzIG7Y6AXSYpg7mM_RhdawG0kC1q2cMRHS-e1nV_kEU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=NakutgK9LomNfR4Qqwdv0Q&oh=00_AfhAPfYCkckyO4MVq5wFtaQKm6E-A8W6LYXqTHgzuFwvqg&oe=692FB471)

- Select the option **Use Workspace Version**. This configures VS Code to use version 4.7.4.

You should now stop getting the “Can’t find module” error.

**Note**: For more information about TypeScript versions, see VS Code’s documentation on [Using newer TypeScript versions](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions).