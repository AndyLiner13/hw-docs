Source: https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/optimizing-for-fullbodied-avatars-in-horizon-worlds

# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds

Legs are a highly requested feature in Meta Horizon Worlds, and we need your help to make sure everyone has the best experience possible!

We are continuing to iterate on and improve this new feature and will be rolling out more updates in the coming months, including future gizmos and attributes.

In the meantime, we have compiled some common interactions we recommend testing in your worlds, along with suggestions for how you can optimize the user experience.

## Sitting

We are planning to create a feature that allows users to sit down on designated objects, however, this functionality will not be available for the initial release. If your world includes objects like chairs, couches, benches, etc. that act as a place for users to sit down, you will have the option to toggle the collider button on or off for an object. If the collider button is on, instead of sitting down, users will stand on top of the object.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452955956_512524657952157_7212687131136946060_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=cWYEGqnsqYYQ7kNvwEROa6z&_nc_oc=AdnV4Zj5il5zgk5cp11dGOo2yoSEt8KLoIiAYQCOV3qloFxW2-AcO0XHiCCXPrriewM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=08pSqO4ixVBmENweiHh3XA&oh=00_AfiAtN1Rc_vmNMoX8sPybg31rsEtt1Rb-ZOzAQDP84Sidg&oe=692BE30A)

**Option 1:** We recommend keeping the collider toggle off for objects that moonlight as a place to sit down. This will result in the users’ legs going through the object keeping the same height and line of sight that users previously had when they hover over objects.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75207242_562279153227418_599634313314509174_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ps6cQFIX_scQ7kNvwEOJo0L&_nc_oc=AdkaKM9g84ZMZCRE9sYuUOVUdADKVJJmifK6wqVm433lh1i_STKVUsuQO9edct0wL2E&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfjneRvwgpsk3QmXY72Ypd7J8m-rhclAcFkJ7w0L0N9nuQ&oe=692BFD47)![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982610_542616035054591_8643514275666338455_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8_gl6TaHhUMQ7kNvwHB1YRr&_nc_oc=AdmkdLSzukKlRUl2Ss9-QD5r3AjYXcPUFCXcMzLXwW7cASGT32y9Uo44qbLLd8sSMxs&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhBRa0DUI60e1q87rmhfp1vR26hWdlZnpOPdafkYEhaCg&oe=692BE50C)

Along with the recommendation of keeping colliders off for objects meant for seating, you can modify objects to cover the entire lower parts of the avatar’s bodies. This hides the avatar legs going through the object which can help with the overall aesthetic experience of your world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452877644_512524711285485_7785913168880931089_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yl_J9fsfgjEQ7kNvwE3-G1P&_nc_oc=Admu3c4x34ziN9iDYGoivKGnB0ocMugK2j28dAkQ12gQ7Vqa34GZUgWYs0HihQ3U4ag&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=08pSqO4ixVBmENweiHh3XA&oh=00_AfhMdv-bCVNmIP8itPfZwlk91OOFFBOB-kMlE8n_KgkEuw&oe=692BFC0B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452513279_512524654618824_1566021560621853229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=wJI_Fgzkeb0Q7kNvwF1P7oY&_nc_oc=Adl158ZgotamgnNkxsBcE3JF7kaMUujTePd-rsI_rYRiI613NHLQQvfRkblA_NITeJk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=08pSqO4ixVBmENweiHh3XA&oh=00_Afi5qaRL7u4Xo_2N4ha785VhK23K_XrlJep9u5_06EVvgg&oe=692BE304)

**Option 2:** Alternatively, you can remove seating objects entirely, and convert tables into high top tables or high top bars and remove seats.

*![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452671989_512524651285491_369048775729201604_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ap2_9zkcZakQ7kNvwF3d5MI&_nc_oc=AdnxZsB0M-ie32vUobTksVNRrp-7Dysoe4vzhjXwbMVisnmagupO0etbq8EWCMaxcys&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=08pSqO4ixVBmENweiHh3XA&oh=00_AfjfiDJEWJGw0aGI_u6pwD45L-Q75VZVo5HD2oSeHs7zqw&oe=692C0B70)*

### Clipping of Feet on Ramps and Stairs

Feet may clip when walking on ramps and stairs that use an (invisible) ramp as a collider. Adjust colliders to prevent clipping of feet into stairs, ramps or the ground. This may also help ensure drop shadows show up consistently across worlds.

**Option 1:** Move the (invisible) collider ramp up so that feet don’t clip, but this might create some floating feet.

**Option 2:** Remove the invisible ramp collider and turn on collisions for individual stairs. Make sure the height between stairs is low enough that users don’t need to jump to go up them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75221323_871126325010914_1249234752214974528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HoKBaFIfDRkQ7kNvwEQfidD&_nc_oc=Adk2Ld-_PtqDRlKtR0ja9ypyu5e-xzOdGQj6hmxHfe55qchhAvzaKHSyboEfUxVVv00&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afjtd1clOl9XsHaxufzbh0PSHIc2SzOhcZ-WQk58HutTgA&oe=692C0273)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39031387_1126158859510461_3379014022272679256_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CwnJ75uXQBgQ7kNvwFFCBp2&_nc_oc=AdnG34IdxhbgOQyCqhIxKckPjfjP3KyJDjMWxCsj2oQh6GmJ4wg_1KPugVJhb39rb3k&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afha8aq1AOAURLWSg4tddsj-ursYCM9fzvO9QKSKXcisnQ&oe=692C0468)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974721_534714159465403_1403686194185599494_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=LnJX516EeggQ7kNvwGjLbW9&_nc_oc=AdkcQ911ulIKMQ0nPxNKWTdXOHhRVSfs_XcfBmxrUEoqJQZ-TbZWP95L96K-FkeJUrg&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfjdQIxSmYwCAUwVJ9enDAkS_SwXoEwBSAWH4Hpa7RvSYA&oe=692BF971)

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