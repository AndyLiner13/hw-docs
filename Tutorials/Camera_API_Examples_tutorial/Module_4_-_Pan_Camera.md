# Module 4 - Pan Camera
...
## Checkpoint

 In this module we explored using the Pan Camera to offset the player’s camera at
a specific position from the player, which enables interesting game mode
variations on mobile and web such as sidescrolling and top-down. Next, we explore Fixed Camera modes and use cases.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 4 - Pan Camera
...
## Checkpoint
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 4 - Pan Camera
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcamera-api-examples-tutorial%2Fmodule-4-pancamera%2F)
...
# Module 4 - Pan Camera

 The pan camera setting moves the player’s camera to follow their avatar at a
consistent offset. Having the camera follow the avatar gives a lot of creative
freedom for experimenting with different types of gameplay, and allows for
sidescrolling, top-down and isometric influenced gameplay. In this tutorial, climbing the steps switches the camera to pan camera mode, and
...
...
# Module 4 - Pan Camera
...
sets the camera’s position to be 10 offset from the player on the X-axis. ![Sidescroller for Camera API Examples](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/481083958_662040649667223_5274211912720354602_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=2SKl3vD2W-QQ7kNvwG3hjip&_nc_oc=AdnnB97J-cyTKA4CEt2bN48zQx8vKg26A3bwukCXQB33DHVspW9RRqlqzW4l_Gmaffk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5P8SQS3ooRAPz_rN81NmFg&oh=00_A...
...
# Module 4 - Pan Camera
...
 Entering the top-down area also switches the camera to pan mode, but notice that
we have set the camera’s position to be 20 units offset from the player on the
...
...
# Module 4 - Pan Camera
...
Y-axis, which gives a top-down perspective. ![Top-down for Camera API Examples](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481919765_662040659667222_299852821914515850_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=c8_85bQQ_t4Q7kNvwGOaz0x&_nc_oc=AdlD_Z3sw8poGygSe0pygSQZJgCpWv9AxCIk3VR1227N1AY42xldGZAal3nuE9V_93A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5P8SQS3ooRAPz_rN81NmFg&oh=00_AfeMu22ZWPOhq_g7_djtXi4wf2QN...
...
# Module 4 - Pan Camera
...
 The PanCameraTrigger.ts script is essentially an extension of the CameraTrigger
script with some additional properties:
|  |
|  |
| cameraOffset | The camera’s offset from the player’s avatar in Vec3 format. Note that the camera will always target the player’s avatar at the center of the frame. If not set the default value in this tutorial is (2, 0, 0). |
| translationSpeed | The speed the camera can move, decoupled from the avatar’s speed. This allows for smoother camera transition when the player starts and ends their movement. If not set, the default value in this tutorial is 4.0. |
| collisionsEnabled | Whether the camera should collide with objects in the world. If set to true, the camera will move closer to the player when there is an obstacle to its position with the offset. If set to false, the camera will ignore obstacles in the world, passing through them or behind them to maintain its offset position. |
...
...
# Module 4 - Pan Camera
...
 When a player enters the Trigger Zone, the SetCameraCollisions and SetCameraPan
events are emitted, which are received by the `PlayerCamera.ts` script. In `PlayerCamera.ts`:
• A listener for `SetCameraCollisions` triggers a call to the `setCameraCollisions()` function.
• A listener for `SetCameraPan` triggers a call to the `setCameraPan()` function.

 For more information on parameters of this event and the above functions, see [Module 2 - PlayerCamera Overview](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/camera-api-examples-tutorial/module-2-playercamera-overview).  
## Checkpoint
...
## Additional Links
...
      Learn
# Module 4 - Pan Camera
...
