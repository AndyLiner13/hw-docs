Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-scripts

# NPC Scripts

## Overview

This page provides a break down of the NPC examples used in the NPC Example World. These sample scripts contain some common NPC behavior that can be implemented into your world.

You can select the **NPC Examples** option from the **Creation Home** view.

![Creation Home NPC examples tutorial world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480582165_656797603524861_7097745054728250127_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mSJhzj0PVr0Q7kNvwEcmZ9C&_nc_oc=Adn8wLyhbVHmtJnhe3L7D2v43Qx4OsBVlCWVob00iGzFNrC2g059Mgp8aul-L2tMPjU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_Afkh9rrkdmDvgcsFgI-tE7gVhlAX4xzgRxHxgrkzQvNULQ&oe=694BEA32)

## NPCAgent.ts

```
import * as hz from "horizon/core";
import { NavMeshAgent } from "horizon/navmesh";
import * as  ab  from "horizon/unity_asset_bundles";

export enum  NPCAgentEmote {
  Wave = "EmoteWave",
  Celebration = "EmoteCelebration",
  Taunt = "EmoteTaunt",
  Yes = "EmoteYes",
  No = "EmoteNo",
  Point = "EmotePoint",
}

export class NPCAgent<T> extends hz.Component<typeof NPCAgent & T> {

// Editable Properties

  static propsDefinition = {
    headHeight: { type: hz.PropTypes.Number, default: 1.8 },
    walkSpeed: { type: hz.PropTypes.Number, default: 1.0 },
    runSpeed: { type: hz.PropTypes.Number, default: 0.0 },
    hasRandomIdle: { type: hz.PropTypes.Boolean, default: false },
  };

  // Private fields
  private assetRef_?: ab.AssetBundleInstanceReference;
  private navMeshAgent_?: NavMeshAgent;
  private lookAt_: hz.Vec3 | undefined;
  private animMoving_: boolean = false;
  private animSpeed_: number = 0.0;
  private animDead_: boolean = false;
  private animLookX_: number = 0.0;
  private animLookY_: number = 0.0;

  // Public properties
  get lookAt(): hz.Vec3 | undefined {
    return this.lookAt_;
  }

  set lookAt(value: hz.Vec3 | undefined) {
    if (value != this.lookAt_) {
      this.lookAt_ = value;
    }
  }

  get dead(): boolean {
    return this.animDead_;
  }

  set dead(value: boolean) {
    if (value != this.animDead_) {
      this.animDead_ = value;
      this.assetRef_?.setAnimationParameterBool("Death", value);
      this.navMeshAgent_?.isImmobile.set(value);
    }
  }

  get navMeshAgent(): NavMeshAgent | undefined {
    return this.navMeshAgent_;
  }

  // Public methods
  triggerAttackAnimation() {
    this.assetRef_?.setAnimationParameterTrigger("Attack", false);
  }

  triggerHitAnimation() {
    this.assetRef_?.setAnimationParameterTrigger("Hit");
  }

  triggerEmoteAnimation(emote: NPCAgentEmote) {

    switch (emote) {

      case NPCAgentEmote.Wave:
        this.assetRef_?.setAnimationParameterTrigger("EmoteWave");
        break;
      case NPCAgentEmote.Celebration:
        this.assetRef_?.setAnimationParameterTrigger("EmoteCelebration");
        break;
      case NPCAgentEmote.Taunt:
        this.assetRef_?.setAnimationParameterTrigger("EmoteTaunt");
        break;
      case NPCAgentEmote.Yes:
        this.assetRef_?.setAnimationParameterTrigger("EmoteYes");
        break;
      case NPCAgentEmote.No:
        this.assetRef_?.setAnimationParameterTrigger("EmoteNo");
        break;
      case NPCAgentEmote.Point:
        this.assetRef_?.setAnimationParameterTrigger("EmotePoint");
        break;
    }
  }
  setMaxSpeedToWalkSpeed() {
    this.navMeshAgent_?.maxSpeed.set(this.props.walkSpeed);
  }

  setMaxSpeedToRunSpeed() {
    this.navMeshAgent_?.maxSpeed.set(
      Math.max(this.props.walkSpeed, this.props.runSpeed)
    );
  }

  // Lifecycle
  start() {

    this.assetRef_ = this.entity.as(ab.AssetBundleGizmo)?.getRoot();
    this.navMeshAgent_ = this.entity.as(NavMeshAgent) || undefined;
    this.navMeshAgent_?.maxSpeed.set(
      Math.max(this.props.walkSpeed, this.props.runSpeed)
    );
    this.navMeshAgent_?.requiredForwardAlignment.set(90);
    this.connectLocalBroadcastEvent(hz.World.onUpdate, (data) => {
      this.update(data.deltaTime);
    });

    // Make sure the random parameter used for selecting a random idle is updated once a second.
    if (this.props.hasRandomIdle) {
      this.async.setInterval(() => {
        this.assetRef_?.setAnimationParameterFloat("Random", Math.random());
      }, 1000);
    }
  }

  update(deltaTime: number) {
    this.updateSpeedAnimationParameters(deltaTime);
    this.updateLookAtAnimationParameters(deltaTime);
  }

  // Private methods
  private updateSpeedAnimationParameters(deltaTime: number) {
    var speed = this.navMeshAgent?.currentSpeed.get() || 0.0;
    var speedAnimationValue = this.calculateSpeedAnimationValue(speed);
    speedAnimationValue = (speedAnimationValue + this.animSpeed_) * 0.5;
    if (speedAnimationValue <= 0.1) {
      speedAnimationValue = 0.0;
    }
    if (speedAnimationValue != this.animSpeed_) {
      this.animSpeed_ = speedAnimationValue;
      this.assetRef_?.setAnimationParameterFloat("Speed", speedAnimationValue);
    }

    var movingAnimationValue = speedAnimationValue > 0.0;
    if (movingAnimationValue != this.animMoving_) {
      this.animMoving_ = movingAnimationValue;
      this.assetRef_?.setAnimationParameterBool("Moving", movingAnimationValue);
    }
  }

  private calculateSpeedAnimationValue(speed: number) {

    // Animation value is between 0 and 1 for walking, and between 1 and 4 for running.

    if (speed < this.props.walkSpeed) {
      return speed / this.props.walkSpeed;
    } else if (this.props.runSpeed <= this.props.walkSpeed) {
      return 1;
    } else if (speed < this.props.runSpeed) {
      return (
        ((speed - this.props.walkSpeed) /
          (this.props.runSpeed - this.props.walkSpeed)) * 3 +1);
     } else {
      return 4;
    }
  }

  private updateLookAtAnimationParameters(deltaTime: number) {

  const playerPos = this.lookAtPlayer.head.position.get()
    const rot = this.entity.rotation.get()
    const pos = this.entity.position.get()
    pos.y += this.props.height/2
    const forward = hz.Quaternion.mulVec3(rot, hz.Vec3.forward)
    const dir = playerPos.sub(pos).normalize()
    const upAngle = Math.sinh(forward.cross(dir).cross(forward).y)/(Math.PI/2)
    const rightAngle = Math.sinh(forward.cross(dir).y)/(Math.PI/2)
    this.asset.setAnimationParameterFloat('LookX', rightAngle)
    this.asset.setAnimationParameterFloat('LookY', upAngle)
  }
hz.Component.register(NPCAgent);
```

## NPC Stand and Look

The Stand and Look sample script allows NPCs to acknowledge your character when loading into the world.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/459309296_1250615282610996_6400995796393963617_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=-ArSBt5d8h8Q7kNvwFFBKAj&_nc_oc=AdlujRwIAKEyc8aHxPuDYj-R8hzeeNyN5db_QYv92xWh7L9uRlLcr1PkF6E_wIYg5Mw&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_Afne9miCP_o1-NI6ggSsEynwORFD2CSQ106DTh78JOCfcg&oe=69376629)

### NPCStandAndLook.ts

```
import * as hz from "horizon/core";
import { NPCAgent, NPCAgentEmote } from "NPCAgent";

export const LookAtPlayer: hz.LocalEvent<{player: hz.Player}> = new hz.LocalEvent<{player: hz.Player}>('LookAtPlayer');
export const StopLookingAtPlayer: hz.LocalEvent<{player: hz.Player}> = new hz.LocalEvent<{player: hz.Player}>('StopLookingAtPlayer');
export const PlayEmote: hz.LocalEvent<{emoteId: number, player: hz.Player | undefined}> = new hz.LocalEvent<{emoteId: number, player: hz.Player | undefined}>('PlayEmote');
export class NPCStandAndLook extends NPCAgent<typeof NPCStandAndLook> {

  static propsDefinition = {
    ...NPCAgent.propsDefinition,
    lookAtAllPlayers: {type: hz.PropTypes.Boolean, default: true},
    changeTargetDelayMin: {type: hz.PropTypes.Number, default: 1},
    changeTargetDelayMax: {type: hz.PropTypes.Number, default: 5},
  };
  static dummy: number = 0;
  players: hz.Player[] = [];
  playerToLookAt: hz.Player | undefined;
  reevaluateTimer: number = 0;

  start() {
    super.start();
    if (this.props.lookAtAllPlayers) {
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerEnterWorld,
        (player: hz.Player) => {
          this.onLookAtPlayer(player);
        }
      );
      this.connectCodeBlockEvent(
        this.entity,
        hz.CodeBlockEvents.OnPlayerExitWorld,
        (player: hz.Player) => {
          this.onStopLookingAtPlayer(player);
        }
      );
    }

this.connectLocalEvent(this.entity, LookAtPlayer, ({player}) => {
      this.onLookAtPlayer(player);
    });

this.connectLocalEvent(this.entity, StopLookingAtPlayer, ({player}) => {
      this.onStopLookingAtPlayer(player);
    });

this.connectLocalEvent(this.entity, PlayEmote, ({emoteId, player}) => {
      console.log("Playing emote");
      if (player !== undefined) {
        this.playerToLookAt = player;
        this.reevaluateTimer = this.getReevaluateDelay();
      }
      this.triggerEmoteAnimation(emoteId);
    });
  }

onLookAtPlayer(player: hz.Player) {
    this.players.push(player);
  }
  onStopLookingAtPlayer(player: hz.Player) {
    const index = this.players.indexOf(player, 0);
    if (index > -1) {
      this.players.splice(index, 1);
    }
    if (player == this.playerToLookAt) {
      this.playerToLookAt = undefined;
    }
  }

update(deltaTime: number): void {
    super.update(deltaTime);
    this.reevaluateTimer -= deltaTime;
    if (this.reevaluateTimer <= 0 || this.playerToLookAt == undefined) {
      this.playerToLookAt = this.selectRandomPlayerToLookAt();

      // Wait 1-5s before changing who to look at.
      this.reevaluateTimer = this.getReevaluateDelay();
    }
    if (this.playerToLookAt != undefined) {
      this.lookAt = this.playerToLookAt.head.position.get();
    }
  }
  selectRandomPlayerToLookAt(): hz.Player | undefined {
    const candidates: hz.Player[] = [];
    const forward = this.entity.forward.get();
    this.players.forEach((player) => {
      if (hz.Vec3.dot(forward, player.head.position.get()) > 0) {
        candidates.push(player);
      }
    });

if (candidates.length == 0) {
      return undefined;
    } else {
      const index = Math.floor(Math.random() * candidates.length);
      return candidates[index];
    }
  }

  getReevaluateDelay(): number {
    return this.props.changeTargetDelayMin + Math.random() * (this.props.changeTargetDelayMax - this.props.changeTargetDelayMin);
  }
}

hz.Component.register(NPCStandAndLook);
```

## NPC Emotes

NPCs added to your world are capable of emoting a variety of animations. In the NPC Example World you can interact with NPCs by approaching them and pressing the ‘E’ key. As you move through the sample world and approach NPCs, you will be greeted by the robot with an animation.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/459334217_1712214692930509_8081481470604567857_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=7CrNyqxANPsQ7kNvwGOKN1C&_nc_oc=AdkzQ2e3uF2DqYI3Mo9Cg8ks1RyWITfnxUuqBvCX5yc9KboNnT_dn3RfxF8uPAs_2-o&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_AfncXK16f2VDif1hCS3Q4DIie6sYo-GVuMcg6XEe6tUmmw&oe=69375256)

### TriggerNpcEmotes.ts

```
import { PlayEmote } from 'NPCStandAndLook';
import * as hz from 'horizon/core';
import { TriggerGizmo } from 'horizon/core';

class TriggerNPCEmote extends hz.Component<typeof TriggerNPCEmote> {
  static propsDefinition = {
    npc: {type: hz.PropTypes.Entity, default: undefined},
    emoteId: {type: hz.PropTypes.Number, default: 0},
  };

  start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
      if (this.props.npc !== undefined) {
        this.sendLocalEvent(this.props.npc, PlayEmote, {
          emoteId: this.props.emoteId,
          player: player,
        })
        this.entity.as(TriggerGizmo)?.enabled.set(false);
        this.async.setTimeout(() => {
          this.entity.as(TriggerGizmo)?.enabled.set(true);
        }, 1000)
      }
    });
  }
}
hz.Component.register(TriggerNPCEmote);
```

### WelcomeTriggerBox.ts

```
import * as hz from "horizon/core";
export class WelcomeTriggerBox extends hz.Component<typeof WelcomeTriggerBox> {

  static propsDefinition = {};
  static welcomeTriggerZoneEvent = new hz.LocalEvent<{
    player: hz.Player;
    entered: boolean;
  }>("welcomeTriggerZoneEvent");

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (player) => {
        this.sendLocalBroadcastEvent(
          WelcomeTriggerBox.welcomeTriggerZoneEvent,
          { player, entered: true }
        );
      }
    );
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitTrigger,
      (player) => {
        this.sendLocalBroadcastEvent(
          WelcomeTriggerBox.welcomeTriggerZoneEvent,
          { player, entered: false }
        );
      }
    );
  }
}
hz.Component.register(WelcomeTriggerBox);
```

### NPCWelcomeRobot.ts

```
import { WelcomeTriggerBox } from "WelcomeTriggerBox";
import * as hz from "horizon/core";
import { NPCAgent, NPCAgentEmote } from "NPCAgent";

class NPCWelcomeRobot extends NPCAgent<typeof NPCWelcomeRobot> {

  static propsDefinition = {
    ...NPCAgent.propsDefinition,
  };
  static greetAnimationDuration: number = 3;
  static pointAnimationDuration: number = 2;
  static idleDuration: number = 1;
  players: hz.Player[] = [];
  playersToGreet: hz.Player[] = [];
  playerToLookAt: hz.Player | undefined;
  nextStateTimer: number = 0;
  initialRotaiton: hz.Quaternion = hz.Quaternion.one;

  start() {
    super.start();
    this.connectLocalBroadcastEvent(
      WelcomeTriggerBox.welcomeTriggerZoneEvent,
      (data) => {
        if (data.entered) {
          this.onPlayerEnterWelcomeZone(data.player);
        } else {
          this.onPlayerExitWelcomeZone(data.player);
        }
      }
    );
    this.initialRotaiton = this.entity.rotation.get();
  }

  update(deltaTime: number) {
    super.update(deltaTime);
    this.nextStateTimer -= deltaTime;
    if (this.nextStateTimer <= 0) {
      if (this.playersToGreet.length > 0) {
        this.greetPlayer(this.playersToGreet.shift()!);
        this.nextStateTimer = NPCWelcomeRobot.greetAnimationDuration;
      } else {
        // 20 percent chance to point at a random player.
        if (Math.random() < 0.2) {
          if (this.players.length > 0) {
            const randomIndex = Math.floor(Math.random() * this.players.length);
            this.playerToLookAt = this.players[randomIndex];
            this.triggerEmoteAnimation(NPCAgentEmote.Point);
          }
          this.nextStateTimer = NPCWelcomeRobot.pointAnimationDuration;
        } else {
          this.nextStateTimer = NPCWelcomeRobot.idleDuration;
        }
      }
    }
    if (this.playerToLookAt != undefined) {
      const delta = this.playerToLookAt.head.position
        .get()
        .sub(this.entity.position.get());
      const lookRotation = hz.Quaternion.lookRotation(delta, hz.Vec3.up);
      const newRotation = hz.Quaternion.slerp(
        this.entity.rotation.get(),
        lookRotation,
        0.2
      );
      this.entity.rotation.set(newRotation);
      this.lookAt = this.playerToLookAt.head.position.get();
    } else {
      const newRotation = hz.Quaternion.slerp(
        this.entity.rotation.get(),
        this.initialRotaiton,
        0.2
      );
      this.entity.rotation.set(newRotation);
      this.lookAt = undefined;
    }
  }
  onPlayerEnterWelcomeZone(player: hz.Player) {
    this.players.push(player);
    this.playersToGreet.push(player);
  }

  onPlayerExitWelcomeZone(player: hz.Player) {
    // Remove from the players list
    {
      const index = this.players.indexOf(player, 0);
      if (index > -1) {
        this.players.splice(index, 1);
      }
    }
    // Remove from the players to greet list
    {
      const index = this.playersToGreet.indexOf(player, 0);
      if (index > -1) {
        this.playersToGreet.splice(index, 1);
      }
    }
    if (player == this.playerToLookAt) {
      this.playerToLookAt = undefined;
    }
  }
  greetPlayer(player: hz.Player) {
    this.playerToLookAt = player;
    this.navMeshAgent?.destination.set(player.position.get());
    this.triggerEmoteAnimation(NPCAgentEmote.Celebration);
  }
}
hz.Component.register(NPCWelcomeRobot);
```

## NPC Pathing AI

NPCs are able to path through the world using a Navigation Mesh Volume. In the sample world you can observe the Chicken NPC wandering around the Navigation Bounding Box.

Your NPCs are able to path through the world using a [Navigation Mesh Volume](/hw-docs/Desktop%20editor/NPCs/Navigation%20mesh%20generation.md). In the NPC Example world, Chicken NPCs can be seen wandering around the Navigation Bounding Box based on the their pathing logic.

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/459326773_883524513709142_2055811114306402530_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=6500a6&_nc_ohc=uACY1xyc86cQ7kNvwHr5lQc&_nc_oc=AdlKSYq1KvBm5l-Ll-IdVrhT8UC9QI0xK6PmVTOzPcE1u_cOTa6zQfqDsET398xM9QY&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_Afml36RRRX6Aw7hm_u6JWaNH9qH6hzB2XQQ5cJmsT3trCA&oe=693772B6)

In the next room, Android NPCs use pathfinding to navigate between different waypoints that have been placed throughout the level.

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/459288690_1517730898925213_2842468215419064473_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=MFZ7wXrwO44Q7kNvwGuasIX&_nc_oc=AdlK5sFwBpL99uqlx8pshQclVGpVgqe6TLbXb7DDbS5vmavYmrjD4-qM47Da2B37FVg&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_AfkrypdLSp3MoFRuB9ZOFsKUC0_LR_AN_tjkU8uoWuyi9Q&oe=69375D5F)

### NPCChickenPathing.ts

```
import * as hz from "horizon/core";
import { NavMeshAgent } from "horizon/navmesh";
import { NPCAgent } from "NPCAgent";
import * as ab from "horizon/unity_asset_bundles";
interface BoundingBox {
  min: hz.Vec3;
  max: hz.Vec3;
}

class NPCChicken extends NPCAgent<typeof NPCChicken> {
  static propsDefinition = {
 ...NPCAgent.propsDefinition,
    navMeshVolume: {type: hz.PropTypes.Entity},
    minIdle: {type: hz.PropTypes.Number, default: 1},
    maxIdle: {type: hz.PropTypes.Number, default: 2},

  };
  static dummy: number = 0;
  private boundingBox!: BoundingBox;
  private newDestinationTimer: number = 0;
  private isIdling: boolean = false;
  private destinationAttempts: number = 0;

  start() {
    super.start();
    if (this.props.navMeshVolume !== undefined) {
      const navMeshVolume = this.props.navMeshVolume;
      const bbScale = navMeshVolume.scale.get().mul(0.5);
      const bbPosition = navMeshVolume.position.get();
      this.boundingBox = {min: bbPosition.add(new hz.Vec3(-bbScale.x, 0, -bbScale.z)), max: bbPosition.add(new hz.Vec3(bbScale.x, 0, bbScale.z))};
    }
    this.newDestinationTimer = this.getNewDestinationDelay();
    this.findNewDestination();
  }
  update(deltaTime: number): void {
    super.update(deltaTime);
    if (this.navMeshAgent !== undefined){
      const distanceToTarget = this.navMeshAgent.remainingDistance.get();
      if (distanceToTarget <= this.navMeshAgent.stoppingDistance.get()) {
        if (!this.isIdling) {
          this.randomIdle();
        }
        this.newDestinationTimer -= deltaTime;
        if (this.newDestinationTimer <= 0) {
          this.newDestinationTimer = this.getNewDestinationDelay();
          this.findNewDestination();
        }
      }
    }
  }
  randomIdle(){
    this.isIdling = true;
    this.entity.as(ab.AssetBundleGizmo)?.getRoot().setAnimationParameterFloat("Random", Math.random());
  }
  setNewDestination(destination: hz.Vec3){
    this.isIdling = false;
    this.lookAt = destination;
    this.async.setTimeout(() => {
      this.entity.as(NavMeshAgent)?.destination.set(destination);
    }, 300);
  }
  findNewDestination(){
    this.destinationAttempts++;
    const rPosition = this.getRandomDestination();
    const delta = rPosition.sub(this.getHeadPosition());
    const dotFwd = hz.Vec3.dot(this.entity.forward.get(), delta);
    if (delta.magnitude() > 4 || (dotFwd < 0.1 && this.destinationAttempts < 5)) {
      this.async.setTimeout(() => {
        this.findNewDestination();
      }, 200);
    } else {
      this.destinationAttempts = 0;
      this.setNewDestination(rPosition);
    }
  }
  getRandomDestination(): hz.Vec3 {
    const rx = Math.random() * (this.boundingBox.max.x - this.boundingBox.min.x) + this.boundingBox.min.x;
    const rz = Math.random() * (this.boundingBox.max.z - this.boundingBox.min.z) + this.boundingBox.min.z;
    return new hz.Vec3(rx, 0, rz);
  }
  getHeadPosition(){
    const headPosition = this.entity.position.get();
    headPosition.y += this.props.headHeight;
    return headPosition;
  }
  getNewDestinationDelay(): number {
    return Math.random() * (this.props.maxIdle - this.props.minIdle) + this.props.minIdle;
  }
}
hz.Component.register(NPCChicken);
```

### NPCAndroid.ts

```
import { NPCAgent } from 'NPCAgent';
import { RegisterWaypoint } from 'NPCAndroidWaypoint';
import * as hz from 'horizon/core';
import { Quaternion } from 'horizon/core';
import { NavMeshAgent } from "horizon/navmesh";

class NPCAndroid extends NPCAgent<typeof NPCAndroid> {

  static propsDefinition = {
    ...NPCAgent.propsDefinition,
    routeIndex: {type: hz.PropTypes.Number, default: 0},
    minIdleTime: {type: hz.PropTypes.Number, default: 1},
    maxIdleTime: {type: hz.PropTypes.Number, default: 3},
    startingIndex: {type: hz.PropTypes.Number, default: 0},
    viewTrigger: {type: hz.PropTypes.Entity},

  }

  static dummy: number = 0;
  private waypoints: hz.Vec3[] = [];
  private targetWaypoint: number = 0;
  private pathUpdate: (deltaTime: number)=>void = ()=>{};
  private idleTimer: number = 0;
  private lookAtPlayer: hz.Player | undefined = undefined;

  preStart(): void {

    this.targetWaypoint = this.props.startingIndex;
    this.connectLocalBroadcastEvent(RegisterWaypoint, ({waypoint, routeIndex, index}) => {

      if (routeIndex === this.props.routeIndex) {
        this.waypoints[index] = waypoint.position.get();
      }
    });

    if (this.props.viewTrigger !== undefined && this.props.viewTrigger !== null) {
      this.connectCodeBlockEvent(this.props.viewTrigger, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player) => {
        this.lookAtPlayer = player;
      });
      this.connectCodeBlockEvent(this.props.viewTrigger, hz.CodeBlockEvents.OnPlayerExitTrigger, (player) => {
        this.lookAtPlayer = undefined;
      });
    }
  }

  start() {
    super.start();
    this.async.setTimeout(() => {
      if (this.waypoints.length === 1) {
        console.warn("No waypoints found for NPCAndroid: " + this.entity.name.get());
      } else {
        this.idleTimer = this.getIdleTime();
        this.pathUpdate = this.checkWaypointArrival;
      }
    }, 1000);
  }

  update(deltaTime: number) {
    if (this.waypoints.length > 0 && this.waypoints[1] !== undefined) {
      this.pathUpdate(deltaTime);
    }
    if (this.lookAtPlayer !== undefined) {
      this.lookAt = this.lookAtPlayer.head.position.get();
    }
    super.update(deltaTime);
  }
  checkWaypointArrival(deltaTime: number){
    const navMeshAgent = this.entity.as(NavMeshAgent);
    if (navMeshAgent !== undefined && navMeshAgent !== null) {
      if (navMeshAgent.remainingDistance.get() < navMeshAgent.stoppingDistance.get() && navMeshAgent.currentVelocity.get().magnitude() < 0.1) {
        this.lookAt = undefined;
        navMeshAgent.destination.set(null);
        this.pathUpdate = this.idleAtWaypoint;
      }
    }
  }
  idleAtWaypoint(deltaTime: number){
    this.idleTimer -= deltaTime;
    if (this.idleTimer <= 0) {
      this.idleTimer = this.getIdleTime();
      this.pathUpdate = this.lookAtNextWaypoint
      this.setNextWaypoint();
      this.async.setTimeout(()=> {
        this.pathUpdate = this.checkWaypointArrival;
      }, 600);
    }
  }
  lookAtNextWaypoint(deltaTime: number) {
  }
  setNextWaypoint() {
    this.targetWaypoint = (this.targetWaypoint + 1) % this.waypoints.length;
    if (this.waypoints[this.targetWaypoint] !== undefined) {
      const navMeshAgent = this.entity.as(NavMeshAgent);
      if (navMeshAgent !== undefined && navMeshAgent !== null) {
        navMeshAgent.destination.set(this.waypoints[this.targetWaypoint]);
      }
    } else {
      console.warn("Could not find waypoint for NPCAndroid: " + this.entity.name.get() + " at index: " + this.targetWaypoint);
    }
  }
  getIdleTime(){
    return this.props.minIdleTime + Math.random()*(this.props.maxIdleTime - this.props.minIdleTime);
  }
}
hz.Component.register(NPCAndroid);
```

### NPCAndroidWayPoint.ts

```
import * as hz from 'horizon/core';
export const RegisterWaypoint: hz.LocalEvent<{waypoint: hz.Entity, routeIndex: number, index: number}> = new hz.LocalEvent<{waypoint: hz.Entity, routeIndex: number, index: number}>('RegisterWaypoint');
class NPCAndroidWaypoint extends hz.Component<typeof NPCAndroidWaypoint> {
  static propsDefinition = {
    routeIndex: {type: hz.PropTypes.Number, default: 0},
    index: {type: hz.PropTypes.Number, default: 0},
  };

  start() {
    this.sendLocalBroadcastEvent(RegisterWaypoint, {waypoint: this.entity, routeIndex: this.props.routeIndex, index: this.props.index});
  }
}
hz.Component.register(NPCAndroidWaypoint);
```

## NPC Enemies

NPCs added to your worlds can also be set as enemies for players in your world. With the following scripts your enemy NPCs can recognize the player, follow them, and attempt to attack.

Players can defend themselves with a weapon like the [Sword](/hw-docs/Desktop%20editor/NPCs/NPC%20Scripts.md#swordts) in the example and the NPCs also have hit reaction animations to indicate they’ve taken damage.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/458933021_829251449394537_1287573333970264365_n.mp4?_nc_cat=101&ccb=1-7&_nc_sid=6500a6&_nc_ohc=AL1R_fzSD1YQ7kNvwET6EyX&_nc_oc=Adlo7h-YqWgGi5aTX_cEz14S2aHHU16AuOe4tbypOxQUU2_CuF2iJfWvXhS42-p9SMs&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=BQ9pwneZI0572YgtWirZFQ&oh=00_AfmD6KzE9_sLtwTod_uP4a9MrvJopuERdBx_1xsGT2Ugyw&oe=6937713F)

### NPCMonster.ts

```
import * as hz from "horizon/core";
import { NPCAgent, NPCAgentEmote } from "NPCAgent";

enum NPCMonsterState {
  Idle,
  Taunting,
  Walking,
  Running,
  Hit,
  Dead,
}

export const StartAttackingPlayer: hz.NetworkEvent<{player: hz.Player}> = new hz.NetworkEvent<{player: hz.Player}>("StartAttackingPlayer");
export const StopAttackingPlayer: hz.NetworkEvent<{player: hz.Player}> = new hz.NetworkEvent<{player: hz.Player}>("StopAttackingPlayer");

class NPCMonster extends NPCAgent<typeof NPCMonster> {
  static propsDefinition = {
    ...NPCAgent.propsDefinition,
    trigger: {type: hz.PropTypes.Entity},
    maxVisionDistance: {type: hz.PropTypes.Number, default: 7},
    maxAttackDistance: {type: hz.PropTypes.Number, default: 5},
  };

  static tauntingAnimationDuration: number = 2;
  static attackAnimationDuration: number = 2;
  static hitAnimationDuration: number = 0.5;
  static deathDuration: number = 3;
  static maxHitPoints: number = 4;
  players: hz.Player[] = [];
  hitPoints: number = NPCMonster.maxHitPoints;
  targetPlayer: hz.Player | undefined = undefined;
  state: NPCMonsterState = NPCMonsterState.Idle;
  stateTimer: number = 0;
  attackTimer: number = 0;
  lastHitTime: number = 0;
  startLocation!: hz.Vec3;

  start() {
    super.start();
    this.dead = false;
    this.startLocation = this.entity.position.get();
    if (this.props.trigger !== undefined && this.props.trigger !== null) {
      this.connectCodeBlockEvent(this.props.trigger, hz.CodeBlockEvents.OnEntityEnterTrigger, (enteredBy) => {
        if (enteredBy.owner.get() !== this.world.getServerPlayer()) {
          this.hit();
        }
      });
    }
    this.connectNetworkBroadcastEvent(StartAttackingPlayer, ({player}) => {
      this.onStartAttackingPlayer(player);
    });
    this.connectNetworkBroadcastEvent(StopAttackingPlayer, ({player}) => {
      this.onStopAttackingPlayer(player);
    });
  }
  update(deltaTime: number) {
    super.update(deltaTime);
    this.updateTarget();
    this.updateStateMachine(deltaTime);
    this.updateLookAt();
  }
  hit() {
    const now = Date.now() / 1000.0;
    if (now >= this.lastHitTime + NPCMonster.hitAnimationDuration) {
      this.hitPoints--;
      this.lastHitTime = now;
      this.triggerHitAnimation();
      if (this.hitPoints <= 0) {
        this.setState(NPCMonsterState.Dead);
      } else {
        this.setState(NPCMonsterState.Hit);
      }
    }
  }

  private onStartAttackingPlayer(player: hz.Player) {
    this.players.push(player);
  }
  private onStopAttackingPlayer(player: hz.Player) {
    // Remove from the players list
    {
      const index = this.players.indexOf(player, 0);
      if (index > -1) {
        this.players.splice(index, 1);
      }
    }
    if (player === this.targetPlayer) {
      this.targetPlayer = undefined;
    }
  }
  private updateTarget() {
    if (this.targetPlayer === undefined) {
      let closestDistanceSq = this.props.maxVisionDistance*this.props.maxVisionDistance;
      const monsterPosition = this.entity.position.get();
      this.players.forEach((player) => {
        const playerPosition = player.position.get();
        const distanceSq = monsterPosition.distanceSquared(playerPosition);
        if (distanceSq < closestDistanceSq) {
          closestDistanceSq = distanceSq;
          this.targetPlayer = player;
        }
      });
    }
  }
  private updateLookAt() {
    if (this.targetPlayer !== undefined) {
      this.lookAt = this.targetPlayer.position.get();
    }
  }
  private updateStateMachine(deltaTime: number) {
    switch (this.state) {
      case NPCMonsterState.Idle:
        if (this.targetPlayer !== undefined) {
          // Taunt when a target is acquired
          this.setState(NPCMonsterState.Taunting);
        }
        break;
      case NPCMonsterState.Taunting:
        this.stateTimer -= deltaTime;
        if (this.stateTimer <= 0) {
          // 20% chance to run, 80% chance to walk
          if (Math.random() <= 0.8) {
            this.setState(NPCMonsterState.Walking);
          } else {
            this.setState(NPCMonsterState.Running);
          }
        }
        break;
      case NPCMonsterState.Walking:
        this.updateWalkAndRunStates(deltaTime);
        break;
      case NPCMonsterState.Running:
        this.updateWalkAndRunStates(deltaTime);
        break;
      case NPCMonsterState.Hit:
        this.stateTimer -= deltaTime;
        if (this.stateTimer <= 0) {
          if (Math.random() <= 0.8) {
            this.setState(NPCMonsterState.Walking);
          } else {
            this.setState(NPCMonsterState.Running);
          }
        }
      case NPCMonsterState.Dead:
        this.stateTimer -= deltaTime;
        if (this.stateTimer <= 0) {
          this.setState(NPCMonsterState.Idle);
        }
        break;
    }
  }
  private onEnterState(state: NPCMonsterState) {
    switch (state) {
      case NPCMonsterState.Idle:
        this.navMeshAgent?.isImmobile.set(true);
        this.navMeshAgent?.destination.set(this.entity.position.get());
        break;
      case NPCMonsterState.Taunting:
        this.stateTimer = NPCMonster.tauntingAnimationDuration;
        this.navMeshAgent?.isImmobile.set(true);
        this.triggerEmoteAnimation(NPCAgentEmote.Taunt);
        break;
      case NPCMonsterState.Walking:
        this.navMeshAgent?.isImmobile.set(false);
        this.setMaxSpeedToWalkSpeed();
        break;
      case NPCMonsterState.Running:
        this.navMeshAgent?.isImmobile.set(false);
        this.setMaxSpeedToRunSpeed();
        break;
      case NPCMonsterState.Hit:
        this.stateTimer = NPCMonster.hitAnimationDuration;
        this.navMeshAgent?.destination.set(this.entity.position.get());
        this.navMeshAgent?.isImmobile.set(true);
        break;
      case NPCMonsterState.Dead:
        this.stateTimer = NPCMonster.deathDuration;
        this.dead = true;
        break;
    }
  }
  private onLeaveState(state: NPCMonsterState) {
    switch (state) {
      case NPCMonsterState.Idle:
        break;
      case NPCMonsterState.Taunting:
        break;
      case NPCMonsterState.Walking:
        break;
      case NPCMonsterState.Running:
        break;
      case NPCMonsterState.Hit:
        break;
      case NPCMonsterState.Dead:
        this.dead = false;
        this.targetPlayer = undefined;
        this.lookAt = undefined;
        this.entity.position.set(this.startLocation);
        this.hitPoints = NPCMonster.maxHitPoints;
        break;
    }
  }

  private setState(state: NPCMonsterState) {
    if (this.state != state) {
      this.onLeaveState(this.state);
      this.state = state;
      this.onEnterState(this.state);
    }
  }
  private updateWalkAndRunStates(deltaTime: number) {
    if (this.targetPlayer === undefined) {
      this.setState(NPCMonsterState.Idle);
    } else {
      this.navMeshAgent?.destination.set(this.targetPlayer.position.get());
      const distanceToPlayer = this.targetPlayer.position.get().distanceSquared(this.entity.position.get());
      if (distanceToPlayer < this.props.maxAttackDistance*this.props.maxAttackDistance) {
        this.attackTimer -= deltaTime;
        if (this.attackTimer <= 0) {
          this.attackTimer = NPCMonster.attackAnimationDuration;
          console.log("Trigger attack animation");
          this.triggerAttackAnimation();
        }
      }
    }
  }
}
hz.Component.register(NPCMonster);
```

### Sword.ts

```
import { StartAttackingPlayer, StopAttackingPlayer } from 'NPCMonster';
import LocalCamera from 'horizon/camera';
import * as hz from 'horizon/core';
import { PlayerDeviceType } from 'horizon/core';

class Sword extends hz.Component<typeof Sword> {
  static propsDefinition = {
    returnSwordDelay: {type: hz.PropTypes.Number, default: 1},
    swingCooldown: {type: hz.PropTypes.Number, default: 200}
  };
  private startPosition: hz.Vec3 = hz.Vec3.zero;
  private startRotation: hz.Quaternion = hz.Quaternion.identity;
  private returnSwordTimerId: number = -1;
  private lastSwingTs: number = -1;

  start() {
    this.startPosition = this.entity.position.get();
    this.startRotation = this.entity.rotation.get();
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand, player) => {
      if (this.returnSwordTimerId > -1) {
        this.async.clearTimeout(this.returnSwordTimerId);
        this.returnSwordTimerId = -1;
      }
      this.entity.owner.set(player);
      this.async.setTimeout(() => {
        LocalCamera.setCameraModeThirdPerson();
      }, 500);
      this.sendNetworkBroadcastEvent(StartAttackingPlayer, {player});
    })
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (triggerPlayer) => {
      if (triggerPlayer.deviceType.get() !== PlayerDeviceType.VR && triggerPlayer === this.entity.owner.get()) {
        if (this.lastSwingTs === -1 || Date.now() - this.lastSwingTs > this.props.swingCooldown) {
          this.lastSwingTs = Date.now();
          this.entity.owner.get().playAvatarGripPoseAnimationByName(hz.AvatarGripPoseAnimationNames.Fire);
        }
      }
    })
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabEnd, (player) => {
      LocalCamera.setCameraModeFirstPerson();
      this.async.setTimeout(() => {
        this.entity.owner.set(this.world.getServerPlayer());
      }, 300);
      this.returnSwordTimerId = this.async.setTimeout(() => {
        this.entity.position.set(this.startPosition);
        this.entity.rotation.set(this.startRotation);
        this.returnSwordTimerId = -1;
      }, this.props.returnSwordDelay);
      this.sendNetworkBroadcastEvent(StopAttackingPlayer, {player});
    })
  }
}
hz.Component.register(Sword);
```