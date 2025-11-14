Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/text-as-asset-tutorial-world/module-4-using-text-assets-for-timed-events

# Module 4 - Using Text assets for timed events

Text assets can be used for creating dynamic events, which may be based on real-world time or events. For example, you can change your world to reflect a New Year’s theme or a National holiday theme. By having events defined in a Text asset, you can easily swap content in and out, without having to modify the world code and republish the world.

![Image of Station 3, which features changing visual effects based on a timer](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488911569_688927726978515_7350071375437133074_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=dGdfrRn8oukQ7kNvwFVBY8t&_nc_oc=AdmrsKqHKfWc1Fl6eGeup32RyrzZ2TOeXRDxhyCdmA1FEr0JGFczsI7fMVn2aPnl2r4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WFzJcRUjxseJJL9yBLhMPw&oh=00_AfjinEsgDz_sRgpqaBsqlceXcUjmrP-hApmeeLqqmDJbVg&oe=69313826)

**How to use this module**:

Look at the `TimeEventsManager` script and object. This example controls the world based on the number of seconds in the current minute. Relevant to games, for example, you can control the entire layout of your world during a holiday event by structuring the configuration inside a JSON text file and loading the appropriate one.

**Tip**: In the script’s comments, you can see example JSON records in use for this station, which you can use as the basis for creating your own content for this station.