Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

# World Content Traces

World content traces are a special type of [trace](Tracing.md) that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. World content traces include data on:

* 3D models
* Textures
* Audio assets
* Colliders
* Lights

Unlike other types of trace data, you’ll use the Desktop Editor to view and analyze world content traces.

## Prerequisites

* [Enable the Utilities Menu](Enable%20the%20Utilities%20menu.md)

## Start a world content trace

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing**, then select **World Content**.
- Select **Start tracing** to start the trace.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452627729_512538211284135_1680560941989953568_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=PNA9wfdrwjwQ7kNvwFOkfqm&_nc_oc=Adk2jdYp3xKN_TJW8eMrfHxjklQHIpzhmP65bbSBLvlf_2-kTGwU_i4fOKXRWVBEyAVcTQ02SGBO97bS0fKYvzKH&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfnEh03Jnbr0lv7OJA0BKvSSlx4L4L77QWYuZDDpveecKQ&oe=69558FB5)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452909159_512538197950803_5004692860220154049_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-niiXRCMomkQ7kNvwGgNiYG&_nc_oc=AdlIW9aIlti4dpeaJYjTl8nSXMeZUzlvtxJbDWGyWf7QkdhZTgisCsOxngn2qKxpGkKRl_YjJ8d6IkjOXbrAEUWm&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_Afm5f5r_qzvL9N_YtOnPwdub3YRG8b2CYcvGSzVbcY6RGw&oe=69556FCA)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452717824_512538247950798_380120614586118556_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=SYOLlFy8CwkQ7kNvwF8SZl1&_nc_oc=Adl9o1lc-qMJcTUcPAYu7tnWr905XDVP-M0esbK5osKwiuQZHYa3g77VALI639JWPNyA27ED8zzeuAhkyNbzPtPh&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_Afl1qDbl_U1HeTN66I3iYrS-jG5J9MpxY6wuOIDem5wsEA&oe=6955998D)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576402_512538244617465_7223126358225556361_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=96cyZN7D-GMQ7kNvwEQx-Ng&_nc_oc=Adn527EceeKQ0YIM5HZe_ThS3uIb9r_5GRQ4OUr2zfM9rnxlnQAWgtdQf4CxKV7CixRJ1m2Gd0mCqIpjf3CHx1ep&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfmaXmLkwJgOPoHkBa4zZWxIoSv-U-krSgOulGq2EvB4Uw&oe=69556D46)
- Select a specific frame by clicking on it on the performance graph.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512538267950796_8211092699235899949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=NUi9BcOAf_IQ7kNvwFChZ1n&_nc_oc=Adm4Eu_lXigvkSHyFiYJCjcq8kZYTah0JC4aEezm2Pt9H5ZiNSrJy1EdhDEWylWG9P20kv-qvIBBGHdS3OyLUIq1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfnS4xwbCZd3lY8iMQG7BkywGN0ckUKzH7IokuKydmLaIA&oe=69558FFA)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452943077_512538264617463_7118884114866526517_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=eulVozvdc8AQ7kNvwGgnYRt&_nc_oc=Adn70Q70FJz3FwXPYllszZUyOfdkjMPNh5xhfRqU0Mv1Ix1ixS8o3U7B3dC2k90oKGUJgFTmw9_-e-vRLcEB5to4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfkNzb-VObUpKsjqnmOLZLzfuksnvGwvAJi2Ul8CktwXgQ&oe=69557BDB)
- Use the dropdown to navigate between asset categories.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653820_512538214617468_298449349691023926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=dRJN7D-_xlsQ7kNvwGiQMzj&_nc_oc=Admumd5Dy3xs8kU7IGWEjZCzNyK4zs-6lCcTuP-2wjwrh_NyaTTNHukn4nyMSAbz2Gtu_9Y08VP2P4DY6OEmJ2kM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfkUFnOltfiKDIRi8TThUt40_fybqiJPVZv2SjOqrZ-O1w&oe=6955824B)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452412458_512538207950802_8887585162205000161_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=fEv3Yf0BYYMQ7kNvwHvAy8v&_nc_oc=Admvu7K5gzkTzSOIaXw0uIIsUXzsymmCQ7hGA2wCSG_Vnv1RUSfAbuJlB3s4Pu15iZrzB2LPkZ830QCod7aIi0d3&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfmbTjCK7TCJ9b2qMHbPbjV97ZI0BfBRKT2eDjIGVakjLg&oe=695579A0)
- Using the information in each table, you can identify assets to optimize or remove to increase performance.

#### Example 1: Memory

Let’s say you see a spike in memory for a particular frame.

- Using the **Performance** panel, navigate to the target frame and select the **Memory** tab on the right. In the **Memory** tab, you will see a list of assets that contributed to the frame’s memory usage, sorted by their size.
- Use this table to identify which textures, audio, or 3D models to optimize to reduce the memory load on your target device(s).

#### Example 2: Rendering

Let’s say you see a spike in the draw calls and verts metrics for a particular frame.

- Using the **Performance** panel, navigate to the target frame. The panel on the right will display a list of 3D models that present in the selected frame, sorted by number of vertices. You can also use the dropdown to view other asset categories like textures and lights that may have contributed to the frame’s high draw call values.
- Use these tables to identify which assets to optimize to reduce the rendering load on your target device(s).

### Other tips

* Some assets have long names that don’t fit in the table’s cell. Hovering over an asset shows the full asset name.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452853418_512538251284131_3322849073149633988_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wsghcx-zNIUQ7kNvwEK2ipQ&_nc_oc=AdkKyzBWH9eyhe5w_2MPTtXVoOa2k8hwkjeACa0JzJwvYXfUd8r8td1QginnbkkEBL0xJ23_4_SBSfXBGC2Azm0e&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfnJG-JncgeJHzwlTWB5cmHhXPPODvoxCs9tTJ22LtDGrw&oe=69556E24)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452732874_512538277950795_656838585926029692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=MHuRG3CMSAYQ7kNvwFQwie-&_nc_oc=Adl9B6nkqoc3r917PEK5hXdrdWD5ZmnE8CbbzaEGz1F-tjgfGmKuLf1oYbeET_O3juFxNHJV6tQFOcM3Z3yP9ci-&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_Afl250MeUvwySRepcnaPlVTtxtuUbPnMEjkhBWmbNqmxwg&oe=6955908A)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933997_512538274617462_4478955592479502121_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nLealf8_QT0Q7kNvwGHGHCW&_nc_oc=AdnaMWKdR8vW_-4oXkmIGfe24z56qOY5eLh_aTWSQkDbOaIDIS6NxQCrBQkmonGAmBwmXaCrfNwkyHh4-2oBDdtY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_AfnUhaq-AH19rc61t2ibaVmP7hfgE5mR-p_T6O8wMnNTaw&oe=69558AEF)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506089_512538201284136_2002422724315318226_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=7-Lz3Hq2kJsQ7kNvwHmtIb5&_nc_oc=AdkfTyqC0bYgeVtuxvGW5-UWMfID5jRGgVdAz3Qx97Dr6IomP2sYbVgnFLX0LD2o_1c1sySB3iswnr7YuK0hvDW9&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-d8kJJiqSYIzBfazSlJKkQ&oh=00_Afm_7EIG0HNXm3TD3Ncyq4yl15w75ANp9bgTVue5Nui7EQ&oe=695574DD)