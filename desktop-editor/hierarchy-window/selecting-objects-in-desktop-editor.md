Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=olHORgb8W9UQ7kNvwE3HOi3&_nc_oc=AdlZMoGJNQwGm8jlcU4jZWJC5T6nptHC5PoYIC8mWv2dT5r7EhnP66007Af9s6fva3U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_Afj1p13ni4YgdUYZX67NkvkEWsK52-B7ho9ZrtOqoXLkAA&oe=692BE9A2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=e4b2XQEhR3sQ7kNvwGp86Ea&_nc_oc=AdmBQfbQQIXRs2O8Js7iHJdX-q47xD-oGRX82x3E--hlfsvRwfT1Xg1z-8sSki81PRg&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afh-ehWOzEC_2mQcMWByCpTIplgxgZajsisZtMN2Mzc3qw&oe=692C011E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iXcplCE10jkQ7kNvwGx10uW&_nc_oc=AdllrrZtEd1lNdxIyfLqHvsHDHoeu3Gw9rkSV_m6wj0oHKPvwazNXnx85ByIXLdEOmc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfgF35BYgiwM0feuA21nd7ODMsBsGXDkGUs3ZfbCSje9MQ&oe=692BEC15)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=H-FQrutWQskQ7kNvwFVfvz1&_nc_oc=Adl4_HrG7-ZR8fPUiN6iWkLJ33vUbs0R5buw_ZxJRqAq03dSwHDaVB38a4G_SIsC3ys&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfihIjng4xPRproaMaKSCNWk00lLG6tWiIoRRRL39nhnnA&oe=692BEBC9)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=YmWbE7ugW-8Q7kNvwHpJ0Bo&_nc_oc=AdkbUvYDfwjlFW-_sRFih8GjjrsSETOxZYb1GkYkVjT0uKalp5g1HHCIPk4_aovqOOc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfgD4sBn6qhOwX4CfJk80vYC0b2csoZu1uwSyR9h8HLViw&oe=692BDB63)
- Your selected objects, including any child objects, will appear in the hierarchy view.

## Sub-Object Selection

In the Desktop Editor, you can’t select a single sub-object of a group simply by clicking on it in the scene.

Sub-object selection is a feature for the Desktop Editor that lets you select sub-objects in the scene using a second click.

* The first click selects the group.
* The second click selects the sub-object that you clicked on.

**NOTE**: Sub-object selection applies only to groups. For sub-objects in regular hierarchies, the first click still selects the sub-object. To select the parent object, you can simply select it directly.

### User flow

Use this procedure to try out sub-object selection.

- In the Desktop Editor, travel to any world in Edit mode.
- In the world, either create a new group of entities, or find an existing group.
- Click on one of the objects in the group. The entire group is selected.
- Click on the same object again. The sub-object is selected.
- You can repeat this procedure again with nested groups.

## Selecting simulated objects and ghost visuals

While running a simulation, animated or physics objects (the objects that move) leave behind a ghost visual at their origin point.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=CIoFMmNDDbkQ7kNvwHsKgeQ&_nc_oc=AdnBituw8Lvg-07mtXcfSe3HldjMNFsSOCGuiEiWFZpKn1cQimvmFXsv241zvyIxHGQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfiPgKApBc7gmBp3WA60KNi-WsZ23WvE2TkPHENRfAhV0w&oe=692BEA7A)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=_LPSGbTnz6IQ7kNvwEdxZlk&_nc_oc=AdkZ7P-uZgbOrMRv55jBe5TIix5ZLY0FKTkcXjqnhUWK6-6zJUXJ3M4_kwW8Bj0YhRQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfjVwhalccIuInwZpiruNohQEBO_bNtajQo2cfAHGVjaYQ&oe=692BF270)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rhLG5e_6nDkQ7kNvwFjiF4t&_nc_oc=AdlbVos34T3vjbH9gwaxWVtkB4lrIh834k8ohjqxMc_wd-jN5uV_jAwlaehby-HzG0M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfiiQBZPZPIqoNEaXPzMepc7pBLg9X7i3FFEunXMN012RQ&oe=692C0F00)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=buf6thqI2eoQ7kNvwGx9xJ3&_nc_oc=AdlWhucTllPFUIpFdiTpuyrIhIkcxftgz27-qf592ne_W16nflx5y2M-D5-n0GI8B_w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfgS2rXYQdUHde9iBtvZ5espwHJj4G_BNQAtTwePQsKJdg&oe=692BEA93)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=djMjycBO9yoQ7kNvwGcny9L&_nc_oc=Adk-QNB6WJAZWqUdOaFhh1hoZpoQE5uOmU4rDAiTQm4ux1R3kliZyRd93YhN59YAY_w&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfjTY1YhNGSoWe1u4U9SQkqg47Ogl-DjG6llUq9x2qr_tg&oe=692BE732)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Vo1Ujf1-QU8Q7kNvwG2pffu&_nc_oc=AdkN2UqhOc8wZHuFvIQ0QPktfxZw9Bok_hVqK0jLXwYR8h_su0rEQwaCo-Tpmf9zJgY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_AfgtOmkx87rhY_ne3Gv4TYAisVc2eZJVYCZWVRLiKbBosA&oe=692C09EC)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=wrkny636zlkQ7kNvwFu-fSf&_nc_oc=Adn4cD0ZtMC8LWDUfSGg9HLOPZ66iDpcjWAgg94nWFyS-6q2BB9hqAzB48yj7RtDvcQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_Afiz4FI7gyNOkj-r2HpDTuKh3MTHwv4wkCgMcQ5_TrGnVg&oe=692BE0B9)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OUKmVKgI_PIQ7kNvwF66vc2&_nc_oc=AdkHdz9QS-lQstmtLgHzZD5LMQLJsRIpq4ENihHC9ZZ9wzeNrZc_L-zxC_5WSrGoqdo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_Afiqi45UkKoJbCMIpxKkbvBSQOFkXV2tJObi3U0ALB1mZw&oe=692BEF3A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=RlWQ8g9ys6oQ7kNvwHtbFZS&_nc_oc=Adkg0yWFPxcGbMB6-LDEr6W_39iIDdLWY6vpyPV3bTqturvnmYbQr1OG14h4oEhU3qI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3WOxw_XYjaNUv2M8m3hkHA&oh=00_Afh1CkWjXAy2kQdTzmxYpUBYPUGfuhMgr_SMKdn4GLGdEw&oe=692BE265)
- When you unclick, the blue outlined objects within the box are selected.