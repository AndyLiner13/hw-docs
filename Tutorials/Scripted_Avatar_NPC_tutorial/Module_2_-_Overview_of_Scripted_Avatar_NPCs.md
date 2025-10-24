# Module 2 - Overview of Scripted Avatar NPCs

 Scripted Avatar NPCs can add life to your worlds! These characters are easy to
design and deploy, and their behaviors can be scripted through TypeScript. This
example world includes two example NPCs, including the code necessary to drive
the following features. For more information on the feature, see [Getting Started with Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs).  

## Visual Design

 Creating and revising the visual design of your NPC is easy through the web
interface integrated with the Desktop Editor.
• In the Desktop Editor, select Build menu > Gizmo. Search for `NPC`. Drag the NPC gizmo into your world. Note: If you do not have access to this gizmo, please contact your Meta POC.
• Position the gizmo in the desired location within your world.
• Select the gizmo. In the Properties panel, click Edit avatar.
 ![Image of the Village Elder NPC in Edit Mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480333795_656120583592563_4422663695424655297_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=MyNRbpmpHuUQ7kNvwGyC0nP&_nc_oc=Adl7gf61_hodhjWHAbKaAQKPwA0UzlaxlSeeiHMY0vUtYx6xw6WUiXYrKI0bYlqimEU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=z69rC7LdEQq1MUtddigbCw&oh=00_Afet3QQWsBiA0vTPmnkp...

 Tips:
• Start simple. You may need to scrap your work and restart multiple times.
• The NPC instance has a specific NPC ID, which is unique. Only the owner of the
NPC can modify the NPC. Designs cannot be shared across NPCs.
• If you're combining with voice, you may need to iterate on the character to
match the voice of the actor. Modifying the visual design may be easier than forcing
a bad performance out of your actor to match your character.
• You cannot modify the physics of the NPC at this time. So, be careful about
designing your character in such a way that the default movements and speed look
incorrect for the physical design. For example, in this tutorial world, the Village
Elder is heavy-set, yet he jumps just as well as the Traveling Merchant.

 Saving your designs: When you have finished designing your character:
• Click Done editing.
• Back in the Desktop Editor, click the Refresh button in the Properties panel to refresh the instances from your web-based design.

 For more information, see [Edit Scripted Avatar NPC Appearance](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/edit-scripted-avatar-npc-appearance).  

## TypeScript Features

 A scripted avatar NPC does not have a default set of behaviors or actions.
Behaviors must be programmed in TypeScript. The following behaviors can be created and managed through TypeScript.  

### Test NPC or Human

 Scripted Avatar NPCs utilize the same set of resources as human players. Note: A reference to an `hz.Player` entity may include both human and NPC players. To segment behavior, you should add a function to determine if the player that
is being referenced is a human or NPC player. In this example world, the `Utils.ts` script contains the `isNPC()` function, which returns `true` if the player submitted as a parameter to the function is an NPC: Tip: This function should be exported and made available to any code that must
segment between human and NPC players.  
```
import * as hz from 'horizon/core';

export function isNPC(player: hz.Player) {
  // isNPC == true -> NPC; isNPC == false -> player
  const isNpc = player.id > 10000;
  if (isNpc) {
    return true;
  } else {
    return false;
  };
};
```
 Usage: In the following example from `GameManager.ts`, the event listener is listening for the `collectGem` event. Since gems can be collected by both humans and NPCs, it is important to
determine if the gem was collected by a human (`!isNPC(data.collector)`) before adjusting statistics and quests because of it:  
```
this.connectLocalBroadcastEvent(collectGem, (data:{gem: hz.Entity, collector: hz.Player}) => {
  this.handleGemCollect(data.gem);

  // If gemCount >= 15 then send event to resolve quest for collecting 15 total gems.
  if (!isNPC(data.collector)) {
    this.totalLifetimeGemsCollected++;
    this.sendLocalBroadcastEvent( refreshScore, {  player : data.collector } );
    console.log("[GameManager] " + data.collector.name.get() + " grabbed a gem! Lifetime total: " + this.totalLifetimeGemsCollected.toString())
    if ((this.totalLifetimeGemsCollected >= 15) && (data.collector.hasCompletedAchievement('QuestCollect15Gems') == false)) {
        this.sendLocalBroadcastEvent( questComplete, {player: data.collector, questName: QuestNames.QuestCollect15Gems } );
    }
  }
});
```

### Spawning/Despawning

 The resources required for tracking an additional player are significant. To
better manage your runtime resources, you may need to spawn in and despawn out NPCs
from your world. When an NPC is despawned, the player resources are freed for
other uses. Tip: Depending on the scope of your world, this step may not be necessary. However,
it is a recommended practice to deploy resources when they are needed and to
free them when they are not. Usage: In the following snippet from `NPCManager.ts`, the properties on the NPC Manager entity are checked to see if they have been
set to entities in the world corresponding to the NPCs. If so, a reference is created for the Village Elder (`ve`) and Traveling Merchant (`merch`) as an NPC (`AvatarAIAgent`). The `spawnAgentPlayer()` method is called, the results of which (`spawnResult`) are passed to the `onSpawnResult()` function for further processing.  
```
if (this.props.villageElder) {
  const ve: AvatarAIAgent = this.props.villageElder?.as(AvatarAIAgent);
  ve.spawnAgentPlayer().then((spawnResult) => this.onSpawnResult(spawnResult, ve));
}
if (this.props.merchant) {
  const merch: AvatarAIAgent = this.props.merchant?.as(AvatarAIAgent);
  merch.spawnAgentPlayer().then((spawnResult) => this.onSpawnResult(spawnResult, merch));
}
```
 Note: This tutorial world does not feature use of the `despawnAgentPlayer()` method, since the NPCs cannot be destroyed or otherwise dismissed from the
world.  

### Navigation and Locomotion

 The locomotion system for scripted avatar NPCs relies on the NavMesh system for
its foundation. This system requires that the developer:
• Create a navigation profile.
• Build one or more navigation volumes, which define the space in which an NPC can
navigate.
  • In the tutorial world, there is a single volume that encapsulates the entire
playable space.
• Tie the set of navigation volumes to the navigation profile.
• Assign the navigation profile to your NPC by name. In `NPCManager.ts`, this is handled as follows:

  
```
const navMeshManager = NavMeshManager.getInstance(this.world);
const navMesh = await navMeshManager.getByName("NPC");
if (navMesh == null) {
    console.error("Could not find navMesh: NPC");
    return;
};
this.navMesh = navMesh;
```

• At runtime, you must bake the NavMesh, which involves computing the set of
surface points along which any NPC using the NavMesh can travel.

 Usage: Locomotion along the navmesh is handled through a set of methods on the `locomotion` property. For more information, see [Module 3 - NPC Manager](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-3-npc-manager). For more information on NavMesh, see [Setting up NPCs with Navigation](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/setting-up-npcs-with-navigation).  

### Grabbing

 As needed, NPCs can be configured to grab objects that are set to be grabbable. Note: For an entity to be grabbable, you must configure a set of properties on the
entity. For more information on configuring entities to be grabbable by avatar NPCs, see
[Grabbing for Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/grabbing-for-scripted-avatar-npcs). Usage: In the example world, when a gem is collected, the following code is executed.
This code tests to see if the player that collected the gem is the Traveling
Merchant NPC. If so, then the gem is "dropped" by applying the `.drop()` action and moving it to the `hiddenLocation`, which is defined by constant (`const hiddenLocation = new hz.Vec3(0, -100, 0);`):  
```
private onGemCollected(gem: hz.Entity, collector: hz.Player): void {
  const merch : AvatarAIAgent = this.props.merchant!.as(AvatarAIAgent);
  if(merch.grabbableInteraction.getGrabbedEntity(hz.Handedness.Right) == gem) {
    merch.grabbableInteraction.drop(hz.Handedness.Right);
    gem.position.set(hiddenLocation);
    this.audio?.playVEInterference();
  }
};
```
 For more information on NPC grabbing in the example world, see [Module 3 - NPC Manager](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-3-npc-manager).  

## Unsupported Features

 The following features are not currently available for Scripted Avatar NPCs.
• Conversation integration: Integration with the Conversation LLM gizmo is not supported at this time.

 Tip: As a workaround, this tutorial world demonstrates how to trigger voice based
on NPC activities. For more information, see [Module 3 - NPC Manager](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-3-npc-manager).  

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fscripted-avatar-npc-tutorial%2Fmodule-2-overview%2F)
