Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

# World Content Traces

World content traces are a special type of [trace](/hw-docs/Performance/Performance%20tools/Tracing.md) that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. World content traces include data on:

* 3D models
* Textures
* Audio assets
* Colliders
* Lights

Unlike other types of trace data, you’ll use the Desktop Editor to view and analyze world content traces.

## Prerequisites

* [Enable the Utilities Menu](/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md)

## Start a world content trace

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing**, then select **World Content**.
- Select **Start tracing** to start the trace.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452627729_512538211284135_1680560941989953568_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=OSZHtPRTPw0Q7kNvwFng0d5&_nc_oc=AdngCmM2DEBlHH9Phc5WWt8nAZLNGfKVsv7whlnrWUyl9Q74EBK_uqQMZQO7OiRtNZ4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfiDgkqy9JYucql2OXrxYpfYU-pRW2JDIB1vj-STPzGpOg&oe=69311635)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452909159_512538197950803_5004692860220154049_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=L4pqx6KBHEUQ7kNvwGkB82S&_nc_oc=AdllA8_auiyy--4c82pXEQUPeqUuoPwXFYLKdwCnUYmb4LMMXUj8NW41FRbBZpqYM3Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfhMigd4ocI-xXcNlEFlNZuD_ni3iXiyvYEegubdwbpN7A&oe=69312E8A)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452717824_512538247950798_380120614586118556_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zyuA9jpYGtIQ7kNvwHC2att&_nc_oc=Adl70nDMctBzhQrDDo7oMhWDkn6cCCeZPS6OWPvhiQVwYCJZUI87rsX_us0xZAXCuto&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_Afi1oDtCn4pvc5_ph2huweZIBItCudoNfqArDgKxNwjOXQ&oe=6931200D)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576402_512538244617465_7223126358225556361_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=fz2AkA1pZuMQ7kNvwEAVcP7&_nc_oc=AdkXLtqkFiDvMnk8CdVMsTyiP9riUXXl0xm5Fk8yJZu8u3it2znQTnfGHyuKaHbLlKQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_Afj3L2VNvRyt0x3NrrYKgR5duzpHqJsKomvXfLnMPh_prA&oe=69312C06)
- Select a specific frame by clicking on it on the performance graph.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512538267950796_8211092699235899949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=D2im9ztDHfEQ7kNvwE0nis7&_nc_oc=AdkTdJ4DuaBzRS9cwToAPgS1B765Ld6yHIuQPw1KMRtmqZ6AdIHRcJY1Azecqg3Hx9k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfguiWrdseOxTkRIxAqrZQDGdstwnY62iowHSqdFeZJaGw&oe=6931167A)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452943077_512538264617463_7118884114866526517_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0B7ArHLOKlMQ7kNvwFuEm5u&_nc_oc=AdncMztRQPOg4X4eDLAK2gwnDZQVFMvqOs-1qiSvRzhROeMbt8BWkyqoKTAv6BuxmLw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfiV7N1wMV_erTSyezkRw0683k4OxlNLi9VebYXePD3vSQ&oe=69313A9B)
- Use the dropdown to navigate between asset categories.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653820_512538214617468_298449349691023926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q-o-GooWGuAQ7kNvwELwHTs&_nc_oc=AdlqQPw1lux32WYEb8LKlpO574HmxNEQsuoMxXFawxH-yrI8ZIef701LRVQhm_wI8Vs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_Afh2FG1x8S2PYXdXylWj-GmR0nzDeCrCtzMSfMO17mt07A&oe=6931410B)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452412458_512538207950802_8887585162205000161_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rz5nG4rlZ98Q7kNvwEPd9-p&_nc_oc=AdkVBimPz-q9iFfeJTQ3Icc53qrA8Ztla7ScWHGa9-Jjs_lek2Ebu1uUdTgY9qtCJUo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_Afgn-DAzgk-BPtJx8st0DVkQs7CMN2cwOiBBU3M5pn-tpw&oe=69313860)
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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452853418_512538251284131_3322849073149633988_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=QEh3DkMmUIkQ7kNvwGmiPRE&_nc_oc=AdmVClpIaURpzQ7Xs_s49UcOX7dqMXsP6w3nmv2xeYz1DJ-4bPoIWqNFikh9QktXvbQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfgAxoSwD6fVm7KBpyNOdqdSNMaokIR702CuVLTeygz0cA&oe=69312CE4)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452732874_512538277950795_656838585926029692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=dZpD2grOc-sQ7kNvwEWYQLT&_nc_oc=AdlzD-j-2uxn_ARZKn5VLfWWdjJhs_Nfdt_a1T1796FCx0_h-oIyVjdEE_myv3i6yCs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfhO5-sHtsHe0pvX_vXHoQwP4nMYP2fHq8fT-6Qomy3nUA&oe=6931170A)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933997_512538274617462_4478955592479502121_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=UcAdvqHdb2YQ7kNvwHBVtoO&_nc_oc=AdkGQGBjfbx_2wqwTXFq2MGMFbRwX8oWgTAF-j5biT2K5YZz1JXFV9OlWj91kpQuP_s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfjFWpA0cDMg7bDNaidnmSIDPflosJ3CK2-G5cuqe8vA2w&oe=693149AF)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506089_512538201284136_2002422724315318226_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=48tk4nUd4Z8Q7kNvwEmn93N&_nc_oc=AdkK3vqiL4BS6gGDToB8wo5XgYwWF_IsvQgF3oeJi97HHILLm-GJROB9JR8gGztIdmk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rlyq5C-jf75O1RdFXmGY5g&oh=00_AfjzVgjj2F8jSZ7lXT-ROfCIzIk35YBGKFAJ2bPl-ZAyWw&oe=6931339D)