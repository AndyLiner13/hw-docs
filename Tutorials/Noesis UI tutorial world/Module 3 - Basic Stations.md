Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-3-basic-stations

# Module 3 - Basic Stations

This section introduces the foundational stations for learning NoesisGUI UI development in Horizon Worlds. These stations do not require Typescript to function. Each station focuses on a specific UI concept or feature.

## Station 01 – Text and Fonts

![Station 01 - Custom UI Fonts](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/577013235_858449910026295_3977647311517578900_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=baGd7kgSxE4Q7kNvwEXi11M&_nc_oc=AdnbR1dP61gnqBxP2s6UQdOhJg9W52_7kd3xW3hD_r2QJ9i1Gb91lw5n5kidBvgOOZs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=4zQcoxYDohS5_kHMN5C68w&oh=00_AfnvQJwrnUP8fXYZtER1IxYKTg-nXvk0ktG0Cl-XVP082w&oe=694BE84F)

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

![Station 02 - Image from Asset](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/577046578_855959410275345_2794836805106663775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=AXt5U_GCIAUQ7kNvwH34ntG&_nc_oc=Admg039W0GijaMdJBmJdaFpedDFiMcDzmVwERx0RHQQu-y8InZbAkLVBlrO1Lw36UwM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=4zQcoxYDohS5_kHMN5C68w&oh=00_Afko-YeW8C6Ms8RXGGrtptv1-FjhfCloXloLpa7WxBrFEQ&oe=694BC621)

This station shows how to import and display PNG assets in NoesisGUI. It demonstrates setting image source paths, combining images with shapes, and using gradient backgrounds.

**XAML Example**

```
<Image Source="CustomUI/TutorialResources/knight.png"/>
```

## Station 03 – Scrolling UI

![Station 03 - Scrolling UI](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574478341_855959380275348_4850035194972629353_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jDmzN2eCUQoQ7kNvwHrynyh&_nc_oc=AdlBWh4W0bhb58TTUJcc9wxvViQ4OCJ3_wXUfb6iqI9R_SR83aAJqjLNl2uysYYDgp4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=4zQcoxYDohS5_kHMN5C68w&oh=00_Aflor5ZRyfZCv1ReejrytmDXarLV8hgt7jVCNkRJJaEQ6A&oe=694BD192)

This station demonstrates how to create a scrollable UI panel in NoesisGUI using only XAML. It focuses on displaying content that exceeds the visible area and allows users to scroll vertically to view all items.

**XAML Example**

```
<ScrollViewer VerticalScrollBarVisibility="Visible">
  <StackPanel>
    <!-- Add multiple UI elements here to demonstrate scrolling -->
  </StackPanel>
</ScrollViewer>
```