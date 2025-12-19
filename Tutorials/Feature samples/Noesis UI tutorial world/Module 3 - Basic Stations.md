Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-3-basic-stations

# Module 3 - Basic Stations

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## Station 01 – Text and Fonts

<details>
<summary>Station 01 - Custom UI Fonts</summary>

<p></p>

[Station 01 - Custom UI Fonts](../../../image_data/e57d5595b0b76c4d7e16ca5156de97755bff41b5bc7d1fe1a35db8c7013b650a.md)

### Overview
The image displays a pop-up menu titled "CUSTOM UI FONTS" with a list of font names. The menu has a rounded rectangular shape with a light blue background and a dark blue header. The fonts listed are Anton, Bangers, Oswald, Roboto, and Roboto-Mono.

### Key Elements
- **Header**: Located at the top of the pop-up. It reads "CUSTOM UI FONTS" in white text against a dark blue background. The header has a rounded rectangular shape with a thin white border.
- **Background**: The main area of the pop-up is a light blue rectangle with a subtle shadow effect, giving it a slight elevation.
- **Font List**: Below the header, there is a vertical list of font names written in a darker blue color. The fonts are Anton, Bangers, Oswald, Roboto, and Roboto-Mono. Each font name is displayed in a different font style and size, with "Bangers" being the largest and in bold.

### Visual Flow / Relationships
The most prominent visual element is the header, as it is the first thing the viewer sees when interacting with the pop-up. The fonts are arranged vertically beneath the header, creating a clear and straightforward reading order. There are no arrows or lines connecting the elements, but the layout suggests that users can scroll down to view more fonts if necessary.

</details>

<p></p>



This station demonstrates how to display text using various font faces and styles. It covers the use of the TextBlock element, custom fonts, font sizing, and vertical layout with StackPanel.

**XAML Example**

```
<StackPanel>
  <TextBlock FontFamily="Impact" FontSize="40" Foreground="#FF172E60"/>
  <StackPanel>
    <!-- Additional text elements here -->
  </StackPanel>
</StackPanel>
```

## Station 02 – Image from Asset

<details>
<summary>Station 02 - Image from Asset</summary>

<p></p>

[Station 02 - Image from Asset](../../../image_data/dec0efb20b342b4b38224cb8cb6b4fe5b4893440c1398e88189ceea5fa760244.md)

### Overview
The image displays a user interface element that appears to be part of a software application or game. It features a pop-up window with a title bar and content area containing an animated character scene. The surrounding environment includes a blue sky and a curved architectural structure.

### Key Elements
- **Title Bar**: Located at the top of the pop-up window, with the text "IMAGE FROM ASSET". The background is dark blue with white text.
- **Content Area**: Below the title bar, the content area has a light blue background. Inside this area, there is an animated scene featuring a purple creature holding a golden chest and a knight in armor holding a sword.
- **Background**: The background outside the pop-up window shows a blue sky and a curved concrete structure resembling a tunnel entrance.
- **Left Panel**: Contains text that reads "Add images to your events or menus!" with some letters cut off ("E", "TAB").
- **Right Panel**: Contains text that reads "Use m..." with some letters cut off ("V").

### Visual Flow / Relationships
- The most prominent visual element is the pop-up window itself.
- There are no arrows or lines connecting elements, but the layout suggests a typical user interface flow where the pop-up window is meant to draw attention to the content within it.
- The pop-up window is positioned centrally, with the animated scene as its focal point.

</details>

<p></p>



This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## Station 03 – Scrolling UI

<details>
<summary>Station 03 - Scrolling UI</summary>

<p></p>

[Station 03 - Scrolling UI](../../../image_data/c3629ea017b77abf31c4ba9ed6cf1b837e669766d0cfedfc68e45cb9a0c91f75.md)

### Overview
The image displays a scrolling user interface (UI) element within a larger interface. The main focus is a card-like widget showcasing an item called "Viking's Axe." The UI has a dark blue header labeled "SCROLLING UI," and the rest of the interface includes some text and navigation controls.

### Key Elements
- **Header**: Located at the top of the widget, it reads "SCROLLING UI" in white text against a dark blue background.
- **Card Widget**: Positioned centrally, it contains an image of a Viking axe on the left side and descriptive text on the right.
  - **Image**: A Viking axe with a wooden handle and metal head.
  - **Stars**: Five yellow stars above the axe image.
  - **Title**: "VIKING'S AXE" in bold, large font.
  - **Description**: Below the title, the text reads: "Blessed by Odin's strength, this axe is forged by the strongest Viking steel. Used from the hardened raiders of the..."
  - **Scrolling Indicator**: A vertical white bar on the right side of the card, indicating that more content can be viewed by scrolling.
- **Navigation Controls**: Located in the top-left corner, there are icons for back, menu, and tab functionalities.
- **Background**: The main background is a gradient of dark blue shades, giving a sleek look to the interface.

### Visual Flow / Relationships
- **Most Prominent Element**: The card widget with the Viking axe.
- **Scrolling Indicator**: Implies a vertical scrolling action to reveal more content.
- **Navigation Controls**: Positioned in the top-left corner, suggesting they are primary controls for navigating the interface.

</details>

<p></p>



This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```