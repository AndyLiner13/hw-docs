---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-3-basic-stations
---

# [Module 3 - Basic Stations](#module-3---basic-stations)

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## [Station 01 – Text and Fonts](#station-01--text-and-fonts)

![Station 01 - Custom UI Fonts](../../../_assets/images/de9fb6a81495c47e5a4a9ec5ff4cb45af23731d82897cca0f420094f34db0048.png)

This station demonstrates how to display text using various font faces and styles. It covers the use of the TextBlock element, custom fonts, font sizing, and vertical layout with StackPanel.

**XAML Example**

```xml
<StackPanel>
  <TextBlock FontFamily="Impact" FontSize="40" Foreground="#FF172E60"/>
  <StackPanel>
    <!-- Additional text elements here -->
  </StackPanel>
</StackPanel>
```

## [Station 02 – Image from Asset](#station-02--image-from-asset)

![Station 02 - Image from Asset](../../../_assets/images/cbb71cd345f7b5601c1398b74786490b4f64145f3a9208ea453a3477d2e05075.png)

This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```xml
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## [Station 03 – Scrolling UI](#station-03--scrolling-ui)

![Station 03 - Scrolling UI](../../../_assets/images/a4bb917631f7602a00b97b39fbae7b9c16210811ca8230839ed09663ad4a3a9a.png)

This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```xml
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```

