---
source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces
---

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
  ![](BROKEN_REF)
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  ![](BROKEN_REF)

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  ![](../../_assets/images/ab4276888e672bde61fd4eafd5b6769324edb073d88567c94de50032ca46b90b.png)
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  ![](../../_assets/images/b841e5d1f5f9c141cb09b0575197073d9fc78e9dd063c239c33011adeb897a95.png)
- Select a specific frame by clicking on it on the performance graph.
  ![](../../_assets/images/e99c027527a581e4114ab5eaf314526ee50148533fd24cf48fa73dc04022fbb3.png)
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  ![](../../_assets/images/9aba5ffab51bcf6fa3eaeaa2e8425b4bc3394ea6eb334f8772d0814085f43b70.png)
- Use the dropdown to navigate between asset categories.
  ![](../../_assets/images/c906eb4b2266dc919312327e03dabe8ce5f5a8b33023f9e9432fc4a778034de1.png)
- Select the **Memory** tab to view how assets impact memory usage.
  ![](../../_assets/images/c18b971113524cd63c455ce9cb5bcf5a17caa055c487d9c7e8beb6d3f0593171.png)
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
  ![](../../_assets/images/f57577efddf92d3407918bb0c453b2b5b2d5ddba69cbf7dd424ff0b632870f87.png)
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  ![](../../_assets/images/e2bf2feb213487d2d3d555d8a395a5db6d0d05e220995ef0e75bc6a165114527.png)
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  ![](../../_assets/gifs/f1a5322865d068ff8b0dc95599f1bff89feb7b2917ba43e9fe6deaa2757c0055.png)
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  ![](../../_assets/images/770706b555e3e0ec47a75794ebffce7c691e263d34886aaca0854810e1ff5f46.png)