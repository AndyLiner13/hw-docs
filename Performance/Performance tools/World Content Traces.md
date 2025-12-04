Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

# World Content Traces

World content traces are a special type of [trace](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/Tracing.md) that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. World content traces include data on:

* 3D models
* Textures
* Audio assets
* Colliders
* Lights

Unlike other types of trace data, you’ll use the Desktop Editor to view and analyze world content traces.

## Prerequisites

* [Enable the Utilities Menu](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md)

## Start a world content trace

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing**, then select **World Content**.
- Select **Start tracing** to start the trace.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452627729_512538211284135_1680560941989953568_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-_Yz7ht4GaQQ7kNvwFcfbqc&_nc_oc=AdnzrMBQ4j8DB2XEjwWjif9QoIMYZnnx2WbveK3qXCxwjJYRzuqAf7s7TdaUwxwnWpU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AflGMDkM1QdbsV4vu_UE0sdPZZQDkQ31wtF5rFwFYa0-5w&oe=694BE4B5)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452909159_512538197950803_5004692860220154049_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=q99NLCvzSHkQ7kNvwGcTfxv&_nc_oc=AdlxjDBjRoXVh-LWZpIsrvFXfrMpT5w0xbngGpgRtRPC2euDUXDnlbKYNSVNlQWVrdA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfnHAEsHpsTfpFu6_Sm59wT66lGoZrpi3pvamKBgZhI5JA&oe=694BC4CA)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452717824_512538247950798_380120614586118556_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=7OWbCfzrVu8Q7kNvwFH4aTE&_nc_oc=Adn6RidVVrRMzUKOb1xH8k36YGP3KwFWW7v0wYk7nxEobd_DdXcSAC7wy2Wck1vkJ2o&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfmB4IwZS4AZYT8nO9qouhJ0zHtFVWu6LcKco5xoDkV1yQ&oe=694BB64D)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576402_512538244617465_7223126358225556361_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=DG0goywttw0Q7kNvwEWplex&_nc_oc=Adn-2w7kYBFTBk8yZ_1KEkEnV_Q2XmKHbRS-T_Gz8R5CaFaQKUUv9ovizNDNvP82c0M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfmAnuEm-AXXwHYnpBfc3HTEULseh9-gJRNzURD3SfXStw&oe=694BC246)
- Select a specific frame by clicking on it on the performance graph.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512538267950796_8211092699235899949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=cOXeB-xjn1wQ7kNvwEnCgDE&_nc_oc=Adl8DOqVF_19DxpjhR9EbR_eI2TsiS4mUbvPAbZcyINy_nhKSvQgwNhy-P7ti3wfUWw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AflnFjmPJFuSK-BZLgeqRFzEJmWdMqB88zqlEdRPxxHCQQ&oe=694BE4FA)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452943077_512538264617463_7118884114866526517_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6vNK_5Fp5BMQ7kNvwFnblbd&_nc_oc=Adm6qUUneRoVsiLMrrhlrHwfMTVai3I2gyTY2cPx-Vv5LbfrDNW0u_ErR23baO_Xdb8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AflYkM92U-AuH9mSh-hu2-qvibOyd50J-E7i2cmaVmeHwQ&oe=694BD0DB)
- Use the dropdown to navigate between asset categories.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653820_512538214617468_298449349691023926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=NHfobBc8bNQQ7kNvwHBuuuu&_nc_oc=Adm4ijGM6RbMDBlAOGVZKEYcHMZBGZLh8GU1E5c2JCWdF12zkSHjHVhmXjewBxo1pzw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfmW_H7x8iMarN8hBSF2pTGf9l5lszA7hx__0Jwi1MZ8IA&oe=694BD74B)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452412458_512538207950802_8887585162205000161_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rhQPPFK0JZkQ7kNvwGEJKa4&_nc_oc=AdmjIFIn-NkaFrDiAZBA7DIwecjj5HpscO03eg7vRu3GN6l5ryJ72ZlTillGxF3QrJU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfndZ961MBRMbcqXOw8Xq7ucaTWZb_efQQWK7eBVr5KibA&oe=694BCEA0)
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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452853418_512538251284131_3322849073149633988_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=rPBdcMP-nMkQ7kNvwFEfzFI&_nc_oc=AdndVseYf7igLcp0SrQyux2qe279ZVVgTg9LlIEUDVGtFa1Ex84kxLYmMu9OztxtmBg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfnuhXLt1K3rVk0NWK8z-U7OZu4PfP3xnFw2-31edJ1ZWQ&oe=694BC324)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452732874_512538277950795_656838585926029692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=7PU1OWfBetsQ7kNvwFLZ8p2&_nc_oc=Adnvzwc_bcxrCZuB6kUxqb9oyUyDGugycQYirB2c0juhscI1vq3ohBRMHnEzbdDG9ho&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AflhK3w3rYHSAPIkU7h20NFu8w6AiVVojkNRuBCJXDDQTw&oe=694BE58A)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933997_512538274617462_4478955592479502121_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=OljpiJa2szUQ7kNvwGzui8d&_nc_oc=Adk9QDqLaMjD0B2SVHcixBG_y_jYZcgl15mkHkQHrgssO9xudq-sSpeL9xyC9jZvjfE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AfnhDOuOKVF7Vhjf3H0ZbM6UYgutjs55OlfZwDv7uxhu-Q&oe=694BDFEF)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506089_512538201284136_2002422724315318226_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=1GH0FZXRLtcQ7kNvwHL0zoE&_nc_oc=Adl8NLFXAmDR28R-d7a3pWfZEO2_AXEXt0MyC8ACmN2jeM70CqnJhPS8QISsVbqSyHQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2sxAmAflvl-ye3cfHk8lGg&oh=00_AflAEVlMXys2pkXjj9_J-iejv9gKY18hiMEpadXaxoSokQ&oe=694BC9DD)