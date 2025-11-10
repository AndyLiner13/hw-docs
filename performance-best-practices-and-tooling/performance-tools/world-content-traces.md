Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

# World Content Traces

World content traces are a special type of [trace](/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing/) that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. World content traces include data on:

* 3D models
* Textures
* Audio assets
* Colliders
* Lights

Unlike other types of trace data, you’ll use the Desktop Editor to view and analyze world content traces.

## Prerequisites

* [Enable the Utilities Menu](/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/enable-the-utilities-menu/)

## Start a world content trace

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing**, then select **World Content**.
- Select **Start tracing** to start the trace.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452627729_512538211284135_1680560941989953568_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CkEhoRUDWlcQ7kNvwHbmuhT&_nc_oc=AdkblTrtM0LlUuYhXYWuHcEWchfC_ENCGEt0QVUE48ptVwNLBtXdo5wttsMNeXN7gOc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AfiuD1s60unBeLj59M67DOvqC_qmmGnWGFyVl2EYNvyxXQ&oe=692C0875)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452909159_512538197950803_5004692860220154049_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=RY2KiQValWkQ7kNvwHD6DB5&_nc_oc=AdkdFBI5Xp_2VCyzUbEXw--6CiVuyr7GiX3gzxgiV15EmoCNcKZ-QWgYdb_uXt3HnPo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afhviup07HIKUyW0ox2rUY4CjPuH2vxlS5J3hpj6_iurRQ&oe=692BE88A)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452717824_512538247950798_380120614586118556_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=7cBT5NSM2EYQ7kNvwH21Lez&_nc_oc=AdnEEyPr0nn-uL75oPlp4cPX6IgHV5vWBudAgoG-t1D7SmehSmlkEyuCUJoiZV-b5uM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AficZibHAE9f1c_y7EACXf64JnsRKM43wrIdD-v_AuT38g&oe=692BDA0D)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576402_512538244617465_7223126358225556361_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mdLu6WP6_3cQ7kNvwGMksIz&_nc_oc=AdnY_0n4tdAAD3Cr0HIt_YcLXejw9oOU9zjrHoDnW5Rzysl3khk7YQX78aZpAU_2U3E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afh6AtHGtFN62BMKi6niXexVkV9y3Mxi66wGAW01UHJOqg&oe=692BE606)
- Select a specific frame by clicking on it on the performance graph.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452845714_512538267950796_8211092699235899949_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Nx7nfOt6WfEQ7kNvwHzdhC4&_nc_oc=AdlLjjWaYXiawLJF36f72iGzmkeXYOcW4bm_6IMCm3uJkkZme4SD5GdDMBzL02KG7Yc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AfgyB5H_ayfjKxh8zWk-OKLksTDlLDusq7zW3cRxmD3MEw&oe=692C08BA)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452943077_512538264617463_7118884114866526517_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=zVOYhQIxiu4Q7kNvwH0moDQ&_nc_oc=Admwq9fb9sMvngxm-EbN0eL_MbyudSP_H5q4nxHsGZhlhPz2S35m299edJF_IGjdFnA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AfgEOCoqynb0iT0ZqtN4_tWGz7JWaBlABMr5Cmh_mJwCHg&oe=692BF49B)
- Use the dropdown to navigate between asset categories.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653820_512538214617468_298449349691023926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=R93n1bVSGAoQ7kNvwHziFV4&_nc_oc=AdnXNVrc3lfJHl04CqSrw6Sn3uUr_5bq4dDOWd_zMIGsG0bpIMKbt0kYYAYxCYJu8wk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afi4KVDFlcVoaPK6nkmlKVknH4nscirIJ51FRia17xNRoA&oe=692BFB0B)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452412458_512538207950802_8887585162205000161_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cyp96h9_YIYQ7kNvwHjpO3f&_nc_oc=AdnSe9o1fjefaUWkQJ7jO_HHfSJDXPzdKlMvp4JXvYZqRGB02jOn7RVISx0eR2M06nM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AfgL3TkwjW47futwyLHmWMgmR9GFaQfvFkJ9h71_ym-EFw&oe=692BF260)
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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452853418_512538251284131_3322849073149633988_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=8Tnpl_qQsI4Q7kNvwH6xy7K&_nc_oc=AdkbAu8mo76wr8aJWqsVxL9xX-qdkqb-BGOBTcJpX6qyoNen4jUu8-UYllvOXQw2FZs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afj3djwet1PJ9yKyKu9dVjyyFoY24YSzuF7kX6kLKKdgVA&oe=692BE6E4)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452732874_512538277950795_656838585926029692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pv9uwBns_TIQ7kNvwEGKXEG&_nc_oc=AdkNwWdg1GuuJ9LwUou1hrtLCXFkhRu8JLm-jKJLkLs8t4agi-Lo8R_rfARw-eFpRzo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_AfiXLYOr_p96nIwyv8sZ1zhJVDjHt_sDIxmVNoQ5tbNxoA&oe=692C094A)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933997_512538274617462_4478955592479502121_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=N6vrTCPW5skQ7kNvwHMhmrL&_nc_oc=AdkZJ3P5IIhWR4Vl9pIhSUo1oaYXDfHAW6Qz9YReockZYP1xG1fxG5kZ4HS2GAlTUGM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afi-FaWV_K2CMPOVnhCOP2mzmCRSwII9oOdnncni3jyiig&oe=692C03AF)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452506089_512538201284136_2002422724315318226_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=DRWWvWvEYZQQ7kNvwGO1cd9&_nc_oc=AdnDedmMUW0jr0WJ9NMB1OGvIIBv0tFU4dehdKqJe5FZatVHkgoQfOxOea_DZJOyzMc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cyNyW0QkopWwwKR4EYlJqg&oh=00_Afi8z4bCqJMkPVUEiRvbCixm7BBKtPsG0jI7StJDLahn4w&oe=692BED9D)