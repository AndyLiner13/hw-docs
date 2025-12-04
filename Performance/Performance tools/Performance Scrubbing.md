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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452532074_512527651285191_8177576968897515344_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=kHFKSqQstkIQ7kNvwGzohXz&_nc_oc=Adki2OA93F7nCT39a743y8XuoKvM09zOunc6qU3ZIPP3C7mHygSg1fwkZFX7WRfiu2I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfnaCOPdUYeWL7iLyWO7bfSf_24ZzZAbWyXpLl4m4bbA-A&oe=694BE7B5)
- Travel to a world that you can use as a test, such as Super Rumble or Arena Clash.
- After it loads, look at your avatar’s wrist. Turn your wrist to make the wearable appear. This  wearable is a hands-free tablet-like device that displays the **Utilities** menu.
- On the **Utilities** menu, select **Real-time metrics**. The **Real-time Performance Metrics** panel will then open.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452701462_512527674618522_722303316862230619_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FVVAKcWEjwYQ7kNvwGb6_Dy&_nc_oc=AdkhVg4Q2ArVdlsoPDYKM6TLVWKP8ibYBTOIqQ0YYsk_X08Dp9-Q5DHCLi1hHlH_3MQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfltZ9xYwWloLKOlvjo0koX495R1IkSiJwI7_3y3CqrrSg&oe=694BD6E7)
- Perform an action to start compiling metrics that you can analyze. For example, you could pick up a weapon and shoot it, use your Super Power, or shoot a drone. As a result, you might see spikes in some of the real-time graphs or other details indicating activity.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814680_512527671285189_2521814497190586262_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RVIAnKwrNAEQ7kNvwF-0ge5&_nc_oc=Adns5G2NJumGefwM6qIP7YterWI5iUd2P79Fpvd2dp--rA-4B7SypNisGEFC6wt1q-Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfnEQyijTM_aK6e_xijaXd22noGkpxUqtR1fFPSIMJmaDQ&oe=694BE670)
- After you’ve put some data into the **Performance Metrics** panel, select the **Inspect** button, and scroll down to see the available metrics. Notice that spikes from the real-time graph  also appear here.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589609_512527667951856_3972198912793986595_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=6iqKi1Gyt_YQ7kNvwHXXBgR&_nc_oc=Adn_NGQvsBu4u0KN1JluPhiQZd4unmSmyYsMbpKStEIoHivAmK5Z1_93fNFQuRwkusw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfmJW3bzZpWdv-fBPc6cetBrssp1OJV4qnyDs641xeoF8A&oe=694BE07A)
- Now you can use scrubbing to evaluate the data to identify where the performance problems are coming from. Here’s how to use scrubbing to test performance issues:

  - Adjust the viewing range by clicking and dragging the sides of the blue range selector in the **Frame Time** header graph. This will change the data displayed in the graph.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452485848_512527644618525_1671174476556124032_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=JePtwkDgDcgQ7kNvwEn04Dk&_nc_oc=AdlQvxlPFvzoPFnisL-szWir19cy4aON2uM_k65RAMN8ryhHlCcUAteX0uiEbUfmFTk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_Afk-BkuJQ02GVNtIovhXgrOiiq1wEG7egRYTFBF285gOvg&oe=694BDC70)
  - Move the range selection without changing its size by hovering over the middle of the blue range selector and grabbing and dragging it. This will change how the data is displayed in the graph.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452934094_512527661285190_955464009422810835_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=r0OhA-KwfiAQ7kNvwEY-ATd&_nc_oc=AdmITWpKSQup6K84up9-qW0GKKjRNOC5ZQibR38VP-7nSCHESSK6DTt39PdevzYmjts&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfmnggAk1jlh8b7gjXSgb_3C1yqa6Lh_CKODdinbPvnJLg&oe=694BCA6F)
  - Reduce the vertical height of the graphs to allow for more graphs in one view by clicking on the metric metadata next to the graphs.
    ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452751750_512527641285192_9124308518466871664_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=d9tIcUD3ge8Q7kNvwESdbYj&_nc_oc=AdkpY87iOozlRUUzD3IE-N-cn4vFQ0VooTJRQmQzaK2FeCia-3i-6hLzEtYrkM5_kUk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_Aflfuc917cmdTt5QeRyNtecoMaR2L737iDZQ5eUB8-R66g&oe=694BCBE6)
  - View the value of all metrics at that frame by clicking a frame in the graphs in the metrics list.
  - To move forward and backward by a set number of frames, use the **Forward** and **Backward** buttons above the graphs.
    ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452694024_512527647951858_1112702379597418669_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=jMVLFQ9T1gEQ7kNvwGenI-U&_nc_oc=Adk0azxQa1G42sCKzwCNU_jSavgKiLHa6INA0ciamfzcozsdi5IgnahYSlukNboNAuc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=UbJahZNBi7ini1Qy9omoPQ&oh=00_AfmTiv-UHhKZhTSqJChhwIO9BUmvGyOkZiQgeMqCg6jeqA&oe=694BD55A)
  - Move a graph around your view by grabbing the white bar beneath the panel.
- When you’ve finished analyzing the data, you can return to the **Performance Metrics** panel again by clicking the **Back** button, or you can close the performance tools entirely by clicking **X**.