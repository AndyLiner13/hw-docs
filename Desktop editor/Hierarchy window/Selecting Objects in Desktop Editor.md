Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6-bEQ4XYYI4Q7kNvwEPDZvW&_nc_oc=Adn-Wu04wbzX2j6rsLudaL2Lhbya57VQwUqtQ8WT-4AKjfhsO8gSgXFUXoDtflgPpO8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfjNNgkGcLcj1jpjaWll98rVcD1MANr6UJrf7JhjP-CCRQ&oe=692FA5E2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=85x1AHmQmjEQ7kNvwGvBj6S&_nc_oc=AdldnjOruGZkUsnPlG0MT5RAQPPlKR1FgMDzbhReCkQ2M-nsVa2vQfWDGIncr33XmAE&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afg80CZAgIx4T42PBg3XQpBDIULa6kago7L2TrU8SWDjvg&oe=692FBD5E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rqW8O5ovuW4Q7kNvwHE_T6j&_nc_oc=Adm82LQYqVce9_5bWxlSPtjUTh5DPkt4NEutMpgt5tNlku9KDX1zwI1PCM5YAtoZnFk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfjhI5dqkbXkZ90Z4Umiz8JsSqMR06JvDGjM2W0n-FZ4CQ&oe=692FA855)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=1EbhA1npoNMQ7kNvwH7PthZ&_nc_oc=Adlkmo-TR9EwUAH8dEZnopgEQgPeooKxMa1J9enhIQoaWfHfNDdJA8giNP5VcakCW-Q&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhwXO_3flmLgl9R-27GUJkXXP05G1Ay9zfUniszDStSJA&oe=692FA809)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Phz8JHI5LZQQ7kNvwF4HFTs&_nc_oc=AdlV47xNJzTNJvjpD8vaRkUAkP_HjCvOy9laKeI2g4i0UbAx7uCnXfbA6ZrsWw8lsjQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfgdCeODy-_dVGZ7H7Eprr08ojsJ62SKZNrqr08V6rq3bg&oe=692F97A3)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gk11aivlkvgQ7kNvwEAVhIo&_nc_oc=AdnaERKEtCM2zjGqnJP7RTds6qRycvWOdRv2B3aDlPG4NAaCq0CFlguI8_BEopLOSFo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfjIIpnNXLxcusfhOMaoD2V-HG93BENIWKSKMh5iffH_Tg&oe=692FA6BA)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=F-m42gTWevoQ7kNvwExfyRp&_nc_oc=AdngOZyfKDEfjgTkqn1G62EWMlSHYCqjse2pXJ9GdJOoa0MRRvxblF9Hn7Zf-VcklJk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_Afi-bIwCgqoRoFGXpHXWrkdSM3uZxHYNi5k9dOiKJ6O-dQ&oe=692FAEB0)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=AcKJkb1_i88Q7kNvwGvfUxY&_nc_oc=AdlvqRSY8mMcQWkKtc3Mkeeu1wic1NvW2Chux8WwXasEtRH_Qwe8eJVQUsxHwK3oB8k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_Afi6oYgVWVnc9uhNYSzYOpuszb1IEi1wkzI-PX-33Qlcbg&oe=692FCB40)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4n6SGwzCKYQQ7kNvwF2UzLa&_nc_oc=Adn4iT5WdVEJegmBBeztVA-6-zzY9Fr5I8oC0cYdid9C6U27Z5-0FXwCb2ZR3ORsNGI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfjX7D244PVEM0pw4vHs_RDkV3UPJpKgXXXr3aOzvuEx2w&oe=692FA6D3)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y0pyFsJj0LMQ7kNvwGNnteD&_nc_oc=Adkv6xelVGCrRD1BfpdfFnqpR2jiRcNhNvjGITKs6ExsMqiTtz6ntb2etAZnK85e6aM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfhRRbE-1Rhj4KT9_736mGGn1WWldSsR5HLxlOMz_fEDyg&oe=692FA372)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8MnM8qyGFBQQ7kNvwHMAvgF&_nc_oc=Adl3hetY83L2z5WL1ZvJDpMzXJMvq9ghvHr3q_kulTHLqqSd4pQ5hc3c_SnpSaavRu8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfgYEM_QL5EkW6Psi8BSFL2ost0e91SMQYanGnRbcBxsjw&oe=692FC62C)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=y0cdCvvBlSIQ7kNvwGjEEwB&_nc_oc=Adl-gNq7Rr36hC8tVF2aCtwkqSL5m8L1INLEPdsCylWPG3rvDEmRZIJsxs7bXktGbs0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfiUa_v-wtYUCJ0uIuX9fMCSoYyR_BBauGwOcrSlk9LlHA&oe=692F9CF9)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=YnJ-XzZ9MVwQ7kNvwFGQ_Q8&_nc_oc=AdmSwmVJTDU8lV26PwjvhwliPQ-xt_2i83OzydhVmeT20lx5D1WUVewhIwlqc8-8fXc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_Afgu5FXwP31ptGnCioN6F0oRpuO2ah8d_ntkvHJOYrzX2w&oe=692FAB7A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ew8J5k82TkgQ7kNvwG4AsZp&_nc_oc=AdlDgi62ais0mUzWxhhz_QnpOP8tk_4KpUuOCs31K8jEzZIbzOxcnY6jpXtQCFR2Ecw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=D-31bI8z7dQwYQ2-NFRazw&oh=00_AfhhRZfmWuwbi-mvfxC_m6na29fUXIvb5JLIIbveV4OI9Q&oe=692F9EA5)
- When you unclick, the blue outlined objects within the box are selected.