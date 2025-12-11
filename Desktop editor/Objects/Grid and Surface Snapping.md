Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/grid-and-surface-snapping

# Grid and Surface Snapping

You can snap objects to specific increments in your world with grid, angle, and scale snapping. These features make it possible to be more precise and uniform when placing objects. They are supported by both Local and Global coordinate systems.

## How to use snapping tools

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554816_512510771286879_8452219421137191783_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wSWmJ0Pv2BsQ7kNvwFhZBMM&_nc_oc=Adl_EWVv7MC3Giek5Cx1hGb52RaG8DW1mK2YgGRwJ3XSWDubE0fQ5p8yY-Yxk42dHJk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vxLEBIPxP2CTEwxNIrDtUA&oh=00_AfnX5E2N75okbD6wBk5MDG2TCscwzjFCy4f_rRVpGjxX-w&oe=69559114)

* The snapping tool icons are located on the tools top bar to the right of the Select, Translate, Rotate, and Scale tool icons.
* Get started by selecting a grid, angle, or scale snap icon to toggle snapping on or off.

### Snapping Hotkey

You can hold down the Ctrl key to quickly enable snapping for your transform. This acts the same as clicking the snapping button, and you can toggle this on/off before or during a transform.

## Rotation example

How to rotate an object by 5-degree increments:

- Turn on Angle Snap by either:
  * Selecting the Angle Snap icon in the top bar (middle option)
  * Holding down Ctrl
- Set degrees to 5 (the default is 10).
- Press [E] to toggle into Rotation mode.

## Snapping tools modes

There are three snapping tool mode options:

- Grid snap mode
  * This affects Translation [W] and Planar Translation [W].
  * Objects will move along an axis or a plane by relative increments of grid snap units.
  * Default Grid Snapping is set to increments of 1 unit.
- Angle snap mode
  * This affects Rotation [E].
  * Object will rotate along an axis by relative angles of angle snap units.
  * Default Angle Snapping is set to increments of 10 degrees.
- Scale snap mode
  * This affects Scale [R].
  * Object will scale by multiples of the scale snap percentage value.
  * For example: 100% means the object will scale by 100% of the starting scale value of each snap.
  * Default Scale Snapping is set to increments of 100%.

## Relative and Absolute snapping

You can toggle between relative and absolute snapping using the dropdown.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916947_512510774620212_2622698473251034074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RvXYlWEGnLkQ7kNvwH_MqZ8&_nc_oc=Adnek5v2_ne8avTB25I6aADnOBfRxPBDwLNR_0xbv0IUOoDN5zaNuc9G5DxjRvSjqTY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vxLEBIPxP2CTEwxNIrDtUA&oh=00_Afn73AeD8PotRrSBMvuhkV0hUX0DuO2OcxI-a9unaIsvsg&oe=6955A26E)

Relative: Snap to a value relative to the object’s starting position.

Absolute: Snap to a value regardless of the starting position.

## Surface snapping

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452817319_512510761286880_2850529185345820209_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0hiEuypP9csQ7kNvwFa9guo&_nc_oc=AdkmjpohbbNyUKhREuYP5C8CkGC63L_WfHxa-h58SKETVYDR1CGud7sM64vUoaoxZLg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vxLEBIPxP2CTEwxNIrDtUA&oh=00_Afl1ymiXKMROJKtPgeIh_9Z20tvYOqEbmb-X1MgI0blp-g&oe=69559A95)

Follow these steps to snap an object’s pivot to the collider of another object:

- First, select the object you want to snap and change to Translate mode [W].
- Next, click the surface snap toggle button (or hold Ctrl + Shift) to see the surface snap manipulation handle.
- Then, drag the orange sphere handle on top of another object to surface snap the selected object to a collider.