Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=79g5DrS18IYQ7kNvwGyktfV&_nc_oc=AdnvoGAr969HTBhtmA6LoNYYcq62dT5bsnMxy3CWp5catA9BARc0Hs76ac2UrsdM9HFoM5rZErIH52eROjHRJyAE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_AflP6PuFKC-L4rEghS-FCF3aY8At-LFRmXs_fJD4Wd6q_g&oe=695570E2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=D--zrFwaf0oQ7kNvwGNjiEX&_nc_oc=AdkYiO81niydtNx_hdgRN6PQVzErdIgpy7uuQna8j72GNiZwTdIby-F9I5Oy_kIUC_7zha3kWtFL0vWSRpIOhOFo&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkTs8AUbogWVJdtni8ls_JEq4Ee4gWzmPCB6_XGkEXW-Q&oe=6955885E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cz4N2eDwpSUQ7kNvwH3jbyI&_nc_oc=AdnEvN0D-KFQ9ZFH3BUlRt6nzrBPk-7VK3cDlgiEUBFrWaRneQikl46A6Opu_uqCUf9mKTqu4KoZdhunq78yjtAH&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_AfmjTUdbFyrnWxaPgyc9DrrgkchO274-KYjuA4XsG4-gDw&oe=69557355)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=OMIN56qKe6EQ7kNvwGaLYjQ&_nc_oc=AdnCi6o-Eo6qnFSMxeORExKTQ-wWhX90YM5rMKEPoI-y4AsAu0f8VYy2rB05-IDYII3LnkCjAkeFNXxG-y0kdcOI&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AflXM7OrVZljSxV9yjf0rQNJvngQWuzXmmXhcdwEPTRVGg&oe=69557309)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=lYVKZPaSLd0Q7kNvwH2jyRU&_nc_oc=AdmBCptIAg2iGmwvDUYxOQycf1getofeVcpgSD-eRZJ7y2bq3P0gWDYwF68X1K9BzQLimKxziOiGL1FXqaP0P4pk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afk1KnetcVJUTtCAJuI3lxv-6fLTLtfsCI7RPzO9vkd1Ew&oe=69559AE3)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xtoZHkMMMfIQ7kNvwHeoN8h&_nc_oc=AdltUSqdLj74evfNK8SSc4RkOE1-VZFSJj9sx2GeMbVaf30asHI2j8UcOpWtQ5Vnciko0S7Pxyxqmc7dQ0QvjCFj&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_AfmbeTaX8u8SJMU_lgGotA64NQq-4HZM2cRZ5KBx3mEyYg&oe=695571BA)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=D2DrKgoF8jkQ7kNvwHJlLu2&_nc_oc=Adkxvow5PlU2mwm2SNPXDMxYWxDgCp29Z24pvzaEZiibc7HdS3yx_pjfMIOlITMARsgQcOzfYVrAXT1v6nr0TVGe&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afl6Fl12QbU78XqVGp0sEd2ULiTD2NOk8jvrS02DRiciaA&oe=695579B0)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=IiOWaFo5GU0Q7kNvwG4xJga&_nc_oc=AdmHG-gAaQWujU4_YD6mFTcNR_gxYaVgHqqk4gkWPg_pAujKfVFRysqX-oCXo6t6W9YKUnRVPAjUcoK9zTf4xtcc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_AfmV5ePWKYpKqoHz0lkaE01IyWVS61ZIGAs4dZBrpMQX2Q&oe=69559640)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=_SA-iiK-BZsQ7kNvwE81-pe&_nc_oc=AdluzX32QIRrDcXb4qfbOl5crE5nAa3B66NO1jk-SGVyFb9LRYtf54_UeNRxXPKlOFRkgGeMtDcBkj3B4zvDBFMl&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_AflGu2U_njArL0eG6sg8DP4LZE54q7zlHlPStG2ZqOYBhA&oe=695571D3)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OUoRGGWZCRoQ7kNvwF-oGO0&_nc_oc=AdlxZTIE56dMhOu1xTYsumNZFLFq493g9exGAKQYOF4qIIjppVgpQgsbyL8f1KfWZby4CNb6e4b1sOkxL1JSfNzp&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkG3XhAA1oYOGS9IW1EPV6orO-Ipq5jjWQpmmH_Jp1D8g&oe=69556E72)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gXaBis_pDj0Q7kNvwFnxNaT&_nc_oc=AdmsaYKrQDRpUpKPcHAAyZvZWctLLrFHYLpeYCVtYDyvMEgM262SowJ2CZ6RYYSQ77Y9tkjhkreyV4SqKM1c2kN3&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afmw69ef23L7GyNbxKjakE2vNiJVk22HJrD1b1Wf75ivMg&oe=6955912C)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=CN-UyQbP96oQ7kNvwHh_Qio&_nc_oc=AdntxQ7LM2ZUW0C0xYpq6h_HtlkmjPJQsrq2Kr3kUn4KSe9zKYUIzF_xPEbwfgsiW_AbyprxKP3uEN3TZrTa7mOK&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afmo4kYh-ArFrO-rJr74Ns0VFNBske7zRqgmYvzTozVfug&oe=6955A039)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ofSAyssbzmwQ7kNvwGIYd9j&_nc_oc=AdkAUhQxgM54su43dSSScCl3LXIe0CQw78LfJbgF1QyrR9ksAImKL-5t0Lc-XaZ5jTYCi7hDODVnz_m1bosMjGCv&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afntxhgqmu98H6QW7hzS1qI8XDFp3pYVskz2-IDd2jFZqg&oe=6955767A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=n3SoUzuWL_0Q7kNvwGW5U_h&_nc_oc=AdmhKfqbXHgRYaGfSkM5xkj2mryqmueDaBqOpAgf20NlPQ0UMeu8Tel07mrr3yZAIUghI4HIZU35nD8Trwgo0GgT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=BOM7HKFlXV5jhU1AlmgDVg&oh=00_Afk6ouajQa8qCzWxGcBHhXER2WuEvpFvx0HT5MeDIvyOEw&oe=6955A1E5)
- When you unclick, the blue outlined objects within the box are selected.