Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

Learn

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
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452627729_512538211284135_1680560941989953568_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CkEhoRUDWlcQ7kNvwHbmuhT&_nc_oc=AdkblTrtM0LlUuYhXYWuHcEWchfC_ENCGEt0QVUE48ptVwNLBtXdo5wttsMNeXN7gOc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfgxOuAGo8tcpaYLaVOjtEl3Dien0g_20VhX6LbgfDuDCA&oe=692EAB75)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452909159_512538197950803_5004692860220154049_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=MJpaNCBIQvIQ7kNvwH5SOjp&_nc_oc=AdnjmpHFnH-vg-wmfufUJXb6qOZsx6U7Dy8xtPtD3xlYQuMads1BMZouOvT3xC13zYI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfgctjSmVxzYGP3vKr_YcPpHDkJEmPm1M_Yx22S-1TBhhg&oe=692EC3CA)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452717824_512538247950798_380120614586118556_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zyuA9jpYGtIQ7kNvwHC2att&_nc_oc=Adl70nDMctBzhQrDDo7oMhWDkn6cCCeZPS6OWPvhiQVwYCJZUI87rsX_us0xZAXCuto&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_Afgw7FVTWZqOluVN7e2c6qippiNEsFAlUbQdHJFZWAxisg&oe=692EB54D)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576402_512538244617465_7223126358225556361_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=fz2AkA1pZuMQ7kNvwEAVcP7&_nc_oc=AdkXLtqkFiDvMnk8CdVMsTyiP9riUXXl0xm5Fk8yJZu8u3it2znQTnfGHyuKaHbLlKQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_Afg0mLHg9qtxv2aL3oCTLkLkSkRn3G3-ilPLymNleYUP_g&oe=692EC146)
- Select a specific frame by clicking on it on the performance graph.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512538267950796_8211092699235899949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=K7qPCtod-QsQ7kNvwFaYRak&_nc_oc=Adn7scWImTm02Yp8W8UYyrdxW01DFeix37XNB02bKc004MVloHNjoCRQXwm7DZeW-0U&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfjJU_vTwbXSc3Yt1ZrHrguDjKOGub94S-0CMc8NGeB3kQ&oe=692EABBA)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452943077_512538264617463_7118884114866526517_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0B7ArHLOKlMQ7kNvwFuEm5u&_nc_oc=AdncMztRQPOg4X4eDLAK2gwnDZQVFMvqOs-1qiSvRzhROeMbt8BWkyqoKTAv6BuxmLw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfhjpW4h-Znki3CtuWphgDVTsGFSOrz5R8XHsw4wu48-hw&oe=692E979B)
- Use the dropdown to navigate between asset categories.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653820_512538214617468_298449349691023926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q-o-GooWGuAQ7kNvwELwHTs&_nc_oc=AdlqQPw1lux32WYEb8LKlpO574HmxNEQsuoMxXFawxH-yrI8ZIef701LRVQhm_wI8Vs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfgZOT7iPDAjskNaRbLpjMviUnLTJCJkssZYfpJdFPhfRw&oe=692E9E0B)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452412458_512538207950802_8887585162205000161_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Aq2mhKmxTEgQ7kNvwGmahyX&_nc_oc=Adm_Wk_iyXlMikJk7QzsouRJQ0aSDznZlPHARtJAdvis2gOMUODeKzpCW-qig1UoKds&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfhSicjaTypcL_FwTE4lrk9xAQFGqyQr94ZzRfeyegT3Gg&oe=692E9560)
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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452853418_512538251284131_3322849073149633988_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=UZE7okJj5ZYQ7kNvwH4-RY4&_nc_oc=AdnI7rCUbIQPgQiz1IW20LLyq8FP4KglmiFtS5B2xAXI1tfSUuou2YVW7pk0w8lvZEI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfiYOaEmFVhXvjmku_QgMHL9rxLX2JjCixI2icmAhOPRIQ&oe=692EC224)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452732874_512538277950795_656838585926029692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=K6Gcgb_IAU8Q7kNvwFWzrZn&_nc_oc=Adm1G35MZ5uNRvqi-kSf8MoAZiVefyxJQBjncLsJi-51oibuKInU1EMhBCTXs552Ux4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfhwxJMx3TORI4UFZn1D5rs9EemogR2VCMVNa0JSxgsuNQ&oe=692EAC4A)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933997_512538274617462_4478955592479502121_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=N6vrTCPW5skQ7kNvwHMhmrL&_nc_oc=AdkZJ3P5IIhWR4Vl9pIhSUo1oaYXDfHAW6Qz9YReockZYP1xG1fxG5kZ4HS2GAlTUGM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfhPttVa90Z408bBh5EFGnUESxx72QiGRzlJb5XwAq3pfg&oe=692EA6AF)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506089_512538201284136_2002422724315318226_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=48tk4nUd4Z8Q7kNvwEmn93N&_nc_oc=AdkK3vqiL4BS6gGDToB8wo5XgYwWF_IsvQgF3oeJi97HHILLm-GJROB9JR8gGztIdmk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WQbHMo46Rxhq9DT0PgtEkg&oh=00_AfiuKTNkJrvIgSKd8LYGRfMgWfXaNrSS1JlucKLCu1U9Lw&oe=692EC8DD)