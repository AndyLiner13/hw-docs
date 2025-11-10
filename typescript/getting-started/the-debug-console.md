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

![The debug console as appears in VR](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/500046798_723434003527887_5773066203768188775_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=rt-vVT95rTIQ7kNvwEBu0Ud&_nc_oc=Adn_xCpLioYguJsb1dbM1VwTkdxxDGPOFFD5kp7vgeCvTWBLofiCW_drSSDjSkw-ceY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jZq3j2Gt-sFSljIiD2cimg&oh=00_AfiHB01NNjdPuqnL8E4x2UinzBPXYZe7adeIj6yLAYfuAQ&oe=692C106D)

## Controlling Visibility of the Debug Console

**Setting Visibility**

In the Properties panel for a Debug Console, you can set the visibility of the console in the Visibility dropdown. Options are:

* **Edit Mode Only**
* Not visible in preview mode or the published world
* **Edit and Preview Mode**
* Not visible in the published world
* **In Published World**
* Visible in edit mode, preview mode, and published mode

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452531258_512535211284435_8472030137094230274_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=l3KRD7uNHcAQ7kNvwHlIyHe&_nc_oc=AdkxybsrtOf0PWlZ8ZlZs0a919BxJV6mw2fslqTJqgFsPRrtfLqCj5rQttZTXZUwliU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=jZq3j2Gt-sFSljIiD2cimg&oh=00_Afhj3-g7REZ7lrHIRCpX3H5gA4VyieqNwiyU3PHrPlljZg&oe=692C0901)

The Visibility setting applies to the world owner, editors, and testers. If you configure a Debug Console with the “In Published World” setting, all collaborators will be able to see it. As a result, at no time will a regular world visitor see the console.

**NOTE:** It’s possible to hide the console using the visibility code block, but the code block can’t force the Debug Console to appear if it would otherwise be hidden by the console’s Properties or the user’s role.

## Known Issues / Limitations

* The server is often started several seconds before any clients join, so logs from start() methods in scripts might not show up for these clients.