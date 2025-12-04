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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652782_512510851286871_6380904805576974054_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=0L7jc1TyaPkQ7kNvwH6puqS&_nc_oc=AdkaseMcuxNmYuJhLiIhKBH8IrwHwLdiH3-Bvvpf--sKgfoLJ6Z2Bqui6Epn1RQc4sI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_Afn0qDEONyVSwr-y0Kuv3fn46lNveJRigr3liGtCP-AZlg&oe=694BBCEE)
- The filter provides the following filter categories:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653140_512510847953538_1821291780153166643_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=qKYnGxdDgFYQ7kNvwHWDXCz&_nc_oc=Adk1tSTibsCYI2YEnV0-n7B6B4sUr6JzJV9pgwWPP7x7_3_BRYspJbmajXJjXcIBLqU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_Afky7hAaSBgZFcrszRfJG3gzHInx9S6o5bN_vLJQmwyaWQ&oe=694BCEA0)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452521526_512510857953537_4081630876740288461_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wCzEWXeb-iEQ7kNvwENqvC_&_nc_oc=AdkNWtXo_S-oxra1enShBfXnnVE-rSX_IqeztYfXcCKsg25y5rtwVS-aLQNeJcSRfBU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_AfmYsy4PQy_l0iX8ODPSp7hPTLnEGOGaOOxXMwhKV1N1mg&oe=694BDE25)

## Using filters to search for object attached to scripts

- Select the Filter button ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452598609_512510861286870_1480627862075770503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=4J5pzSNJ1a4Q7kNvwG6nJ6T&_nc_oc=Adk0-s_uFJUh8r-S9-gXe07ZNrACGIB_VD5EedvLkjExSNyhzqEM0fFbwOrb-HkGQoI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_AfkbM801iqWNIVMEJn-wb8_qwPLwPjflxBx5NwqKxOB64A&oe=694BCFF8) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512510871286869_5743455761445978088_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Brkklrew3-8Q7kNvwHkEYf_&_nc_oc=AdkHYc-py1V5dXNNPiduBpu-9L68Ofz0hW6XHXQyJXAtd8A6WZIHhddV3glIOiEgfXQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_AfklMpb_Md0BfLiq4RFhCNBAndmZyOz6teHyHz-PcE_eaA&oe=694BC535)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701853_512510854620204_892051748843744519_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=QAKKv9hVz4IQ7kNvwGP1THF&_nc_oc=Adk3vsyLrKC6o77gc48mQ2yLXAsCmPuSpV5lVmrwsIE_VpTAeh20ztJqnTeX-fqmcs8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_AfmjURg0APiH8LV-N8EuAqCa_w4AONVSqxrMGKMO6tpHnw&oe=694BB4DB)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652041_512510874620202_5192617623970710737_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=mMJqyzj9ywkQ7kNvwGrZ9G8&_nc_oc=AdkpDNFyDQxU2gZtfraK85OIxTWjuQMxXJQsUc5Iq4hw3G68P7PBkEGBI_tZbzY-TdY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_AfnN0wgbfYzJ0EQ6RhEcG0oXdi46quDh5998UdckanyGbQ&oe=694BEA69)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908758_512510867953536_9205559531017446698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=IHl85GvOmzcQ7kNvwH3sbDH&_nc_oc=AdmIMGhXl5B55_k2zwOTTLwsqN_1YLrFEOHHfXBBTImYBy-1d5mhsRm5xWno4cpgxSU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hHUaij7Ht_mvyKqhdMtWHw&oh=00_Afk18kQV8r9Kd-fFZTPoF7mQpYHqnOhg_K4gU6WnZk7crQ&oe=694BC6CA)