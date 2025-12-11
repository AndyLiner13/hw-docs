Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing

# Performance Scrubbing

Horizon’s scrubbing feature enables you to analyze performance events in your world. This testing procedure will help you identify events that are causing slowdowns and will provide important clues on what to do. Scrubbing can help you solve performance problems by making it possible to selectively step through and analyze graphical data displayed in the Performance Metrics panel. This data includes metrics for frame time (FPS), GPU time, scripting, physics workload, other users building in Horizon, and more. These graphs are compiled from the last several thousand frames, about 30 seconds while playing at target FPS. Scrubbing adds the ability to inspect the graphs and test the data in the following ways:

* Select a range of frames from the total recorded.
* Move and resize the selected range.
* For all metrics, select an individual frame to see the value at that frame.
* Determine which metrics are above their target value, including when that happened.
* Expand metrics to see metadata, such as the average, minimum, maximum, and target values.

This scrubbing procedure can be done from within Virtual Reality (VR). You don’t have to take off your VR headset, and you don’t have to use passthrough. This will allow you to analyze and test performance and regressions easier and more efficiently.

## Use case

You’re testing a new weapon in your world, so you have the real time metrics panel open. When you fire the weapon, you notice that your frame time graph spikes, revealing a slow down in your world’s performance. To find out why this may have happened, you click “inspect” and open the scrubbing panel. You look for the spike in frame time, adjusting the scrubber to highlight the frame where it occurred. You scroll through other metrics, noticing that there is a spike in the scripting metric. Scrubbing has given you a clue that you should check the scripts for the new weapon and work on their performance to fix the spike.

## How to perform a scrubbing test

Follow this procedure to perform a scrubbing test to analyze the data provided in the **Real-time Performance Metrics** panel:

- Open the **Personal UI** (PUI).
- Click **Settings**.
- Select the **Utilities** menu if it’s not already on.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532074_512527651285191_8177576968897515344_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ll9EW00SWMcQ7kNvwHsXR7O&_nc_oc=AdkFEndS2SGH52m2RumAuAkVZtuD5us9nZc3ugkqU_150i_AZL_rAkvO6dlZekFhCyLX1iYfruozohVa0kfA2BCi&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfnHWcsCXEITkC9uGJ1UxYtmzdZVxRKFqpbqYLXT3_wzdA&oe=695592B5)
- Travel to a world that you can use as a test, such as Super Rumble or Arena Clash.
- After it loads, look at your avatar’s wrist. Turn your wrist to make the wearable appear. This  wearable is a hands-free tablet-like device that displays the **Utilities** menu.
- On the **Utilities** menu, select **Real-time metrics**. The **Real-time Performance Metrics** panel will then open.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701462_512527674618522_722303316862230619_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kkJmNOJMZLoQ7kNvwGlCbqQ&_nc_oc=Adk7VK6jE2Up09n2Ar-0dUwsZp157qbYVnJcyaOmSvXUBseV6p1lBSeWEQB-vgIzMvxRVensUyzwAT-GCHnE6fOn&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfnkFLO3hhx2CqaV3T2EQPNyfEXaYMycFl0Glzdmo6O_eA&oe=695581E7)
- Perform an action to start compiling metrics that you can analyze. For example, you could pick up a weapon and shoot it, use your Super Power, or shoot a drone. As a result, you might see spikes in some of the real-time graphs or other details indicating activity.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814680_512527671285189_2521814497190586262_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=MkRQ4_qOOQQQ7kNvwEARSfI&_nc_oc=Adko9jeOQNHH2FmGfbApMYCXHhxAqxMSLK-e2RSZfzefAA_9gMtJaJKAiAN0-HpTjKgOHuhjiNbqbvf8vGBk33oB&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AflZk4tw9kgfcVuTpK9HyQX9a3FfzLP9K54ynjOePk3cLA&oe=69559170)
- After you’ve put some data into the **Performance Metrics** panel, select the **Inspect** button, and scroll down to see the available metrics. Notice that spikes from the real-time graph  also appear here.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589609_512527667951856_3972198912793986595_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=2DkjBpNZkR4Q7kNvwEP_riE&_nc_oc=AdkEZPIb3dB6Pfhqt1yCtNdkCkA5gCW-NXihHQgLZr1J2P83jhuTNk7eBdHIMpPtEDS8CIr_jR9JAKpovn-Hbfak&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AflUpnid3497d4Xf6Ou1H2RrGYG45dDOlNRoi2Ly1o_wkQ&oe=69558B7A)
- Now you can use scrubbing to evaluate the data to identify where the performance problems are coming from. Here’s how to use scrubbing to test performance issues:

  - Adjust the viewing range by clicking and dragging the sides of the blue range selector in the **Frame Time** header graph. This will change the data displayed in the graph.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452485848_512527644618525_1671174476556124032_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=jlsbyt_brd8Q7kNvwHUarq4&_nc_oc=AdlP9BKQ51yk-nVBTe0zzfl-pPv-sXDdwYxr7IYzA1GLcJLQJdhlnZWS3j692avhtFZYEMO80AGfzGe9aTQUm5RP&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfnBlLqDatHBtIWz2S1FuddJd5JtQchzmiAaVtChn9lmoQ&oe=69558770)
  - Move the range selection without changing its size by hovering over the middle of the blue range selector and grabbing and dragging it. This will change how the data is displayed in the graph.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452934094_512527661285190_955464009422810835_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=X_UxJ6rfx7AQ7kNvwFo1WXo&_nc_oc=Adl29yZq72kCoj8fQSQcEtRQWNYvwZg3hiEHYLM2kuda_OqamOtJ7Vr-ncf02HHT0mkqhpxM5nZnfXeeb2X3IOUz&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfmOIrsaDD2pkiB_oN3ALVzEIjL9a5T3Oh_X-TYSZc_dVw&oe=6955756F)
  - Reduce the vertical height of the graphs to allow for more graphs in one view by clicking on the metric metadata next to the graphs.
    ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751750_512527641285192_9124308518466871664_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=kObTMu9eLQwQ7kNvwFo_YQD&_nc_oc=Adk75uur3CLLwhrvSxzfkVukmBe_nCpHPWKNYHbzafRfHpQOhmBTCgqeGWuo5KYqdccFIgDC5InuRqk9QdyuePDt&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfmvZndUVc3xCmH2kW677R-sDGc53qB9JnUlEIgpWIHU2w&oe=695576E6)
  - View the value of all metrics at that frame by clicking a frame in the graphs in the metrics list.
  - To move forward and backward by a set number of frames, use the **Forward** and **Backward** buttons above the graphs.
    ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452694024_512527647951858_1112702379597418669_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=8yyRZ_9sltYQ7kNvwHjHYU6&_nc_oc=Adk60xgfXADrmht6n3T1XBHwq50cl6FkmzvyIHEwwo59Z9Sqz76SCCJrF8co-1aHgS-Y932jlkDo3t70CeJUmUKk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=LHNRuc82IbBbFSEXuX6ITA&oh=00_AfkfBghSHhdFZpt5LMlQJKXq0OzGzp39dZeu9eshjKQyHg&oe=6955805A)
  - Move a graph around your view by grabbing the white bar beneath the panel.
- When you’ve finished analyzing the data, you can return to the **Performance Metrics** panel again by clicking the **Back** button, or you can close the performance tools entirely by clicking **X**.