Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/aim-assist

# Aim Assist

In the interest of creating the most enjoyable experience for all players, it’s important to consider how to balance any competitive gameplay across players on different devices. In particular, on mobile devices, the user can struggle with fast twitch controls in high stress or competitive environments. To remedy this, you can use an aim assist system that helps the player track potential targets.

You interact with the **Aim Assist** system by using two simple API controls. One control suggests a target to the system. The other control clears the target. You can specify the target as either a Player, an Entity, or a Vec3.

You can find the Aim Assist APIs in the **horizon/core** module. You can also read about them in the reference documentation.

* [AimAssistOptions type](/hw-docs/Reference/core/Type Aliases/AimAssistOptions.md)
* [Player.setAimAssistTarget() method](https://horizon.meta.com/resources/scripting-api/core.player.setaimassisttarget.md?api_version=2.0.0)
* [Player.clearAimAssistTarget() method](https://horizon.meta.com/resources/scripting-api/core.player.clearaimassisttarget.md?api_version=2.0.0)

Consider the game Super Rumble as a usage example. A system could be created that gathers a list of all players currently in play. The system could then periodically iterate through the list of players to find the player closest to the aiming direction of an individual with aim assist, and then set this player as the aim assist target. If there are no viable targets (i.e. there are no players close enough to the aiming direction of the individual), then this list is cleared.