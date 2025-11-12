Source: https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/optimizing-for-fullbodied-avatars-in-horizon-worlds

Learn

# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds

Legs are a highly requested feature in Meta Horizon Worlds, and we need your help to make sure everyone has the best experience possible!

We are continuing to iterate on and improve this new feature and will be rolling out more updates in the coming months, including future gizmos and attributes.

In the meantime, we have compiled some common interactions we recommend testing in your worlds, along with suggestions for how you can optimize the user experience.

## Sitting

We are planning to create a feature that allows users to sit down on designated objects, however, this functionality will not be available for the initial release. If your world includes objects like chairs, couches, benches, etc. that act as a place for users to sit down, you will have the option to toggle the collider button on or off for an object. If the collider button is on, instead of sitting down, users will stand on top of the object.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452955956_512524657952157_7212687131136946060_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=cWYEGqnsqYYQ7kNvwEROa6z&_nc_oc=AdnV4Zj5il5zgk5cp11dGOo2yoSEt8KLoIiAYQCOV3qloFxW2-AcO0XHiCCXPrriewM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JTyIZ329zQvgZHuaNdP5fw&oh=00_AfjtpswKmD0JWTFWE_h6ObPtLaWuh5G7W9XO_bAE9dwL7g&oe=692EBE4A)

**Option 1:** We recommend keeping the collider toggle off for objects that moonlight as a place to sit down. This will result in the users’ legs going through the object keeping the same height and line of sight that users previously had when they hover over objects.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75207242_562279153227418_599634313314509174_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=xzDbWIDx9zgQ7kNvwFugaG2&_nc_oc=AdlGNqF7d1j2nf7JZKYuUynIxIpIBkT_69Jb5oPnbraTXFlke-3lneVtTdDIETJjpr0&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhVIUVjXQB9XdAhSYs-sq-9pXNsvRrABjbBrR8CDLCy0g&oe=692EA047)![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982610_542616035054591_8643514275666338455_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=n1oW4rviBZsQ7kNvwFMEYK5&_nc_oc=AdkMv_YWYeVL0WkEQPm0JZ9VE4iTjEcuNj_i3Uzb8V7jezPLI2H1Qd5QYdY3lGLPu6U&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfgrA5kQBdUa1GWCB-EAmmAB8S2vlBIudv-HBl7qYkEvaA&oe=692EC04C)

Along with the recommendation of keeping colliders off for objects meant for seating, you can modify objects to cover the entire lower parts of the avatar’s bodies. This hides the avatar legs going through the object which can help with the overall aesthetic experience of your world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452877644_512524711285485_7785913168880931089_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=S1kQF_dFN1cQ7kNvwHW3PQx&_nc_oc=AdlQYAzJ2XeeGNmeL0zotrUcFzGr7IHrfE4CgmKWxfNx2wZ5Hir1MsyKR4PUFcmfW5c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JTyIZ329zQvgZHuaNdP5fw&oh=00_AfgPv28GwU0ztbB8e5x6Oz218YTbWD9kxdhiCHFe_-N5uQ&oe=692E9F0B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452513279_512524654618824_1566021560621853229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ppTIh1_h9ocQ7kNvwEe6UxI&_nc_oc=AdlPpyomkbis1-goaikk9tIha54SttnqmVYtwnEVM7W8SwGkun2_qw9Sk7u4yrkGXcc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JTyIZ329zQvgZHuaNdP5fw&oh=00_AfgxISgp0S8bx9Ev2HEiWp1ZLEJ7DVN-fSkwMIxKd_Of1A&oe=692EBE44)

**Option 2:** Alternatively, you can remove seating objects entirely, and convert tables into high top tables or high top bars and remove seats.

*![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452671989_512524651285491_369048775729201604_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ap2_9zkcZakQ7kNvwF3d5MI&_nc_oc=AdnxZsB0M-ie32vUobTksVNRrp-7Dysoe4vzhjXwbMVisnmagupO0etbq8EWCMaxcys&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JTyIZ329zQvgZHuaNdP5fw&oh=00_AfgVR2he3n2byf0MzsGP8hUkx862Ox5ECE9pPyo_1kXDOw&oe=692EAE70)*

### Clipping of Feet on Ramps and Stairs

Feet may clip when walking on ramps and stairs that use an (invisible) ramp as a collider. Adjust colliders to prevent clipping of feet into stairs, ramps or the ground. This may also help ensure drop shadows show up consistently across worlds.

**Option 1:** Move the (invisible) collider ramp up so that feet don’t clip, but this might create some floating feet.

**Option 2:** Remove the invisible ramp collider and turn on collisions for individual stairs. Make sure the height between stairs is low enough that users don’t need to jump to go up them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75221323_871126325010914_1249234752214974528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cqc-x5-g_MoQ7kNvwHE6gR0&_nc_oc=AdlrdKtzrCCQheVzt3_3s2DSWoXQpoE2Ot345whS4c_Udo7Xk-8peiAtGDaodcaGzIU&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhGMwHxhRL8WSyhQN2UgXl9nrp5oUt_L7R1VB8paS9aYQ&oe=692EA573)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39031387_1126158859510461_3379014022272679256_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CwnJ75uXQBgQ7kNvwFFCBp2&_nc_oc=AdnG34IdxhbgOQyCqhIxKckPjfjP3KyJDjMWxCsj2oQh6GmJ4wg_1KPugVJhb39rb3k&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afj7lCCzGoy-E5CdcztCMcKiHADWTJugqkEVMIjhVDf9lQ&oe=692EA768)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974721_534714159465403_1403686194185599494_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bdf5NDjg958Q7kNvwHUVPlC&_nc_oc=AdkQk0CpjH-3ALH_zCa_L8wjMA7IlyQ5OiQLdzF5pOy0it3s5patSqvg9SXrVNByAPQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfigDrSeoJl7-ZtXN6ADKuH6e1BGISfnd8Bvqlaxkx9wxQ&oe=692E9C71)

### Frequently Asked Questions

* Can I share that I have early access to legs with users outside of the early access program?

  + No, please keep this information confidential.
* I can see everyone’s legs. Can people outside of early access see my legs too?

  + No, only people within the early access program can view legs. Think about it like having ‘legs glasses.’ You can see other users’ legs but they can not see your legs.
* Why can’t I see my own legs?

  + You may not be able to see your own legs when you look down but you are able to view them using the mirror or selfie camera.
* Will the addition of legs impact my world capacity?

  + Legs should have a minimal impact on world complexity / capacity.
* Can I assign a different damage value for legs?

  + This functionality is not supported at this time. Damage to legs will register the same as damage to torso.
* Am I able to create attachables for legs?

  + You are not able to create attachables for legs at this time but this functionality may be available with future updates.