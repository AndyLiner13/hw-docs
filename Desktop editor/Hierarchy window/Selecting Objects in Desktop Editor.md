Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6-bEQ4XYYI4Q7kNvwEPDZvW&_nc_oc=Adn-Wu04wbzX2j6rsLudaL2Lhbya57VQwUqtQ8WT-4AKjfhsO8gSgXFUXoDtflgPpO8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfjbFBZox-kqCTbmmdG7B973CV5lH9m6rhmQNjmUstjRIw&oe=69312FA2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=g9XHpQCLwhsQ7kNvwFya1cZ&_nc_oc=AdkKSA7rP6XPTNcRqpw0QSsLmBk7sfyUus2cM85dwQWZ3DMxZyxcpfhg--MMHmnkfzU&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfiifrpQfM1vItOlQDCHYZdcFgohppl5-PRkegFlI_sOOQ&oe=6931471E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rqW8O5ovuW4Q7kNvwHE_T6j&_nc_oc=Adm82LQYqVce9_5bWxlSPtjUTh5DPkt4NEutMpgt5tNlku9KDX1zwI1PCM5YAtoZnFk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfhwengvXb_Q5u4NJ-l9BPRETVcwh5Yxl1uSFJrnHNOeqA&oe=69313215)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4oFvH0PkGAEQ7kNvwHk_L7c&_nc_oc=Adk03Iy6m5VQKCkgB2_2Ty3Au1hyTWcbEHAmlJVtcJCD4EC4x7Pkc1S4wq9QswdXUic&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afgq2F-P78nssRW7zOm-sblMRWP_boUBHJxrQv-dvmuKsA&oe=693131C9)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Phz8JHI5LZQQ7kNvwF4HFTs&_nc_oc=AdlV47xNJzTNJvjpD8vaRkUAkP_HjCvOy9laKeI2g4i0UbAx7uCnXfbA6ZrsWw8lsjQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_Afi4GiDuedSGPZWoRRLz2qYfSFr5GY-G5HwaMiCEMK4iLg&oe=69312163)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gk11aivlkvgQ7kNvwEAVhIo&_nc_oc=AdnaERKEtCM2zjGqnJP7RTds6qRycvWOdRv2B3aDlPG4NAaCq0CFlguI8_BEopLOSFo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfhZ4JwLjZ3SaqAWpaQk4sFc3PhEcXBcVt1ejxWStp4gJg&oe=6931307A)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=F-m42gTWevoQ7kNvwExfyRp&_nc_oc=AdngOZyfKDEfjgTkqn1G62EWMlSHYCqjse2pXJ9GdJOoa0MRRvxblF9Hn7Zf-VcklJk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfgR3lo_368RJrI7xFYTvFRe3D4Q2_bwqBAqNfQ2DnX5Hg&oe=69313870)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=AcKJkb1_i88Q7kNvwGvfUxY&_nc_oc=AdlvqRSY8mMcQWkKtc3Mkeeu1wic1NvW2Chux8WwXasEtRH_Qwe8eJVQUsxHwK3oB8k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfiQKWTX96OWh3o0XrDoeI61L122ILVGB-dKFru1WRxp6A&oe=69311CC0)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4n6SGwzCKYQQ7kNvwF2UzLa&_nc_oc=Adn4iT5WdVEJegmBBeztVA-6-zzY9Fr5I8oC0cYdid9C6U27Z5-0FXwCb2ZR3ORsNGI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfjIpj1CdlE5Em-K-H0QanXANvVwisx1ZGQ5_WKaOG3BKA&oe=69313093)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y0pyFsJj0LMQ7kNvwGNnteD&_nc_oc=Adkv6xelVGCrRD1BfpdfFnqpR2jiRcNhNvjGITKs6ExsMqiTtz6ntb2etAZnK85e6aM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afi8MOGQd4COOhAwsC1OBOgc05JP_U2kogLlvYZT5gv-8g&oe=69312D32)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8MnM8qyGFBQQ7kNvwHMAvgF&_nc_oc=Adl3hetY83L2z5WL1ZvJDpMzXJMvq9ghvHr3q_kulTHLqqSd4pQ5hc3c_SnpSaavRu8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfgEkff8OOS7K5bYRiUqwQ_x3jeX-xnStbmnnyH7bYdZpA&oe=693117AC)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ew8ujaKNdWoQ7kNvwEJKCYx&_nc_oc=AdkeaWHCZj9sY13rQu99ds0scKrLtmSlcuFfAT7Ffo4BOhPv7XWYE0BEpAm_TNV-uUo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfiC-hBe90ROiHGXSrHJV5scJJlxpVG0tZyZ8ZQ9tsAzlA&oe=693126B9)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=YnJ-XzZ9MVwQ7kNvwFGQ_Q8&_nc_oc=AdmSwmVJTDU8lV26PwjvhwliPQ-xt_2i83OzydhVmeT20lx5D1WUVewhIwlqc8-8fXc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_AfhXy85aMWQDkpVls-uVbIWwSM8D6iEte1yfAFSpmV3KQQ&oe=6931353A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ew8J5k82TkgQ7kNvwG4AsZp&_nc_oc=AdlDgi62ais0mUzWxhhz_QnpOP8tk_4KpUuOCs31K8jEzZIbzOxcnY6jpXtQCFR2Ecw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v0o-oySHXYjSKwKbEVOK7A&oh=00_Afj-BasGbt2ZKctMOoCrRJ8meyHjv5ynO1odbTbhSsCiiQ&oe=69312865)
- When you unclick, the blue outlined objects within the box are selected.