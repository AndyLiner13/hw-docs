Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-3-basic-stations

# Module 3 - Basic Stations

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## Station 01 – Text and Fonts

![Station 01 - Custom UI Fonts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/577013235_858449910026295_3977647311517578900_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=yANimxJ2XDIQ7kNvwEY33H4&_nc_oc=AdlZha04aoohOic5d9Lh082ewzw4hA6z4WQ2m93bChOA1RHRX0X-CmufImD1el1wjxQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9lZs9pynntchvLmDMeYDlg&oh=00_Afh-lrCNKCcv3I9vxPRiu84MAVyANnD5e2e_VseZ9Q4QmQ&oe=693119CF)

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

![Station 02 - Image from Asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577046578_855959410275345_2794836805106663775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=rLBcsJi6ytMQ7kNvwGhVF3M&_nc_oc=AdlL0KlWmly10UvD3At5baqLBuhjvlnsnq_Poh5G29JQx6_3ZiJc_tJgs3dpGG0MZgg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=9lZs9pynntchvLmDMeYDlg&oh=00_AfidLcmvUMIprjGUB-fPvQII8imC8JZC-6Zoz_CoAE-2gw&oe=69312FE1)

This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## Station 03 – Scrolling UI

![Station 03 - Scrolling UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574478341_855959380275348_4850035194972629353_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-6ncaxGr-F0Q7kNvwEi3yPf&_nc_oc=Adn8e1yVo3ZmKZ97od8GVF3Ywsk87CDnuQPOcLF_dNe-4U6mY0Zm2TK8ZTQfjfqxiuA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=9lZs9pynntchvLmDMeYDlg&oh=00_AfidUxsQVODcnqmOYaNku6aSFO1PGc0GtxJanKJCr2gs8Q&oe=69313B52)

This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```