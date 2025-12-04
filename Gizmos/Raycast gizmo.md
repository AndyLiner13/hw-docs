Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/raycast-gizmo

# Raycast gizmo

The raycast gizmo is one of many gizmos in Meta Horizon Worlds that’s designed to enhance the creator’s ability to build interactive and dynamic worlds. This topic focuses on the experience of using a raycast gizmo in the [desktop editor](/hw-mcp-tools/documentation/hw-docs/Get%20started/Install%20the%20desktop%20editor.md), introduces the gizmo’s properties and expected behavior, and then highlights the [Raycast gizmo APIs](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/RaycastGizmo.md).

First of all, raycasting is the act of projecting a virtual laser beam from a location towards a direction and finding the first thing that it collides with such as a player or an object. If a collision is detected, information about the collision is returned. The act of casting a ray into the world is called raycast.

To cast a ray in Meta Horizon Worlds, use a raycast gizmo that projects a beam into the world. Whenever the ray collides with an object, information about the object is returned. While commonly used in shooting games, raycast gizmos can also be used for other purposes such as determining line of sight.

## Limitations

Raycasting too often in a short period of time can hurt performance.

## Access the raycast gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the raycast gizmo:

- In the desktop editor while in **Build** mode, select **Build** > **Gizmos** from the menu bar, search for “Raycast” in the search field.
- Select **Raycast** to drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Raycast gizmo properties

Whenever a collision event occurs when the ray is projected into the world, the information returned about the object depends on the configuration in **Properties**. You can filter collision events by configuring **Collide With**, or by adding an additional condition when using **Object Tagged**.

![Raycast gizmo properties panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/491864717_702686125602675_3809255897420655060_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=PZlZ6BKSfcUQ7kNvwG5I7Hl&_nc_oc=AdnlMX52aAHffgJCXuSv0uDVOvnqAN611mYT3Whc6976RjiAzMGf0vN5QxDjweIPQCA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mazrvO4RfOSHssG3wCL9Lw&oh=00_AflUGlS1vFeLd4X8oVQDglXlrjFYYAk5ioqhImHfv6Ma8A&oe=694BC057)

In the **Collide With** field, you can choose between **Players**, **Object Tagged** or **Both**. Remember that whenever **Object Tagged** is chosen, the [tag](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md#properties) needs to be provided in the **Object Tag** field. The raycast will then return hits for objects with matching tags.

The following lists the types of target that the raycast will return depending on the level of filtering you’ve configured for your collision events:

* If you choose **Players**, the raycast returns a hit when it collides with a player.
* If you choose **Object Tagged**, the raycast returns a hit when it collides with an object with the matching tag.
* If you choose **Both**, the raycast returns a hit when it collides with both players and objects with matching tags.

The **Raycast Distance** field specifies the maximum distance, in meters, within which the raycast can register a hit.

If **Stop On First Hit** is enabled when the ray collides with an object that does not have the tag specified in **Object Tagged**, the raycast registers the hit as a miss by returning a static empty hit. This simulates how collision events would naturally occur, and the ray would appear as blocked. If **Stop On First Hit** is disabled, the ray will continue within its maximum distance until it hits an object that satisfies the specified conditions.

You can also use [Raycast gizmo API](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/RaycastGizmo.md) to define the properties.

| Property | Type | Description |
| --- | --- | --- |
| Collide With | `Players`, `Objects Tagged`, or `Both` | Sets which [collision layer(s)](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/LayerType.md) the raycast will interact with. |
| Object Tag | `string` | When the **Collide With** property is **Objects Tagged** or **Both** this specifies which [entity tag](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md#properties) the raycast will activate on. |
| Raycast Distance | `number` | The maximum distance, in meters, that the ray should travel before concluding it didn’t hit anything. |
| Stop On First Hit | boolean | When enabled, the raycast stops upon colliding with the first object. |

Raycast gizmos are referenced using the [as()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md#methods) method, for example:

```
    const laserGizmo = this.props.laserProjector.as(RaycastGizmo);
```

The result of the raycast collision is [RaycastHit](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/RaycastHit.md) with the [target types](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/RaycastTargetType.md), Entity, Player, and Static, during the raycast collision.

## What’s next?

Try the following tutorial worlds with code samples and related guides:

* [Simple shooting mechanics](/hw-mcp-tools/documentation/hw-docs/Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%204%20-%20Laser%20Gun.md#raycast-gizmo)
* [Use tap inputs to interact with a keypad](/hw-mcp-tools/documentation/hw-docs/Tutorials/Developing%20for%20Web%20and%20Mobile%20Players%20tutorial/Module%207C%20-%20Use%20tap%20inputs%20to%20interact%20with%20a%20keypad.md)
* [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#raycast-gizmo)