Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/adding-an-ide-to-desktop-editor

# Adding an IDE to the desktop editor

You will need an IDE to write your own scripts for Meta Horizon Worlds. By default, the desktop editor uses [Visual Studio Code](https://code.visualstudio.com/download), but if you want to use a different editor, you can configure it to use another IDE instead.

To configure the desktop editor, you need to make sure that you use version 4.7.4 of TypeScript. While you can use other versions of TypeScript, you may encounter issues when you use them with Meta Horizon Worlds APIs. If you don’t have TypeScript installed yet or you’re uncertain what version you’ve got, see [Managing Typescript](/horizon-worlds/learn/documentation/typescript/getting-started/managing-typescript/).

Whichever IDE you choose to use, you will need to configure the desktop editor to use it. Steps to do so can be found below:

* [Using VS Code with the desktop editor](#configure-the-desktop-editor-to-use-vs-code)
* [Using another third-party IDE with the desktop editor](#using-another-third-party-ide-with-the-desktop-editor)

## Using VS Code with the desktop editor

This section shows you how to set up Visual Studio Code (VS Code) for editing TypeScript scripts with the desktop editor.

**Configure the desktop editor to use VS Code**

- If it’s not already installed on your computer, install the latest version of VS Code from the [VS Code website](https://code.visualstudio.com/).
- Ensure that you have version 4.7.4 of TypeScript installed. For more information on doing this, see [Managing Typescript](/horizon-worlds/learn/documentation/typescript/getting-started/managing-typescript/).
- Note the file path to where VS Code is installed on your computer. You’ll need this in the following steps.
- Open the Meta Horizon Worlds desktop editor and then open the **Scripts** panel.

  ![The Scripts Panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482960441_673266571877964_3333170914423766306_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FanpDMJIwusQ7kNvwHcRsLi&_nc_oc=AdkeUa0CeKC5mGCnRRvu3WolEVuKvHM8dIt5J629_XsXP9CuPgRTEbe4CpiaP1I9p20&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=e5ThIoHMrQK-dHbcgPYgsg&oh=00_AfjdpOFuV3U6-JKDlCFhZymHZ2zkwV5jmaZfiIz_diptUg&oe=692BDD54)
- Click the gear-shaped icon to open **Settings**.

  ![The Scripts panel with mouse over Settings icon](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/484420212_673266585211296_193404919351644516_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=YzTcilnIZy4Q7kNvwHPCAys&_nc_oc=AdkvbQkfu9tYSGtam_ZOpDDFTxZNh7wC4iPjQWE3N-titPXzX5v0K-zBH2zh4vV75xY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=e5ThIoHMrQK-dHbcgPYgsg&oh=00_AfjC4eRwOqm1_tIYpSoOoIHRSliRlKGPdqJaFfSdkoetlQ&oe=692C0003)
- Next to **External Editor**, click **Select**.

  ![Script Settings dialog box](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482961279_673266621877959_676465629114660006_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=U1Z4hcL3WMcQ7kNvwFH5RRO&_nc_oc=AdlDxIRWCB0Zi8dZSAZvhQiR2yCsD5goXSidcVIiwQcADVV5cWUZlLsynvRIEtlP2LU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=e5ThIoHMrQK-dHbcgPYgsg&oh=00_AfiHiFOZNonb3hF5akZkePoVPgyt6Q-6vwyBls473aMbpg&oe=692C07E2)
- Paste the file path from Step 3 into the **File name** field and then click **Open**. You can also navigate to the EXE file for your IDE and then click **Open**.
- Click **Apply** to set VS Code as the external editor.

## Using another third-party IDE with the desktop editor

These section shows you how to set up the desktop editor to use an IDE other than VS Code as the default IDE.

- Ensure that you have version 4.7.4 of TypeScript installed. For more information on doing this, see [Managing Typescript](/horizon-worlds/learn/documentation/typescript/getting-started/managing-typescript/).
- If it’s not already installed on your computer, install the latest version of your third-party IDE.
- Note the file path to where the EXE file for your IDE is installed on your computer. You’ll need this in the following steps.
- Open the Meta Horizon Worlds desktop editor and then open the **Scripts** panel.

  ![The Scripts Panel dropdown](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482960441_673266571877964_3333170914423766306_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=FanpDMJIwusQ7kNvwHcRsLi&_nc_oc=AdkeUa0CeKC5mGCnRRvu3WolEVuKvHM8dIt5J629_XsXP9CuPgRTEbe4CpiaP1I9p20&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=e5ThIoHMrQK-dHbcgPYgsg&oh=00_AfjdpOFuV3U6-JKDlCFhZymHZ2zkwV5jmaZfiIz_diptUg&oe=692BDD54)
- Click the gear-shaped icon to open **Settings**.
- Next to **External Editor**, click **Select**.

  ![Script Settings dialog box](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/482961279_673266621877959_676465629114660006_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=U1Z4hcL3WMcQ7kNvwFH5RRO&_nc_oc=AdlDxIRWCB0Zi8dZSAZvhQiR2yCsD5goXSidcVIiwQcADVV5cWUZlLsynvRIEtlP2LU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=e5ThIoHMrQK-dHbcgPYgsg&oh=00_AfiHiFOZNonb3hF5akZkePoVPgyt6Q-6vwyBls473aMbpg&oe=692C07E2)
- Paste the file path from Step 3 into the **File name** field and then click **Open**. You can also navigate to the EXE file for your IDE and then click **Open**.
- Click **Apply** to set VS Code as the external editor.