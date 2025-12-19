Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-tutorial-world/zone-5-animation

# Zone 5 - Animation

This zone showcases animated Custom UI elements that provide dynamic visual feedback and enhance the user experience.

## Station #12: Hourglass Spinner

This example of animation is a simple spinning image of an hourglass. Start and stop the spinning with a network event. You can change the image from an hourglass to any image asset as well as change the speed of the spin from the properties panel or through function calls.

<details>
<summary>Hourglass Spinner</summary>

<p></p>

[Hourglass Spinner](../../../image_data/a679e85864c8353c43c8d31fef44672a7385b6b1a745c1c2a3f033d5d83d1d96.md)

### Overview
This image depicts a user interface element, specifically a settings panel for configuring a spinner component. The layout includes a header, input fields, and a visual indicator.

### Key Elements
- **Header**: Located at the top, spans the width of the panel. Contains the text `Spinner:Spinner` with a small icon on the left side.
  - **Visual description**: Text in white font on a dark background.
  - **Location**: Top-left corner.
  - **Contents**: `Spinner:Spinner`.
  - **Visual styling**: Dark gray background, white text.
- **Image Input Field**: Positioned below the header.
  - **Visual description**: A rectangular input field with placeholder text `image`.
  - **Location**: Below the header.
  - **Contents**: `image`.
  - **Visual styling**: Dark gray background, light gray placeholder text.
- **Hourglass Indicator**: Located within a rounded rectangle, next to the image input field.
  - **Visual description**: A small hourglass icon inside a rounded rectangle.
  - **Location**: To the right of the image input field.
  - **Contents**: `Hourglass`.
  - **Visual styling**: Dark gray rounded rectangle, white hourglass icon.
- **RPM Input Field**: Positioned below the hourglass indicator.
  - **Visual description**: A rectangular input field with a value `60`.
  - **Location**: Below the hourglass indicator.
  - **Contents**: `60`.
  - **Visual styling**: Dark gray background, white text.
- **Three-dot Menu**: Located at the top-right corner.
  - **Visual description**: Three vertically aligned dots.
  - **Location**: Top-right corner.
  - **Contents**: Three dots.
  - **Visual styling**: White dots on a dark gray background.

### Visual Flow / Relationships
The visual hierarchy is clear, with the header as the primary focus. The image input field and hourglass indicator are secondary elements, followed by the RPM input field. The three-dot menu is the least prominent but still noticeable due to its distinct placement.

</details>

<p></p>



### Primary Script(s)

* **`Spinner.ts`:** This TypeScript code defines an hourglass Spinner component and related trigger components.

### Properties

* **`image`**: the image to be rotated 360 degrees
* **`RPM`**: the speed per minute to rotate the image (1 rotation per second)

### Network Events

The following network events are defined to communicate across the network:

* **`StartSpinner`**: An event that triggers the spinner to begin rotating. It carries an object with the spinner’s entity ID and the RPM to rotate the image.
* **`StopSpinner`**: An event to stop the spinner’s animation. It carries the spinner’s entity ID.
* **`SetDisplay`**: An event to control the visibility of the spinner without affecting its animation state.

### Demo Components

These helper components are designed to be placed in the world to trigger the spinner’s behavior when a player enters a designated area.

* StartTrigger

<details>
<summary>StartTrigger</summary>

<p></p>

[StartTrigger](../../../image_data/30d31fc238d6ae613c3a000bc6cd6607758edaffdc90d2a78068bec122a790b8.md)

### Overview
This image depicts a user interface element from a software application, specifically a settings or configuration panel. The panel includes a spinner control labeled "SpinnerDemo:StartTrigger," along with some text fields and a button.

### Key Elements
- **Spinner Control**: Located at the top right, it has a label "RPM" next to it. The value "60" is displayed within the spinner control.
- **Text Field**: Positioned to the right of the spinner control, it contains the text "60."
- **Button**: Situated below the spinner control, it has a label "Spinner_CUI" and an icon resembling a person with a badge.
- **Dropdown Menu**: Located at the top left, it appears to be a collapsed dropdown menu with the label "SpinnerDemo:StartTrigger."

### Visual Flow / Relationships
The most prominent visual element is the spinner control due to its central placement and larger size compared to the other elements. The text field is adjacent to the spinner control, and the button is positioned below them. There are no arrows or lines connecting the elements, but the layout suggests a sequential reading order from top to bottom.

</details>

<p></p>



* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartSpinner network event, passing the configured spinner\_CUI’s entity ID and RPM.
* `spinner_CUI` must be linked to the configured Custom UI gizmo.
* You can override the spinner’s RPM here by setting an RPM value or leave as 0 to use the RPM in the properties of the spinner’s Custom Ui gizmo.
* StopTrigger

<details>
<summary>StopTrigger</summary>

<p></p>

[StopTrigger](../../../image_data/082fad937beb433a13ec9b935df30e5da9086290b03fa07e200cdce98bd97ad7.md)

### Overview
This image depicts a user interface element, specifically a spinner control within a dialog box or settings panel. The visual is part of a software application, likely a development environment or configuration tool.

### Key Elements
- **Visual description**: A dialog box with a spinner control.
- **Location**: Top-left corner of the image.
- **Contents**: The dialog box contains the text `SpinnerDemo:StopTrigger` and a spinner control labeled `Spinner_CUI`.
- **Visual styling**: Dark background with light text and icons.

### Visual Flow / Relationships
- Most prominent visually: The dialog box containing the spinner control.
- Spatial relationships: The spinner control is positioned to the right of the dialog box text.

</details>

<p></p>



* Similar to StartTrigger, it sends a StopTrigger network event when a player enters its trigger volume.
* ShowTrigger
  + Sends a SetDisplay network event with `isVisible: true`, making the spinner visible.
* HideTrigger
  + Sends a SetDisplay network event with `isVisible: false`, making the spinner invisible.

## Station #13: Spinner With Timer

This animated Custom UI combines a timer with a spinner. A common use for this is displaying the time for short gameplay functions that do not require player input such as the time for a plant to sprout or an ability to finish its cooldown.

<details>
<summary>Spinner With Timer</summary>

<p></p>

[Spinner With Timer](../../../image_data/f9482302f0feb45d2d5f2fac17b15dabe48ba1e6a0fa8b9e5cedad96141fb058.md)

### Overview
This image depicts a user interface element, specifically a settings panel for a component named `TimeSpinner`. The panel includes various configurable parameters such as `texture`, `timeLimit`, and `RPM`.

### Key Elements
- **Header**: Located at the top-left corner, labeled `{}` TimeSpinner:TimeSpinner. This is a title indicating the name of the component.
- **Parameter Labels**: Positioned vertically on the left side of the panel.
    - `texture`: A label indicating a parameter setting.
    - `timeLimit`: Another parameter label.
    - `RPM`: Yet another parameter label.
- **Input Fields**: Corresponding to each parameter label, located to the right of the labels.
    - `countdownCircle...`: An input field with a placeholder text indicating a texture selection.
    - `10`: An input field showing the value `10`.
    - `60`: An input field showing the value `60`.
- **Icon**: A small icon resembling a cube with a circle inside, located next to the `countdownCircle...` input field.
- **Three Dots Menu**: Located at the top-right corner, indicating a menu or additional options.

### Visual Flow / Relationships
The layout is structured with parameters on the left and their corresponding input fields on the right. The icon is positioned next to the `countdownCircle...` input field. The three dots menu is separate and located at the far right. The visual hierarchy is clear with the parameters and their inputs being the primary focus.

</details>

<p></p>



### Primary Script(s)

* **`TimeSpinner.ts`**: This TypeScript code defines a spinner with a time component and related trigger components.

### Properties

The component’s configurable properties are defined in static propsDefinition:

* **`texture`**: the image to be rotated 360 degrees
* **`timeLimit`**: duration of the timer or countdown in seconds
* **`RPM`**: the speed to rotate the texture in revolutions per minute

### Network Events

The following network events are defined to communicate with the TimeSpinner component across the network:

* **`StartTimer`**: An event that triggers the timeSpinner to begin. It carries an object with the timeSpinner’s entity ID and the timeLimit for the timeSpinner.
* **`StartCountdown`**: An event that triggers the timeSpinner to begin. It carries an object with the spinner’s entity ID and the timeLimit for the timeSpinner.
* **`StopSpinner`**: An event to stop the timeSpinner. It carries the timeSpinner’s entity ID.
* **`SetDisplay`**: An event to control the visibility of the timeSpinner without affecting its animation state.
* **`TimeStopped`**: An event sent when a StopTimer is received by the timeSpinner.
* **`TimeFinished`**: An event sent when the timeSpinner’s timer or countdown reaches timeLimit.

### Demo Components

These helper components are designed to be placed in the world to trigger the timeSpinner behavior when a player enters a designated area.

* StartTimerTrigger

<details>
<summary>StartTimerTrigger</summary>

<p></p>

[StartTimerTrigger](../../../image_data/2468119297e0ed558aa7787f9666e1f1354b981274c5abcbba4b2077176aae1b.md)

### Overview
This image depicts a user interface element within a software development environment, specifically a configuration or settings panel for a component named `TimeSpinnerDemo`. The panel includes a trigger labeled `StartTimerTrigger`, a numeric input field for setting a `timeLimit`, and a custom user interface (CUI) component labeled `Time_Spinner_CUI`.

### Key Elements
- **Trigger Label**: `StartTimerTrigger`
  - **Location**: Top right of the panel
  - **Contents**: Text label indicating the purpose of the trigger
  - **Visual styling**: Dark gray background, white text, no additional styling
- **Numeric Input Field**: `timeLimit`
  - **Location**: Below the trigger label, left-aligned
  - **Contents**: The value `10` is displayed inside the field
  - **Visual styling**: Dark gray background, white text, bordered
- **Custom User Interface Component**: `Time_Spinner_CUI`
  - **Location**: Bottom right of the panel
  - **Contents**: A small icon resembling a gear and a label `Time_Spinner_CUI`
  - **Visual styling**: Dark gray background, white text, bordered

### Visual Flow / Relationships
- **Most prominent visually**: The `StartTimerTrigger` label due to its placement at the top right.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The `timeLimit` field is adjacent to the `StartTimerTrigger`, while the `Time_Spinner_CUI` is positioned below and to the right of the `timeLimit` field.

</details>

<p></p>



* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartTimer network event, passing the configured timeSpinner\_CUI’s entity ID, and timeLimit.
* timeSpinner\_CUI must be linked to the configured Custom UI gizmo.
* You can override the timeSpinner’s timeLimit here by setting a timeLimit value, or leave as 0 to use the timeLimit in the properties of the timeSpinner’s Custom UI gizmo.
* StartCountdownTrigger

<details>
<summary>StartCountdownTrigger</summary>

<p></p>

[StartCountdownTrigger](../../../image_data/bd51451205ebae304ea1938e46db7de1ba52fe53da9f3859ceb3ceaf5340ba94.md)

### Overview
This image depicts a user interface element from a software application, specifically a settings or configuration panel. It includes a title, a slider input field, and a text input field.

### Key Elements
- **Title**: Located at the top-left corner, reads "**TimeSpinnerDemo:StartCountdownTrigger**". This is a descriptive label indicating the context of the panel.
- **Slider Input Field**: Positioned to the right of the title, labeled "**timeLimit**". It has a value of "10" displayed within a black rectangular box.
- **Text Input Field**: Below the slider field, labeled "**timeSpinner_CUI**". It contains the text "**Time_Spinner_CUI**" within a black rectangular box.
- **Icon**: A small icon appears next to the text input field, showing a warning symbol and a speaker symbol, likely indicating that the input field is related to audio or has some form of validation.

### Visual Flow / Relationships
The layout is linear, moving from left to right. The title is the most prominent element, followed by the slider input field, then the text input field. There are no arrows or lines connecting the elements, suggesting a straightforward reading order.

</details>

<p></p>



* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartCountdown network event, passing the configured `timeSpinner_CUI`’s entity ID and timeLimit.
* `timeSpinner_CUI` must be linked to the configured Custom UI gizmo.
* You can override the timeSpinner’s timeLimit here by setting a timeLimit value, or leave as 0 to use the timeLimit in the properties of the timeSpinner’s Custom UI gizmo.
* StopTrigger

<details>
<summary>StopTrigger</summary>

<p></p>

[StopTrigger](../../../image_data/c79e7e4665dc606e52b210d389b203b9cda3b0202ff0db5d07a298f1916f1d99.md)

### Overview
This image depicts a user interface element, specifically a dropdown menu or a contextual menu item within a development environment or IDE. The menu item is part of a larger interface that includes a title and a small icon next to it.

### Key Elements
- **Title**: Located at the top-left corner of the menu item. Contains the text `TimeSpinnerDemo:StopTrigger`.
- **Icon**: Positioned to the right of the title, showing a small icon resembling a spinner or a circular arrow, indicating some form of time-related functionality.
- **Small Icon**: Situated to the far right of the menu item, displaying a small icon that appears to be a user profile or account symbol.
- **Menu Button**: A small button with three vertical dots (`...`) located at the top-right corner of the menu item, suggesting additional options or actions can be accessed through this button.

### Visual Flow / Relationships
The most prominent visual element is the title, as it is the largest and most central text. The icon next to the title provides additional context, while the small icon to the right offers a secondary point of interest. The menu button at the top-right acts as a control for expanding or interacting with the menu.

</details>

<p></p>



* Similar to StartTrigger, it sends a StopTrigger network event when a player enters its trigger volume. This is used for both timer mode and countdown mode

## Station #14: Sliding Banner

A sliding banner can be used to convey messages to all players in your world. When used spatially, the sliding banner can display information similar to animated billboards seen in train stations. When used as an overlay, the sliding banner can display announcements that all players will see.

Because the text scrolls horizontally along the banner, the message can be longer than the actual width of the banner.

### Primary Script(s)

* **`SlidingBanner.ts`**: This TypeScript code defines a sliding banner component and related trigger components.

### Properties

<details>
<summary>SlidingBanner Properties</summary>

<p></p>

[SlidingBanner Properties](../../../image_data/dfa5b0e09fc9098b94b786a79ef4c7e7403bbf3dec6b3f550e8a9512216b8a12.md)

### Overview
This image depicts a user interface element labeled as a "SlidingBanner" with various configurable parameters. The layout is structured with a settings panel on the left and a text input field on the right.

### Key Elements
- **Left Panel (Settings)**:
  - **message**: A label indicating the parameter name.
  - **fontSize**: A label indicating the parameter name with a value of "45".
  - **textColor**: A label indicating the parameter name with a color swatch next to it.
  - **backgroundColor**: A label indicating the parameter name with a color swatch next to it.
  - **opacity**: A label indicating the parameter name with a numeric value of "0.8".
  - **duration**: A label indicating the parameter name with a numeric value of "20".
  - **padding**: A label indicating the parameter name with a numeric value of "0".
  - **alwaysVisible**: A label indicating the parameter name with a toggle switch next to it.

- **Right Panel (Input Field)**:
  - **Your message here**: A text input field for entering a message.

### Visual Flow / Relationships
The most prominent visual element is the "Your message here" input field on the right side. The settings panel on the left provides options that can be adjusted to customize the sliding banner. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right.

</details>

<p></p>



The component’s configurable properties are defined in static propsDefinition:

* **`message`**: the string to display
* **`fontSize`**: size of the characters (45 is recommended as the minimum size to be easily readable on mobile devices)
* **`textColor`**: RGB values [range: 0.0–1.0]
* **`backgroundColor`**: RGB values [range: 0.0–1.0]
* **`opacity`**: range of opacity from transparent to opaque [range: 0 = clear, 1 = opacity]
* **`duration`**: how long in seconds to scroll from the right side of the panel completely to the left side and no longer be visible
* **`padding`**: add a value (in pixels) to the calculated width of the message
* **`alwaysVisible`**: turn on if you want the banner’s background to be visible at startup and after the sliding banner completes scrolling

### Network Events

The following network events are defined to communicate with the sliding banner component across the network:

* **`StartBanner`**: An event that triggers the banner to begin sliding. It carries an object with the banner’s ID, the message to display, and the animation duration in seconds.
* **`StopBanner`**: An event to stop the banner’s animation and hide it. It carries the banner’s ID.
* **`SetDisplay`**: An event to control the visibility of the banner without affecting its animation state.

### Demo Components

These helper components are designed to be placed in the world to trigger the banner’s behavior when a player enters a designated area.

* StartTrigger

<details>
<summary>StartTrigger</summary>

<p></p>

[StartTrigger](../../../image_data/acece0ded5af639e892a4622064770f69fc6335ccf390e73d695865496ee579e.md)

### Overview
This image depicts a user interface element from a software application, specifically a settings or configuration panel for a feature called "SlidingBannerDemo:StartTrigger." The layout includes various fields and a button for attaching a script.

### Key Elements
- **Panel Title**: Located at the top-left, the title reads `{ } SlidingBannerDemo:StartTrigger`.
- **Field Labels**: 
  - `banner_CUI`: Positioned above a text input field.
  - `message`: Positioned above another text input field.
  - `duration`: Positioned above a numeric input field displaying "0".
- **Input Fields**: 
  - `banner_CUI`: A text input field with placeholder text `SlidingBanner_C...`.
  - `message`: A text input field.
  - `duration`: A numeric input field showing "0".
- **Button**: A blue button labeled "Attach script" located at the bottom-center of the panel.
- **Expandable Section**: An arrow icon on the far left indicates that more options might be available when expanded.
- **Three-dot Menu**: Located at the top-right corner, suggesting additional actions or settings can be accessed through this menu.

### Visual Flow / Relationships
The most prominent visual element is the expandable section indicated by the arrow icon. The flow moves from the left to right, starting with the title, then moving down to the input fields, and finally to the button at the bottom. There are no arrows or lines connecting elements, but the placement suggests a logical sequence for interaction.

</details>

<p></p>



* Uses connectCodeBlock event `onPlayerEnterTrigger` to listen for a player entering its trigger volume. When this happens, it sends a StartBanner network event, passing the configured `banner_CUI`’s entity ID, a message, and a duration.
* banner\_CUI must be linked to the configured Custom UI gizmo.
* You can override the sliding banner’s message or duration by setting a new message or duration. Leave this blank to use the message or duration in the properties of the sliding banner’s Custom UI gizmo.
* StopTrigger

<details>
<summary>StopTrigger</summary>

<p></p>

[StopTrigger](../../../image_data/2f8ed225531772931878a7a900bdff627204c1a2d8df7dd428524a6910676efc.md)

### Overview
This image depicts a user interface element within a software development environment, specifically showing a component named "SlidingBannerDemo:StopTrigger". The layout includes a header, a content area, and a button at the bottom.

### Key Elements
- **Header**: Located at the top, it contains the name "SlidingBannerDemo:StopTrigger". It has a collapsed arrow on the left side indicating expandable content.
- **Content Area**: Below the header, there is a section labeled "banner_CUI" which seems to be a placeholder or identifier for a specific configuration or code snippet.
- **Button**: Positioned at the bottom, it says "Attach script". This button likely allows users to attach a script to the component.
- **Menu Icon**: A menu icon is located next to the "Attach script" button, suggesting additional options or settings can be accessed through this icon.

### Visual Flow / Relationships
The most prominent visual element is the header due to its larger font size and distinct placement at the top. The content area follows closely beneath the header, providing context or details related to the header's content. The "Attach script" button is the final element in the sequence, drawing attention towards the bottom of the interface.

</details>

<p></p>



* Similar to StartTrigger, it sends a StopBanner network event when a player enters its trigger volume.