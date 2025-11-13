Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/camera-api-examples-tutorial/module-4-pancamera

Learn

# Module 4 - Pan Camera

The pan camera setting moves the player’s camera to follow their avatar at a consistent offset. Having the camera follow the avatar gives a lot of creative freedom for experimenting with different types of gameplay, and allows for sidescrolling, top-down and isometric influenced gameplay.

In this tutorial, climbing the steps switches the camera to pan camera mode, and sets the camera’s position to be 10 offset from the player on the X-axis.

![Sidescroller for Camera API Examples](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481083958_662040649667223_5274211912720354602_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3-NGOcnjT9oQ7kNvwGsxLbH&_nc_oc=Adl7v4hwnCOe3m0o509f1VDjpa038sLXr2nTB4RcTIM0CU5rDFRX7HgzgPGZm8CHjSI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=g3CzrQxS37eRGjjxr0DRqw&oh=00_AfjHsbI98GBdSm22yqg_N-rtdgoz2gJSp9QD0cAVzjG3fw&oe=692FC43E)

Entering the top-down area also switches the camera to pan mode, but notice that we have set the camera’s position to be 20 units offset from the player on the Y-axis, which gives a top-down perspective.

![Top-down for Camera API Examples](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481919765_662040659667222_299852821914515850_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RIQmDFkgRwsQ7kNvwHWfHD_&_nc_oc=AdlFWhWPph8FRBw-YBfuIxhq9a1NECHRha2jy3P_Fs7ajuxh1JuUoULfnFlNtIiqXf4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=g3CzrQxS37eRGjjxr0DRqw&oh=00_AfjBaeFe6mn5eKEXsrvyly00_Wqu3q9htp61_76gH7_dug&oe=692FB6CC)

The PanCameraTrigger.ts script is essentially an extension of the CameraTrigger script with some additional properties:

| Parameter | Description |
| --- | --- |
| `cameraOffset` | The camera’s offset from the player’s avatar in Vec3 format. Note that the camera will always target the player’s avatar at the center of the frame.   If not set the default value in this tutorial is `(2, 0, 0)`. |
| `translationSpeed` | The speed the camera can move, decoupled from the avatar’s speed. This allows for smoother camera transition when the player starts and ends their movement.   If not set, the default value in this tutorial is `4.0`. |
| `collisionsEnabled` | Whether the camera should collide with objects in the world.   If set to `true`, the camera will move closer to the player when there is an obstacle to its position with the offset.   If set to `false`, the camera will ignore obstacles in the world, passing through them or behind them to maintain its offset position. |

When a player enters the Trigger Zone, the SetCameraCollisions and SetCameraPan events are emitted, which are received by the `PlayerCamera.ts` script. In `PlayerCamera.ts`:

* A listener for `SetCameraCollisions` triggers a call to the `setCameraCollisions()` function.
* A listener for `SetCameraPan` triggers a call to the `setCameraPan()` function.

For more information on parameters of this event and the above functions, see [Module 2 - PlayerCamera Overview](/hw-docs/Tutorials/Camera%20API%20Examples%20tutorial/Module%202%20-%20PlayerCamera%20Overview.md).

## Checkpoint

In this module we explored using the Pan Camera to offset the player’s camera at a specific position from the player, which enables interesting game mode variations on mobile and web such as sidescrolling and top-down.

Next, we explore Fixed Camera modes and use cases.