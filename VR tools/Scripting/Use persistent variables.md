Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/scripting/use-persistent-variables

# Use persistent variables

Persistent Variables and Variable Groups allow you to store player-specific numeric data across visits to your worlds. These tools can be used to give your players a sense of progression because the stored data persists across sessions. Common examples of persistent variables are score, level, and experience.

Note

The following instructions are specific to VR creation. Information on using persistent variables in the desktop editor can be found [here](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/persistent-variables-v2#known-issues-and-limitations).

## Create a variable group

To start using persistent variables in your worlds, you’ll need to create a variable group, which is a container for your persistent variables.

- From the creation menu, select **Systems**.
- Select **Variable Groups**, then select **Added to World** to manage your variable groups.
- Select **Create Variable Group**.
- Enter the name of your variable and a description.
- Select the toggle next to **Add to this world** and select **Create**.

In order to use the persistent variables from a variable group in any given world, the variable group must be added to the world. Each world can have up to six variable groups added to it, and each variable group can be added to multiple worlds.

# Create a persistent variable

When you’ve created a variable group, you can start adding persistent variables to it.

- Select the variable group you created, then select **Create Variable** to name a variable and save it to this variable group.
- Any persistent variables you create inside this variable group will be available to use in all your worlds added to the variable group.

## Use persistent variables

When you’ve created persistent variables inside a variable group and added your world to it, you can begin using them inside Code Blocks scripts. Specifically, you can use them with the **set persistent variable** to and **get persistent variable** to Code Blocks.

For each of these blocks, you can press on **Select persistent variable** to choose a variable from one of the variable groups attached to your world. These blocks will allow you to read from stored values for a persistent variable for any given player, and also set these values as you like. In the images, we try to increment the value of level inside variable group v1 every time a player enters the world.

## Manage variable groups and persistent variables

You can take several other actions on Variable Groups as well, such as adding to world, removing from world, editing the name or description, and deleting the variable group. Note that if you change the name of a variable group, you would need to update all Code Blocks using persistent variables from that variable group in order to refer to the newly named variable group.

Similarly, you can also take actions on any Persistent Variables inside a Variable Group, such as editing its name or deleting it. Similar to variable groups, if you change the name of a persistent variable, you would need to update all Code Blocks using that persistent variable in order to refer to the newly named variable.

## Sharing variable groups with other creators

You can also share variable groups with creators. This enables other creators to use your variable groups and persistent variables in their worlds. For any given variable group, select **Sharing permissions** to control who this variable group is shared with. Note that sharing a variable group with another creator only allows them to use it in their worlds. They cannot edit the variable group or add persistent variables to it.

You can view variable groups that have been shared with you under the **Shared With me** tab.