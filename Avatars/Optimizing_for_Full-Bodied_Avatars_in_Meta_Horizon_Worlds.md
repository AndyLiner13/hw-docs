# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds

## Sitting

### Clipping of Feet on Ramps and Stairs

 Feet may clip when walking on ramps and stairs that use an (invisible) ramp as a
collider. Adjust colliders to prevent clipping of feet into stairs, ramps or
the ground. This may also help ensure drop shadows show up consistently across
worlds. Option 1: Move the (invisible) collider ramp up so that feet don’t clip, but this might
create some floating feet. Option 2: Remove the invisible ramp collider and turn on collisions for individual
stairs. Make sure the height between stairs is low enough that users don’t need to
jump to go up them.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75221323_871126325010914_1249234752214974528_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=B40vGESyxt8Q7kNvwESPZ3l&_nc_oc=AdmQBmuHBSAsPF6wR6_ZVJzUiz1cJnrUx2ZJc7IOYXkdb0V-wmZVItMswJHL3vMOk8I&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfcHuu9Hi5P4w...
![Image](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39031387_1126158859510461_3379014022272679256_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=wzH7GTMwsboQ7kNvwHxvesb&_nc_oc=AdkYKR4Skb8OPG-aocxsxlBxe1wRcXzo9qP2g_p3zh_PcACK8lA2yq-2EmBxAmvxzoo&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfehodjpZAoTJNBQSlKklJsliaUjtl...
![Image](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974721_534714159465403_1403686194185599494_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=e6hhaplonxMQ7kNvwH9PWtl&_nc_oc=AdnY7ILsgq-G9OsbEOXusIg2s4oR71yYj6PWUOlkzcFcpSJUDsn1zo4QCRYQZVqs9Rs&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfdxB_QvSE68jeiRmvJUgJ-ryUYGxA6...

### Frequently Asked Questions


•  Can I share that I have early access to legs with users outside of the early
access program?
  • No, please keep this information confidential.
•  I can see everyone’s legs. Can people outside of early access see my legs too?
  • No, only people within the early access program can view legs. Think about it
like having ‘legs glasses.’ You can see other users’ legs but they can not see
your legs.
•  Why can’t I see my own legs?
  • You may not be able to see your own legs when you look down but you are able to
view them using the mirror or selfie camera.
•  Will the addition of legs impact my world capacity?
  • Legs should have a minimal impact on world complexity / capacity.
•  Can I assign a different damage value for legs?
  • This functionality is not supported at this time. Damage to legs will register
the same as damage to torso.
•  Am I able to create attachables for legs?
  • You are not able to create attachables for legs at this time but this
functionality may be available with future updates.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
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

 We are planning to create a feature that allows users to sit down on designated
objects, however, this functionality will not be available for the initial
release. If your world includes objects like chairs, couches, benches, etc. that act
as a place for users to sit down, you will have the option to toggle the
collider button on or off for an object. If the collider button is on, instead of
sitting down, users will stand on top of the object. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452955956_512524657952157_7212687131136946060_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=9n8eHMhyeoUQ7kNvwHOCUiy&_nc_oc=AdnhlCmTMu_Xuzps_bA5sXb8YKck4JH3-AQk7yAREL0CPM05quu8APKf4whBD-aNC9w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=8FbC_txv02cBSVs6QrnNYw&oh=00_A...
 Option 1: We recommend keeping the collider toggle off for objects that moonlight as a
place to sit down. This will result in the users’ legs going through the object
keeping the same height and line of sight that users previously had when they
hover over objects.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75207242_562279153227418_599634313314509174_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=k2ZwXnexFHkQ7kNvwFuw7WM&_nc_oc=Adl_5SqhpL248nhiYP5v4X1X2-MRqmgWNlHFkFp68FLc1Kf1qdWSke7stxqRi-bXYkQ&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfdbkI4b2NOecOaiuGoObyKFq4bosPEaGGvyVPUeBk2...
![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982610_542616035054591_8643514275666338455_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=MQfg34o4AyIQ7kNvwEefW-J&_nc_oc=Adley1pmrMHVR88aQS_XmQZoASr8b3xvDLKzCAvE5xFydduFu8t5bPAPb3TxK85Wnhc&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfcJSU1ttYKHxbC5UiRBab2L07yLBVsXyC233UTqS4hAnA&oe...
 Along with the recommendation of keeping colliders off for objects meant for
seating, you can modify objects to cover the entire lower parts of the avatar’s
bodies. This hides the avatar legs going through the object which can help with the
overall aesthetic experience of your world. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452877644_512524711285485_7785913168880931089_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=HHJMaCjAJJwQ7kNvwFGpOM3&_nc_oc=Adm2OSuJDtlBMs4VNCID7rO4I3B3FiOX11wI9dee5Hs5zMmQryclGHlg0tshwR4XHeE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8FbC_txv02cBSVs6QrnNYw&oh=00_AfezYHQg...
 ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452513279_512524654618824_1566021560621853229_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=jFaZhun8xbsQ7kNvwHJFhoj&_nc_oc=AdkWupQMK2SA9Jm-5t9ALRQJxNGr3jSBioTGl5Zy_ISXcZUZPWCLh4bnq7afVXhu_lc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=8FbC_txv02cBSVs6QrnNYw&oh=00_Affvbxqa3FaTJ5NzKl...
 Option 2: Alternatively, you can remove seating objects entirely, and convert tables into
high top tables or high top bars and remove seats. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452671989_512524651285491_369048775729201604_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=aGBmm0OVTD4Q7kNvwGs-4o_&_nc_oc=AdlTR8XoAQ_2TzX5i_Sku2fRgTNriFax5Q3_ca24l6RmPDlnlpH3K6P2wqd9laz1KME&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=8FbC_txv02cBSVs6QrnNYw&oh=00_Afe-XKO...

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ffull-bodied-avatars%2Foptimizing-for-fullbodied-avatars-in-horizon-worlds%2F)

 Legs are a highly requested feature in Meta Horizon Worlds, and we need your
help to make sure everyone has the best experience possible! We are continuing to iterate on and improve this new feature and will be rolling
out more updates in the coming months, including future gizmos and attributes. In the meantime, we have compiled some common interactions we recommend testing
in your worlds, along with suggestions for how you can optimize the user
experience.  

## Additional Links
      Learn
# Optimizing for Full-Bodied Avatars in Meta Horizon Worlds
