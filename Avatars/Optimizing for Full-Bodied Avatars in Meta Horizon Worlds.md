Source: https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/optimizing-for-fullbodied-avatars-in-horizon-worlds

# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds

Legs are a highly requested feature in Meta Horizon Worlds, and we need your help to make sure everyone has the best experience possible!

We are continuing to iterate on and improve this new feature and will be rolling out more updates in the coming months, including future gizmos and attributes.

In the meantime, we have compiled some common interactions we recommend testing in your worlds, along with suggestions for how you can optimize the user experience.

## Sitting

We are planning to create a feature that allows users to sit down on designated objects, however, this functionality will not be available for the initial release. If your world includes objects like chairs, couches, benches, etc. that act as a place for users to sit down, you will have the option to toggle the collider button on or off for an object. If the collider button is on, instead of sitting down, users will stand on top of the object.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452955956_512524657952157_7212687131136946060_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=6q0-mUjJF5sQ7kNvwG1o5w1&_nc_oc=AdlvAquFuPMJkkUE3l8PS7zmxIPSfwclNNHUDUT0Zd2FDsN2KjtYA2ZUv6ltzW1TlXc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=mrGVwN6y-ytpOH5E-R3rJA&oh=00_AfhT_isM2oaYB7Kv_j9vLNiKOLlTGfgAieFhWYnB5GxBYQ&oe=6931290A)

**Option 1:** We recommend keeping the collider toggle off for objects that moonlight as a place to sit down. This will result in the users’ legs going through the object keeping the same height and line of sight that users previously had when they hover over objects.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75207242_562279153227418_599634313314509174_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=J7KhmCACIKsQ7kNvwHS4vGa&_nc_oc=AdkjV9sKbzdchC5wrKSBCkHyxFJ41YwmDxM93IbQXtoKBsWTgR9kVzQB1OG1FPR4j2o&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfiehrgDwCuLgG0uf93MW9cXyPjJK8jZFEaFKyeVSFtm6A&oe=69314347)![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982610_542616035054591_8643514275666338455_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=dCry46WmUF4Q7kNvwFKAsc4&_nc_oc=AdkFG31DAMl49lT_Nqp_2Ns1EdXGjhZBTbZXq8SSbIZnXPgsGjbKi2sLBTu-Q-E7DOE&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfiTPswR7R6QhPVAw6g0ZWak3uofkrqgrKBPf9hUhxbVAw&oe=69312B0C)

Along with the recommendation of keeping colliders off for objects meant for seating, you can modify objects to cover the entire lower parts of the avatar’s bodies. This hides the avatar legs going through the object which can help with the overall aesthetic experience of your world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452877644_512524711285485_7785913168880931089_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=S1kQF_dFN1cQ7kNvwHW3PQx&_nc_oc=AdlQYAzJ2XeeGNmeL0zotrUcFzGr7IHrfE4CgmKWxfNx2wZ5Hir1MsyKR4PUFcmfW5c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mrGVwN6y-ytpOH5E-R3rJA&oh=00_Afis8mpMqEsKZ5QW7-GSea5Gmg_foy-qUcnKlSw8taovBw&oe=6931420B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452513279_512524654618824_1566021560621853229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ppTIh1_h9ocQ7kNvwEe6UxI&_nc_oc=AdlPpyomkbis1-goaikk9tIha54SttnqmVYtwnEVM7W8SwGkun2_qw9Sk7u4yrkGXcc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=mrGVwN6y-ytpOH5E-R3rJA&oh=00_AfgUOsI34m0Q2z63JQLQMwduemkMrjPvKHObn5DjzATyGQ&oe=69312904)

**Option 2:** Alternatively, you can remove seating objects entirely, and convert tables into high top tables or high top bars and remove seats.

*![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452671989_512524651285491_369048775729201604_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=WKIpd0mdnagQ7kNvwEz7Vqb&_nc_oc=AdlFiqf3n0IECeIZEndi1nwVWSMIh5fyuqQxTaKxmLuvLlSAzDzMRATBd_HffGFm1LE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=mrGVwN6y-ytpOH5E-R3rJA&oh=00_AfjQ09R3YoZc3VWFwrz82qdlakYWxT38UgtKw_dIFafUsw&oe=69311930)*

### Clipping of Feet on Ramps and Stairs

Feet may clip when walking on ramps and stairs that use an (invisible) ramp as a collider. Adjust colliders to prevent clipping of feet into stairs, ramps or the ground. This may also help ensure drop shadows show up consistently across worlds.

**Option 1:** Move the (invisible) collider ramp up so that feet don’t clip, but this might create some floating feet.

**Option 2:** Remove the invisible ramp collider and turn on collisions for individual stairs. Make sure the height between stairs is low enough that users don’t need to jump to go up them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75221323_871126325010914_1249234752214974528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=PtU8w5d33yYQ7kNvwHNX-ln&_nc_oc=AdkJrUfj_zuum1nPXHf9NvtAawEU4rpvlpxJiWawOvwm2Rv2YdYR96yEcLGQGsVbkOM&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfjjtW5yXj3ikRH7Y4PRwlwbh63WsUtPWGbaAj4dz4_TGw&oe=69314873)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39031387_1126158859510461_3379014022272679256_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=j9_Jqk4IzFAQ7kNvwHcJpxa&_nc_oc=AdmHEz67wpR0iyi6yeH7bIbAU4rmQSAy9n4Bu7JfvFs7fRXBHFsCUK4YB_0OwNkyQqQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfirqJYfuGIOrDXyCgcjWRPT1Y8BfFcxHte5kN5uSg7e8g&oe=69311228)![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974721_534714159465403_1403686194185599494_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bdf5NDjg958Q7kNvwHUVPlC&_nc_oc=AdkQk0CpjH-3ALH_zCa_L8wjMA7IlyQ5OiQLdzF5pOy0it3s5patSqvg9SXrVNByAPQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfgZCl_8dtL8jmjLucq1UBEtoFI0Fe_g9TGHGs2qJYSm3g&oe=69313F71)

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