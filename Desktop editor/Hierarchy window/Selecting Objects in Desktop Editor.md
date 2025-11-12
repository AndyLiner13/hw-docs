Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

Learn

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6-bEQ4XYYI4Q7kNvwEPDZvW&_nc_oc=Adn-Wu04wbzX2j6rsLudaL2Lhbya57VQwUqtQ8WT-4AKjfhsO8gSgXFUXoDtflgPpO8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_Afi56Mzv2aEmwVvmQJKcHCgSE39dyREAbSjZXl9y_Pgn7Q&oe=692EC4E2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=85x1AHmQmjEQ7kNvwGvBj6S&_nc_oc=AdldnjOruGZkUsnPlG0MT5RAQPPlKR1FgMDzbhReCkQ2M-nsVa2vQfWDGIncr33XmAE&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afi6pr5BziUfPmTPvnBR3excUK-5pLOsvRJbHtgtzOswcw&oe=692EA41E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=iXcplCE10jkQ7kNvwGx10uW&_nc_oc=AdllrrZtEd1lNdxIyfLqHvsHDHoeu3Gw9rkSV_m6wj0oHKPvwazNXnx85ByIXLdEOmc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_Afi4VNvOG-uaDQZ_7oeHD4O8CCXnvd8uUWzDpULaxNIMwA&oe=692EC755)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=1EbhA1npoNMQ7kNvwH7PthZ&_nc_oc=Adlkmo-TR9EwUAH8dEZnopgEQgPeooKxMa1J9enhIQoaWfHfNDdJA8giNP5VcakCW-Q&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfiRwbDnSbiKbY2_Fz6AVkeFjA5uGdEXY43dKnj-CoOHTw&oe=692EC709)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Phz8JHI5LZQQ7kNvwF4HFTs&_nc_oc=AdlV47xNJzTNJvjpD8vaRkUAkP_HjCvOy9laKeI2g4i0UbAx7uCnXfbA6ZrsWw8lsjQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfgTjFzQ4W5LSfpukGEqaVhaibYcuh1Ykc33iJtHtUytVQ&oe=692EB6A3)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=CIoFMmNDDbkQ7kNvwHsKgeQ&_nc_oc=AdnBituw8Lvg-07mtXcfSe3HldjMNFsSOCGuiEiWFZpKn1cQimvmFXsv241zvyIxHGQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfiIJcx_jYbGwX8mQ39LLokDbz6jS7B8_YGbBoxVGFH98w&oe=692EC5BA)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=F-m42gTWevoQ7kNvwExfyRp&_nc_oc=AdngOZyfKDEfjgTkqn1G62EWMlSHYCqjse2pXJ9GdJOoa0MRRvxblF9Hn7Zf-VcklJk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfiRfIcj8Eh4YtX5OPnmNqeg2UEWm7hV22uQCIIVVNGSRw&oe=692E9570)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rhLG5e_6nDkQ7kNvwFjiF4t&_nc_oc=AdlbVos34T3vjbH9gwaxWVtkB4lrIh834k8ohjqxMc_wd-jN5uV_jAwlaehby-HzG0M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_Afjkg3uOCxm6JjkqTIyJe5FaiCSIWsI6rIHJ_xOBSuaFcg&oe=692EB200)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=buf6thqI2eoQ7kNvwGx9xJ3&_nc_oc=AdlWhucTllPFUIpFdiTpuyrIhIkcxftgz27-qf592ne_W16nflx5y2M-D5-n0GI8B_w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfgB_NpSHdcxscN9GNEQcsjyVMhP5dVjmw0ZWs74bg5cWg&oe=692EC5D3)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=djMjycBO9yoQ7kNvwGcny9L&_nc_oc=Adk-QNB6WJAZWqUdOaFhh1hoZpoQE5uOmU4rDAiTQm4ux1R3kliZyRd93YhN59YAY_w&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afh-2R_MsGbIQisl-qwo1SOSC7LFDak9qNi0qifEKR3N-g&oe=692EC272)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8MnM8qyGFBQQ7kNvwHMAvgF&_nc_oc=Adl3hetY83L2z5WL1ZvJDpMzXJMvq9ghvHr3q_kulTHLqqSd4pQ5hc3c_SnpSaavRu8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfjajgeqIN_7DvctJUV3dbuWPvgH5JV7Z4jfXpG2YLNxzw&oe=692EACEC)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=y0cdCvvBlSIQ7kNvwGjEEwB&_nc_oc=Adl-gNq7Rr36hC8tVF2aCtwkqSL5m8L1INLEPdsCylWPG3rvDEmRZIJsxs7bXktGbs0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfiTvSjL_i3LUcwP54dc1XoAHA8vCkkvyiuA1w-Sr3lmZQ&oe=692EBBF9)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OUKmVKgI_PIQ7kNvwF66vc2&_nc_oc=AdkHdz9QS-lQstmtLgHzZD5LMQLJsRIpq4ENihHC9ZZ9wzeNrZc_L-zxC_5WSrGoqdo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_Afh80IAGI0mcxxdwrSBNGBZcZvZWVaB_xu3GHWTZPwhh9A&oe=692E923A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ew8J5k82TkgQ7kNvwG4AsZp&_nc_oc=AdlDgi62ais0mUzWxhhz_QnpOP8tk_4KpUuOCs31K8jEzZIbzOxcnY6jpXtQCFR2Ecw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Ejwk_4rlBlNOTfQT92q8NA&oh=00_AfglrshOjb08F7AXyTD2TdY9TytT8EbBP8QfE7K6QqMBag&oe=692EBDA5)
- When you unclick, the blue outlined objects within the box are selected.