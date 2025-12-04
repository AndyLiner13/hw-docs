Source: https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/optimizing-for-fullbodied-avatars-in-horizon-worlds

# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds

Legs are a highly requested feature in Meta Horizon Worlds, and we need your help to make sure everyone has the best experience possible!

We are continuing to iterate on and improve this new feature and will be rolling out more updates in the coming months, including future gizmos and attributes.

In the meantime, we have compiled some common interactions we recommend testing in your worlds, along with suggestions for how you can optimize the user experience.

## Sitting

We are planning to create a feature that allows users to sit down on designated objects, however, this functionality will not be available for the initial release. If your world includes objects like chairs, couches, benches, etc. that act as a place for users to sit down, you will have the option to toggle the collider button on or off for an object. If the collider button is on, instead of sitting down, users will stand on top of the object.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452955956_512524657952157_7212687131136946060_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=iCggIAnpHF4Q7kNvwHW5Ln2&_nc_oc=AdmOs1BrW-NZguaJwtVnCBKujYN7YLEA4VL7FEmHmHY08pi_AWJ3EjAbKTnlrV9NsKY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=p3PmUItbS44jbyMh-5Om1g&oh=00_AfmKRxYbMtNHgPj7Qm6e3fRoH5kayeA7eQodq8UGqyXqIQ&oe=694BBF4A)

**Option 1:** We recommend keeping the collider toggle off for objects that moonlight as a place to sit down. This will result in the users’ legs going through the object keeping the same height and line of sight that users previously had when they hover over objects.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75207242_562279153227418_599634313314509174_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7A3Z1v34Iv0Q7kNvwEQoSrP&_nc_oc=AdkHk-KxiQpTMDr6TpxZi3CbjnqSOECoDbKs_RQnMvx38fPFOuqJ9BnARHqtEch8AVk&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afnvq4NlHZvHJX4HVsR5s1F3CXWVo7itGyuHsTBrOesa9g&oe=694BD987)![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982610_542616035054591_8643514275666338455_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=AJjrlCWkvL4Q7kNvwEjQxHT&_nc_oc=AdnHdzeQbEwWrYBpxxL8NLaBAqh2124xyjaPgRYYHt-MjzV1kMAS8F7ifjzY4lcDH8I&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afk6D8D4PWxg4QfPueFg1BKTRhBr6EF1-bRg8kt-0Uv9JQ&oe=694BC14C)

Along with the recommendation of keeping colliders off for objects meant for seating, you can modify objects to cover the entire lower parts of the avatar’s bodies. This hides the avatar legs going through the object which can help with the overall aesthetic experience of your world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452877644_512524711285485_7785913168880931089_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=f8CQAM04oKYQ7kNvwEXiv2C&_nc_oc=Adm44ZPGTd-H89OzpjuvcK7uSx85VM9v_JtBbQm9R7TMT3w5hKXH20R8T17mh8Kq_HY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=p3PmUItbS44jbyMh-5Om1g&oh=00_AfnjXz-83ZiWMI3PWKiuF-b0VcZjTs9ZFHS_qq-d8bRaZQ&oe=694BD84B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452513279_512524654618824_1566021560621853229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=0rgiAFqrlsEQ7kNvwGQdcC8&_nc_oc=Adl6xPZ7mEmBKvAYuIVRaEA03cO1T_G7bsxepiWDqVXFvu30Ek76OQ6P_YSe2cp-h5o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=p3PmUItbS44jbyMh-5Om1g&oh=00_AfnBQhNOQR22ETYQJeU7zdoq7OwoSeOsUMTAjbrvv1X7Ig&oe=694BBF44)

**Option 2:** Alternatively, you can remove seating objects entirely, and convert tables into high top tables or high top bars and remove seats.

*![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452671989_512524651285491_369048775729201604_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4EsWq2SnVDoQ7kNvwELAG5O&_nc_oc=AdlBVMMljK3-NUE7VQ5I1pey19XstUsWgqTh3DZ0foUgoMO7O1ya56PvxjV5Pt7JJ9E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=p3PmUItbS44jbyMh-5Om1g&oh=00_Afn5qz7BQ7tbEv2aD8-rYo9nKtzoQOUJIiQ4n0EDZgFVpQ&oe=694BE7B0)*

### Clipping of Feet on Ramps and Stairs

Feet may clip when walking on ramps and stairs that use an (invisible) ramp as a collider. Adjust colliders to prevent clipping of feet into stairs, ramps or the ground. This may also help ensure drop shadows show up consistently across worlds.

**Option 1:** Move the (invisible) collider ramp up so that feet don’t clip, but this might create some floating feet.

**Option 2:** Remove the invisible ramp collider and turn on collisions for individual stairs. Make sure the height between stairs is low enough that users don’t need to jump to go up them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75221323_871126325010914_1249234752214974528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_Wpmyf8d33EQ7kNvwHegzug&_nc_oc=AdmyP88il6YAJMaG9jBjKoMGUfVEQcX0cOH1XYkGzXUjcOm93lPEguimkiDUgGY82KA&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AflvmHrMAfZAFqxLsO3oJNIzm-Tlym3DnXfyrCY8cUEULA&oe=694BDEB3)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39031387_1126158859510461_3379014022272679256_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WkEFKurr_TAQ7kNvwFwqsNY&_nc_oc=AdksGQETCQoPjTOeloaBcsF15fRs3XBWVewha14krRys9zxUwpsPp0X7hipD9JgKNNw&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AflYlplwBFQv1eyfDfDgp8zJZnVKzICjXr7tFGNNrqNR5g&oe=694BE0A8)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974721_534714159465403_1403686194185599494_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=LRw1Jy1EIzkQ7kNvwFsSn4M&_nc_oc=AdnIxa6KVabd6Xa4nzpVu9RVyjqe-SsH4CShn6zayQUvsMzlM6mbpMIYzXpdHAgiie0&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Aflhe1IhmxJSxPA0-aV-gTGq5myy58bDGE7lEXTpiE8AEg&oe=694BD5B1)

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