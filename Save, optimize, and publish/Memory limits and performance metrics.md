Source: https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/memory-limits-horizon-worlds

Learn

# Memory limits and performance metrics

Meta Horizon Worlds enforces a 6 GB memory limit on created Worlds. This limit is defined at the operating system level and is intended to improve performance and allow expanded functionality on your Quest device. Worlds that exceed this limit may cause Meta Horizon Worlds to close unexpectedly.

In order to help creators better understand resource usage in their Worlds, Meta Horizon Worlds provides a real-time performance monitoring tool that gives data on memory and other metrics. Additionally, we have compiled a set of best practices for creators to minimize memory usage while still delivering high-fidelity experiences.

Additionally, you will receive popup warnings as you approach the memory limit while editing your Worlds. Once your memory usage exceeds 6 GB, you will be restricted from publishing or adding assets to your World.

## Real-time performance metrics

The **Real-time metrics** panel provides real time performance data for metrics like FPS, CPU, GPU, scripting, physics, and memory. The panel is attached to your space, so it stays with you as you move.

## Access the Real-time metrics panel

The Real-time metrics panel is accessed from the Utilities menu, which can be enabled in Settings.

To enable and view the Real-time metrics panel:

- Visit a World in any mode.
- Turn either of your wrists towards you to activate the wearable.
- Open your menu and Select **Settings**.
- Select the **Utilities** tab and enable the utilities menu.
- Once the wearable is open, select the **Real-time metrics** button under Utilities to open the Real-time metrics panel.

## Real-time metrics settings

In the Real-time metrics panel’s display settings, you can change the location and opacity of the panel, as well as which metrics to display.

### Move the panel using settings

To change the position of the Real-time metrics panel:

- Open the display settings by pressing the **settings button** on the top right of the panel.
- Select a position from the **Position** drop-down in Display Settings.

You may choose from **Top Left**, **Top Right**, **Bottom Left**, and **Bottom Right**. This snaps the Real-time metrics panel to one of those locations in your view.

### Move the panel by dragging

You can grab the white bar below the Real-time metrics panel by using either trigger on your Quest controller. While holding down the trigger, you can move the panel by dragging it.

### Minimizing

You can minimize the Real-time metrics panel by pressing the Minimize button to the right of the settings button.

Once minimized, you can restore the panel by clicking the button again.

### Real-time metrics graphs

#### Select metrics to display

- Select **Settings** on the Real-time metrics panel to open the display settings.
- Under Graphs, there are checkboxes for the metrics that are available.
- Point at the display settings panel and use either joystick to scroll up and down to see even more metrics. Full descriptions of each available metric are listed at the end of this section, under Real-time Metric Descriptions.
- To add a metric to the Real-time metric panel, open the display settings, hover your controller pointer over a metric with an empty check box, and pull the trigger. The metric is added to the panel with a unique color identifier.

If you attempt to select too many metrics, you receive a notification informing you that you have reached the maximum number of metrics that can be viewed at once. In order to add more metrics, you must first deselect one or more currently displayed metrics using the same process you used to select them.

#### Change metric targets

You can set metric targets to signal you when they exceed the desired target. When this happens, the metric is highlighted with a red dot in the Real-time metrics panel.

To set a metric target, enter the target value into that metric’s **Target** field in the display settings.

In this example, the GPU target is lowered to 2.0 milliseconds, which causes it to become highlighted with a red dot in the Real-time metrics panel for as long as the average GPU is over the new target.

## Real-time metric descriptions

| **Metric** | **Description** |
| --- | --- |
| FPS | FPS stands for frames per second. This metrics measures how many frames the device is able to process per second. Ideally the goal is to display 72 frames per second. |
| CPU | The CPU metric measures how long the CPU took to process the last frame in milliseconds. The higher the CPU number is the longer a frame took to process. If the CPU takes too long to process a frame, it could affect your FPS. |
| GPU | GPU measures how long the scene took to render. Some common things that can negatively impact the GPU performance include complex geometry, expensive materials, complex particles, or many high resolution textures. |
| Physics | Measures the time spent on processing physics related actions. For example if you have 100 spheres dynamically rolling about while colliding with each other, your physics process time per frame might be high. Having too many triggers in a scene can also add to the overall physics cost. |
| Scripting | Measures the time spent processing scripts written by the creator. |
| Audio | Measures how long the CPU took to process audio events and objects. |
| Avatars | Measures the time spent processing avatar related code. |
| Draw calls | All of the render objects in the scene are gathered by the CPU and then sorted. If you have 200 objects in a scene that does not mean you will have 200 draw calls. Objects that share settings (like using the same geometry and material) will be batched together as a single draw call. |
| Vertices | Records the total number of vertices rendered for a frame. A scene with models that have high number verts in them could negatively impact the GPU render time. |
| WaitforGPU | This is the time it takes to synchronize the CPU and GPU each time a new frame is started. This metric can be negatively impacted if the GPU was given more work than it could process in a single frame. |
| Memory | Measures amount of memory currently in use, in MB. This must not exceed the OS-defined limit set by your Quest device, so it would be useful to set a lower Target number in order to trigger an alert when you approach the limit. You can keep this metric in check by exercising memory best practices. |