Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/filtering-and-searching-in-the-hierarchy-window

# Filtering and Searching in the Hierarchy Window

You can filter for:

- Assets and gizmos in your virtual world, including:
  - Properties: Tri-Mesh, SubD (helpful when needing to find and remove SubD assets)
  - Gizmo types
- Objects attached to specific scripts

## Using the filter

The following steps show how to use the filter:

- Click on the filter button next to the Hierarchy Search Bar to open the filter:
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652782_512510851286871_6380904805576974054_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=i4IK6nNBz8cQ7kNvwFFqp45&_nc_oc=AdlM7mnRGneAhZKFlGNHNDH5KvkwplnBnSUtPo1OIxoMCLXwng0YJ8ZHrBJpqsqmUFY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfiwcdpwN6W9EjiiH8YPu9Cdx4UVWlRl4E61kSDPqp0ysA&oe=693126AE)
- The filter provides the following filter categories:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653140_512510847953538_1821291780153166643_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=65C4MDjLdzgQ7kNvwFq1ZiE&_nc_oc=Adlfu2_QIDQM8_-GI7QZPOFhTQiJdPIV13j3-5Et5Q44s-7s9Vc0ctzp2h2-2F9ifPg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_Afh18clrmjuBqFAZRdU4XCjWysyGNbY1Kn1dfi8uoObXDA&oe=69313860)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452521526_512510857953537_4081630876740288461_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wBeJXuVu3wIQ7kNvwEYy-iz&_nc_oc=AdnwAW9GtgjMnD3ZtFf2Q4nBADymfPnt3DlJRIwvJsXjAllmDsrY7kkUWn5hwtAcwIY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfhoDSs11pn41XP-0Hs7rQNjjoEnYB9tBalYi96gj7PGHA&oe=693147E5)

## Using filters to search for object attached to scripts

- Select the Filter button ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452598609_512510861286870_1480627862075770503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pIN1K3ELg_4Q7kNvwEtmYTd&_nc_oc=Adk7zfmKZqUsa_tvcp63lcA8PsgsJCfvEaFHXxZrk0DU6l1DIJutXKGBYuHAl6F-Brc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfiVlmq3EIVSwr-0Q6b1gGqPzBErqLCiIeeQ3xGizXW9vw&oe=693139B8) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512510871286869_5743455761445978088_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=7W9TBeOku3UQ7kNvwEldBJX&_nc_oc=AdkH5vG2oXfVsMAJIeJNkulb85Q2lqU0VpmPQtOT8AWUsRH4QaJHIwAeztyLvU9UW-4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfgMiLsysKfAcBx88221fLIAyoKH9f_6CpQs9W22bX6aLw&oe=69312EF5)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701853_512510854620204_892051748843744519_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wo5Ka_7GBDUQ7kNvwFtZPTz&_nc_oc=AdlZKzDg3IQgGnBXgRkfcJCCHB80MT_ARIpWFyx4Mx8mm-xJTMhuMCR8bbN80R7NtnE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfiQFZ1_xM3FkGtuOkwmh317TsycZS0_0UpLPb0nNvWu0A&oe=69311E9B)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652041_512510874620202_5192617623970710737_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lkQDWIz6vZIQ7kNvwH5A6q9&_nc_oc=AdnWBoClNw0jR0TnNPFya5ZOjW4XdtrK4CtoYnpWdagbNw3W9LMIqnCBR2OrlPNc7Z0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfjGsGcWzEoAk40ujcy95eFgAYoRU6qvMmeAOq7d_3YHyg&oe=69311BE9)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908758_512510867953536_9205559531017446698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z_zS-C2SCgsQ7kNvwGtQzQe&_nc_oc=Adm7Q-YoIAjbOEZE6mMiz_WSsYldP6my_xYafOgwWaGRsx7hHWs6_dlXhQGJCu9Citk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=H8wxpNogTkeXs-cGT90-4A&oh=00_AfiUgyOyNldGTqDFrz9qu_VHmGHkJ7k_MU4fu5FL6nn4Lg&oe=6931308A)