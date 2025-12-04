Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/selecting-objects-in-desktop-editor

# Selecting Objects in Desktop Editor

When working in the Desktop Editor, you can select an object and edit its properties or attached script by:

* Clicking on an object directly in the scene.
* Clicking on an object in the Hierarchy panel window.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908562_512532827951340_3391031282719828034_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=LsvCuPdAXNcQ7kNvwF0Br2y&_nc_oc=AdkBnwgVQOtaxz5HM0A_FyF3X3MMPRsEZgWzn-9ny8xAbiiFK8CbPIBR4lyi3g9XJ_U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_Afm9ls4k2zKrMu-_FaGaYiloPxWisAvhv_YgylElqmrxPw&oe=694BC5E2)

![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75416836_1103563701114794_7392234213205777378_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=anTtycC94nwQ7kNvwFhiwOb&_nc_oc=AdkbUBtrCwZIiagvJnx5RticaN-8Ls_JgMrB68bGlRf-u7jYwZzoEjxWiUkgy3ByqZU&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkfIC81nMMbTSHRdlSik7DlPpJtBcqLyEty9Q34eAAr0g&oe=694BDD5E)

**Note:** To redirect the view towards a specific object, select an object and press the “F” key.

## Selecting multiple objects

You can select multiple objects in the Hierarchy panel in the following ways:

* Select an object, then hold the Ctrl key and click another object to add it to the selection. You may repeat this until all the desired objects are selected. You can also use this method to deselect individual objects.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915738_512532831284673_8889899307286045688_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=dVEBHMyaC2AQ7kNvwFwlpNz&_nc_oc=AdkD1clMlNrtkZkUajJ6lD45iq7QxLpY9bAS9RuFpi1lD6wqAaVVi1F7iEY-4bQ5PzQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfmJrfF8BCxlxxgoccslcdHE4MZpM41hSPukrfpnrWGl6g&oe=694BC855)

* Select an object, then hold the Shift key and click another object to select those objects and all objects in between them.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982529_1576236403284573_8965784620002181160_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q4Yn7fzAlIMQ7kNvwGkUzAQ&_nc_oc=AdmQXvhlLrVswPXsSnBLjCStJUhPNBRzzlpC58r_p5Qs1gcD187NRi8As0YweWAdXds&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afmv1W9DeULrdw5iltcZe9uS3KFGUSRsxlRNgVwxQWzZ7g&oe=694BC809)

**NOTE:** You can also click individual objects in the scene while holding Shift or Ctrl to add or remove them from the current selection.

## Duplicate selected objects

After selecting an object, or multiple objects, in the hierarchy view you can duplicate it to create multiple instances of the same object. Duplicating your existing objects can help reduce the time needed to create things like multiple instances of an item or texture that needs to be repeated or reused.

To do so use the following process:

- Select an object or objects in the hierarchy view.
- Right click and select **Duplicate selection** from the pop-up menu. You can also use the keyboard shortcut **Ctrl + D**.
  ![Duplicate object option in the hierarchy window view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/475996211_643175471553741_3194313167617336242_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IPLI7BVnEygQ7kNvwEKjrAK&_nc_oc=Adlpsx2-glEKYyGlQ8rqCk6ei7ApyA2PoRm2u7UF2neBd-dhxwqaihTQr51ydZTGt3o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfkISnBHkLR0F-u5vlihWU1i70zEaS2bG1UN4vlQto5KDQ&oe=694BB7A3)
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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/453001795_512532771284679_6244440347639127473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZsXQ11x1frIQ7kNvwGlC43i&_nc_oc=Adkm9IiyrPNKYs_KAPo6CtywFhe421T0JRrv_jPCeQwjfS3UMTHl4imfoA2skKR9hE4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfnNugn5fU2DDkiB0l-ZV9WU4AhYDpSPKF-m4JQG2LFRHQ&oe=694BC6BA)

While the simulation is running, you can select the moving object either by clicking on the simulated object itself, or its ghost visual.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653115_512532804618009_5932082721550188701_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4bxamuy6ABYQ7kNvwEE1abX&_nc_oc=AdnzBx_6DdNLy3T7KzcvAk00SJuyVTISGFpFtbiqKBIRmmHqm_N4sSygzM2uoe2eBXk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfnViTEA6kukTqsmDmt3xBETYDs3yE9qtWSTk_4mo0W4dg&oe=694BCEB0)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452635555_512532817951341_6397424954436022188_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ho9Zkj5LVgIQ7kNvwFOA504&_nc_oc=AdlxGDq-auOXhLghyQy0ZekZEb26G1GprLd-dOiH4RdO1P04h--ZojN0vGM6YKgJLCc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_Afnx2ZyzO_Yf-tAHg4vBhM2NiE0nqNt6Tifu6yTnEjIxoQ&oe=694BEB40)

This works for both regular selection and marquee selection.

## Outline colors

* **Selected** objects and gizmos are outlined in blue.
* **Locked** objects and gizmos are outlined in red, both on mouse over and when selected.

![56b7a774-5178-4932-9458-82bb7b33895c.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453000787_512532807951342_3805190600803216520_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=NAXNPCNInLYQ7kNvwE1_Oz3&_nc_oc=Adn-4OuUHGj7fkNHTkkxywbVn6svAyNMxGEye5Mw5AG06wEZNTfnVCUsWxMfl5kuMaM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfnxYWOlJbfJkxqzO2BkPGZjzBR7gZBmYpdgNAS7r_zOQg&oe=694BC6D3)

## Focusing the camera on a selected entity

To focus the camera on a specific object or gizmo, select the object and press the “F” key. ![](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39001711_555881607346476_6364462366655503089_n.gif?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=QgCeeiEUqd8Q7kNvwGq7ukF&_nc_oc=AdlCgbggGaNuGGbB0BRtSCYFyPYaiBhM_xSlHPPW0a0CaGPG01BbwkC0qh2VXd-xS2A&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfnNRftSE-fftos_tZFhmz1IOQ2bQwHSX-ttgbmPwI840g&oe=694BC372)

## Grouped object behaviors

In grouped objects, when selecting a child object it selects the whole group.

![SelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863001_512532794618010_116291496740666727_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=fqrH5JjWGmkQ7kNvwEI6SL9&_nc_oc=Adk-Je-rDfSzQYHNczt4t55IVjiHsYUaMVj91UbR8B7oVDUCTWwkVZMDmXTTNQKQi48&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfmKZP-4JF1AwCbzncpATvByEC6lDenjKreWKK5NjYnJDw&oe=694BE62C)

Locked entities can be selected in the viewport, but manipulators are disabled on locked entities.

![LockSelectionGif.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452753851_512532824618007_1878177382760896463_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=CyjvxMhM7WIQ7kNvwEeFrHM&_nc_oc=AdnDBJr4vYOXJ9J-faQJIQyOj2pymrxV76-CMkCtA--3UXsHEciBIbqo9mnRXd9RAVQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_AfmlYzlslZcXBz23AF8mb_ctY8zz3m3fkjHaybhi4nEKmg&oe=694BBCF9)

Ghost visuals of a single mesh entity use the object’s mesh, but the ghost of a grouped object uses the group’s bounding box instead.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452635059_512532797951343_6323948175748851752_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Hqnk9O8A7nUQ7kNvwE3VkQb&_nc_oc=AdkNAAdsW-oHrBEfiOPHTH5_L1ZD-fkaVtIOnbaGIh6owRvMntGiuhrcsvIHw3_PTMQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_Afn6x6Dg1ZLUHP3zT9yv0yCDKCbOR6ekMMCNq-Cpvve7Yg&oe=694BCB7A)

## Marquee selection

Marquee selection makes it easier to select multiple objects. It simplifies the selection process by allowing you to select more than one object by creating a box around the objects you want selected and highlighting them in blue.

#### How to use marquee selection

- In the Desktop Editor, click and drag a selection box over the objects that you want to select.
  - All non-locked and visible objects within the box become outlined in blue.
  - Child objects not within the selection box but with parents that are within the selection box are outlined in white.
  - Any object within the selection box and belonging to either a group or asset template instance will result in the entire group/asset template instance being outlined in blue. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886151_512532757951347_636423381972171589_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lh-APJvyAp0Q7kNvwF8gqie&_nc_oc=AdlgaXAMRPrVU7SDTXeoir17zz6fWmj-RiPZGCh86g6k0ZOVr7xPaCWSa3hmiC5Yl_s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=huG2USczmoOvsdwoEBfxaA&oh=00_Afmq3B6e0RzAeQNNOhe_BKzU2aVTK3IL2aHxQiEaqY9dHg&oe=694BBEA5)
- When you unclick, the blue outlined objects within the box are selected.