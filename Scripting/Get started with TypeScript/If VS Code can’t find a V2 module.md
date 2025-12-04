Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/if-vs-code-cant-find-a-v2-module

# If VS Code can’t find a V2 module

VS Code ships with a recent stable version of the TypeScript transpiler. By default, VS Code uses this version to provide IntelliSense in your workspace. The workspace version of TypeScript is independent of the version of TypeScript that you use to compile your TypeScript files.

In Meta Horizon Worlds development, you need to change the version of TypeScript if VS Code can’t locate a V2 Meta Horizon Worlds library module when you include it. For example:

![Changing the version of Typescript](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452846047_512510441286912_3891839820288091188_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=FKzqRtGaZ1MQ7kNvwGrkvdj&_nc_oc=AdkALdBHJ0AvOZaM_PenojnKEAtsmA6WPim4k0YoMlwFcANTScoqyDAGS21pC4g-j_Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=woTgdoVrTOhJ7EF2a7OJ4Q&oh=00_AfkevFzfR7-mM-zFKMYv7t0Wf644DZ_0F_Ol1nVunul58g&oe=694BC41A)

## How to use the workspace version of TypeScript

If VS Code can’t locate a V2 Meta Horizon Worlds library module, you need to configure VS Code to use the workspace version of TypeScript. You should use TypeScript v4.7.4 for all versions of the Meta Horizon Worlds TypeScript API.

- Open one of the script files from your project in VS Code. Notice the word “TypeScript” in the bottom right part of the screen. Beside it is the version number.

![The Typescript version number](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452672478_512510437953579_5274654559469467809_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ber2r5gMSrgQ7kNvwHHcqPZ&_nc_oc=Adnx5u2TEnwSCfLFnWQj4W3pFhSsEdWJZf6nGwBKPy5rsqLeiLjC1q5G8-LxBbN47B4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=woTgdoVrTOhJ7EF2a7OJ4Q&oh=00_AflYvZzHdIjf_9peOaP7KJtFJENiuus91E7u2K2o-9WGfg&oe=694BD243)

- Click on the version number. A fly-out menu appears at the top of the screen.

![Version number menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863904_512510491286907_3447494278802419232_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=rk3AW__tCokQ7kNvwHSLO9Z&_nc_oc=AdkciIR6uAt6DftZl9f1rFaosl2sw8160qy4pqxOANRRmqB8TQZDVH6AccHGEceqzVI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=woTgdoVrTOhJ7EF2a7OJ4Q&oh=00_AfmRbfnquyeBwRCrSydn-BCQR1KyQUyjniDsU1V5HMhU4g&oe=694BD471)

- Select the option **Use Workspace Version**. This configures VS Code to use version 4.7.4.

You should now stop getting the “Can’t find module” error.

**Note**: For more information about TypeScript versions, see VS Code’s documentation on [Using newer TypeScript versions](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions).