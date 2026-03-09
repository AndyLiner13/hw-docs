---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/filtering-and-searching-in-the-hierarchy-window
---

# Filtering and Searching in the Hierarchy Window

You can filter for:

- Assets and gizmos in your virtual world, including:
  - Properties: Tri-Mesh, SubD (helpful when needing to find and remove SubD assets)
  - Gizmo types
- Objects attached to specific scripts

## Using the filter

The following steps show how to use the filter:

- Click on the filter button next to the Hierarchy Search Bar to open the filter:
  ![](../../_assets/images/16d538e99e7fe4689c43a0b2ef39686ca42774b70a30e9de3c6e2138a49e80e4.png)
- The filter provides the following filter categories:
  ![](../../_assets/images/cb97131461f2ff4e38748401198ff282b5b069435d5c8b19986e677093aca682.png)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](../../_assets/images/e8cf24ccd6729acef9dba6791006a77283ac0fd3d6d9af4729deb4dfc6984ebf.png)

## Using filters to search for object attached to scripts

- Select the Filter button ![](../../_assets/images/7c180864b802737830eb622e36932b8ba7690d36b534447b4ba6244f5664de50.png) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](../../_assets/images/a7b25b7d2e052eb91661ef67778457abd730dc3aa64f783ad1007030093686e7.png)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](../../_assets/images/14deea2dab5422e102cc16407b055005f71ccd3d1f400841f314b6b36b6308aa.png)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](../../_assets/images/d38d15e7bd6e16bf730792ab0c105b4871795aa89164ec82a230afcebdad0728.png)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](BROKEN_REF)