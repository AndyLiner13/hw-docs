Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-3-basic-stations

# Module 3 - Basic Stations

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## Station 01 – Text and Fonts

![Station 01 - Custom UI Fonts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/577013235_858449910026295_3977647311517578900_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DwdCxFoH4L0Q7kNvwGcICcc&_nc_oc=AdnnUFXBpriZinZx3sC5GKjODZHkupzI8aWqw8zZnsI1d8YOoChZkHE6PIIAPB-0UdU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PtBL4q3fe8ieYQN7l-fZUQ&oh=00_Afi6Msxfp_qxKn1s4y67AJ_XJbhePWgN8CEho0sHD3m__w&oe=694631CF)

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

![Station 02 - Image from Asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577046578_855959410275345_2794836805106663775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=HBfqCkgsCsAQ7kNvwFvwu7B&_nc_oc=AdmwzWWFX3gmAW5XBs9mCBxTfK08GkZlAIIA3UpYWSI2nzrnBLwdD7-EmibK66p83oY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=PtBL4q3fe8ieYQN7l-fZUQ&oh=00_AfhbqaIVcnqIVO52uVhUnVIoB7sShNWgGByfsU3PiNwUhQ&oe=694647E1)

This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## Station 03 – Scrolling UI

![Station 03 - Scrolling UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574478341_855959380275348_4850035194972629353_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=oZYIpqes63wQ7kNvwFmVEFb&_nc_oc=AdkAd6BmTapTgb6DrwqCYP1XyV4BHcFJI1EC_03eKaS259Nfslx-n2CxViMq-RffAfQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=PtBL4q3fe8ieYQN7l-fZUQ&oh=00_AfgVPp5nVfOSk_7TAXNUpOjTNExz064LtedyVAawMOZMuA&oe=69465352)

This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```