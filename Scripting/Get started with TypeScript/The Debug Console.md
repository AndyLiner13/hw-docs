Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/the-debug-console

# The Debug Console

The Debug Console Gizmo provides access to debug console logs. It allows you to start, stop, and reset worlds while you are in edit mode or visit mode.

## Features

The Debug Console gizmo enables you to view the debug logs in a world while in preview or visit mode. This can be helpful when debugging in-world behavior because you can stop, start, and reset the world from this gizmo. Details include:

* Stopping the world stops all currently executing scripts.
* Starting continues these scripts.
* Resetting restarts all scripts and resets dynamic objects to their original state.
* In visit mode, the Debug Console is only visible to world collaborators.
  + This provides an effective way for developers to view world behavior while others enjoy the world.
  + Multiple Debug Consoles can be placed in a world, and all of them will receive the same logs.
  + Logs can be cleared by pressing the **Clear** button or searched by entering search terms in the search field.

![The debug console as appears in VR](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/500046798_723434003527887_5773066203768188775_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=YzdHZWzEvWwQ7kNvwHMAxmU&_nc_oc=Admi_tDTMwf5nXJZ0MZRSr2cOC1E-ck8f9TNJVF7xrQ2VYyhOF1idbglozVx3j11wI4u62rds-jEVMe1s3Ua3ZxQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=L7JmYKFdTbio4wQgDKFhaw&oh=00_AfkLA_PvyGSzeyd3F8HPpgenBFyUqRIeM-bELw_Y1oIByQ&oe=695597AD)

## Controlling Visibility of the Debug Console

**Setting Visibility**

In the Properties panel for a Debug Console, you can set the visibility of the console in the Visibility dropdown. Options are:

* **Edit Mode Only**
* Not visible in preview mode or the published world
* **Edit and Preview Mode**
* Not visible in the published world
* **In Published World**
* Visible in edit mode, preview mode, and published mode

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531258_512535211284435_8472030137094230274_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=aA6eAvanIrYQ7kNvwFX4oyr&_nc_oc=AdmlSMwXWLhpc4jF9LwgaXgInWFCv8UflbZhLPySWQarSokuQ6iEbHpNlLPcuvlDUebyMJuolOhpjARmBrzKETFs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=L7JmYKFdTbio4wQgDKFhaw&oh=00_AflmiXb771X2pxBn99MxaBxkNk0EIEdiXulJbi9j24udMg&oe=69559041)

The Visibility setting applies to the world owner, editors, and testers. If you configure a Debug Console with the “In Published World” setting, all collaborators will be able to see it. As a result, at no time will a regular world visitor see the console.

**NOTE:** It’s possible to hide the console using the visibility code block, but the code block can’t force the Debug Console to appear if it would otherwise be hidden by the console’s Properties or the user’s role.

## Known Issues / Limitations

* The server is often started several seconds before any clients join, so logs from start() methods in scripts might not show up for these clients.