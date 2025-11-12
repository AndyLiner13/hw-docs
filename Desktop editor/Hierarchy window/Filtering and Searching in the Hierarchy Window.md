Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/filtering-and-searching-in-the-hierarchy-window

Learn

# Filtering and Searching in the Hierarchy Window

You can filter for:

- Assets and gizmos in your virtual world, including:
  - Properties: Tri-Mesh, SubD (helpful when needing to find and remove SubD assets)
  - Gizmo types
- Objects attached to specific scripts

## Using the filter

The following steps show how to use the filter:

- Click on the filter button next to the Hierarchy Search Bar to open the filter:
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652782_512510851286871_6380904805576974054_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sVn3JKso0kAQ7kNvwFPS1E6&_nc_oc=AdnyHUTRfLHq20AS0ysGmRWEcTv01PEvx7SR__QZKrrB5oNmFgKw4Q5cDvYiWH77-Wc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfhOE_QrXqYLITe8r37SpfCbl_l4sXsvq6mhWjaTwD_FKQ&oe=692EBBEE)
- The filter provides the following filter categories:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653140_512510847953538_1821291780153166643_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=mt6Y82-rcXMQ7kNvwFHcODs&_nc_oc=AdmAa-5d7yvVxrqZ3lpiycz3QCuhwPZwryr_GRsWdn13mHTQ2a8MHRAFLV1nyRz1gIQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_Afh1g31k9uJTC3lr11JhkWuaBem-eWwOYyt8woBIxeJGbQ&oe=692E9560)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452521526_512510857953537_4081630876740288461_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wBeJXuVu3wIQ7kNvwEYy-iz&_nc_oc=AdnwAW9GtgjMnD3ZtFf2Q4nBADymfPnt3DlJRIwvJsXjAllmDsrY7kkUWn5hwtAcwIY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_Afjqmv2wdgaW1hGmKtXSC6eOO_j_Ln6YbYeutoTL10mUxg&oe=692EA4E5)

## Using filters to search for object attached to scripts

- Select the Filter button ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452598609_512510861286870_1480627862075770503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pIN1K3ELg_4Q7kNvwEtmYTd&_nc_oc=Adk7zfmKZqUsa_tvcp63lcA8PsgsJCfvEaFHXxZrk0DU6l1DIJutXKGBYuHAl6F-Brc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfiKiw5Gk_krkq6lorJKp4yWPwMNRobU8EZewQBQY8M5vQ&oe=692E96B8) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512510871286869_5743455761445978088_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=7W9TBeOku3UQ7kNvwEldBJX&_nc_oc=AdkH5vG2oXfVsMAJIeJNkulb85Q2lqU0VpmPQtOT8AWUsRH4QaJHIwAeztyLvU9UW-4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfigE6jC1S73df6jC9sLT8fxBMR3Zotq_3XjiJBRC3mJaA&oe=692EC435)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701853_512510854620204_892051748843744519_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=FGAyxgRXMYoQ7kNvwGaRlpS&_nc_oc=AdmPxVMUkOjCTAlQeEWI3zeLs6vjmmOyhYWplP3NayLFP6FIuZFzwRY3t0zQ6zcd96I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfjgnI9Xamx5glKqcnq0j8h7xb5DBl604vTtEm4baR_nlA&oe=692EB3DB)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652041_512510874620202_5192617623970710737_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lkQDWIz6vZIQ7kNvwH5A6q9&_nc_oc=AdnWBoClNw0jR0TnNPFya5ZOjW4XdtrK4CtoYnpWdagbNw3W9LMIqnCBR2OrlPNc7Z0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfhaWiSq9LcYIuCusupxiK1NdCjJu3qC5MBJFXCTi9OBWA&oe=692EB129)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908758_512510867953536_9205559531017446698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ee2qkuowz30Q7kNvwH9JMkh&_nc_oc=AdlPHx0aSQKDwpwQHE0OQMTpnd7pn7dmTkM9x8apgP3RMZh-PhAagbuqQu0T9bH8US8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ayb8Km0dz7NAsuw-JA4S2Q&oh=00_AfjFT2ZcBUsAIttRXFIAEf9AIQbyt0381kewciLbjX3OYA&oe=692EC5CA)