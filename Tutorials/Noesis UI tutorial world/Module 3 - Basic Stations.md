Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-3-basic-stations

Learn

# Module 3 - Basic Stations

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## Station 01 – Text and Fonts

![Station 01 - Custom UI Fonts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/577013235_858449910026295_3977647311517578900_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xYrb1WG-CtIQ7kNvwEp9y0o&_nc_oc=AdkG-TG_oTzJcDIwekFKc1mtxBtu8pJ3QWTpFDhl5cC-1OXJQIMaVBAgT_WXxeAlutc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EqFOiEbgInpcLhPut_JgXg&oh=00_AfhTA7EyZk-fxYM9O9Az4BrtDql2dbu8qcgTlQiU8jGH2Q&oe=692EAF0F)

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

![Station 02 - Image from Asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577046578_855959410275345_2794836805106663775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=9NfhnbIGB7oQ7kNvwHF27Dk&_nc_oc=AdlyE2mcQA9PmqJrf2U-uW22Qv5wDqWxDsCcQTD1MK209o6OS7igkW4U8A6B2PAMduE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=EqFOiEbgInpcLhPut_JgXg&oh=00_AfiC_Ar0Fw-CB1DD_YTuyB1JO6_Igu0KMwQiDEL8reNRNA&oe=692EC521)

This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## Station 03 – Scrolling UI

![Station 03 - Scrolling UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574478341_855959380275348_4850035194972629353_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=-6ncaxGr-F0Q7kNvwEi3yPf&_nc_oc=Adn8e1yVo3ZmKZ97od8GVF3Ywsk87CDnuQPOcLF_dNe-4U6mY0Zm2TK8ZTQfjfqxiuA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=EqFOiEbgInpcLhPut_JgXg&oh=00_AfhC069wmYaaW57pxguyOk7xHKSepCFySK88jxL-x05MgQ&oe=692E9852)

This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```