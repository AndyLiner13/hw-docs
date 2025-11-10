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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652782_512510851286871_6380904805576974054_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=eUv1XLjjlSAQ7kNvwE0VqsH&_nc_oc=AdkzLH_RsIJ7N0HxTmaNxNQVc0JuWs7A4BXQeEYNcmhUmAGarF8GChnQ4G9Tli7Ji08&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_AfiMdnS6Ib8TlpNiZn3RzE87inmEMpsKJTQYJb_1O5qh2g&oe=692BE0AE)
- The filter provides the following filter categories:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653140_512510847953538_1821291780153166643_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=mt6Y82-rcXMQ7kNvwFHcODs&_nc_oc=AdmAa-5d7yvVxrqZ3lpiycz3QCuhwPZwryr_GRsWdn13mHTQ2a8MHRAFLV1nyRz1gIQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_AfgHugsHnblP5qnOYm4hqENpVTKDjA4zqDD0jvaXlE962Q&oe=692BF260)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452521526_512510857953537_4081630876740288461_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=CSWNurKmCSsQ7kNvwHnE3lu&_nc_oc=Adn1oNB508HVZQ--WWXWGhvgQBU6FBInLs5e6ToGdn3V5Y8RiECDx4nhEvCrw1PqlZ4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_Afit2SUmLZ6KN5yfmgacOQICpC_BI6dql7YE6qqrJKC_4w&oe=692C01E5)

## Using filters to search for object attached to scripts

- Select the Filter button ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452598609_512510861286870_1480627862075770503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=CpyyehpxfJIQ7kNvwGuUOvD&_nc_oc=AdkXAR2zV4-G-2Zhvxez_3NRCNXDl50Ofi0XOHsTkLGSiR7IRnofA2y02u8q3ncsWuo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_AfgrGFVyFIfJBx6Fb9k5Xb_-rz4QDVqu6wN7ZfCZ_FhIuw&oe=692BF3B8) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512510871286869_5743455761445978088_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=ywGz-aQvqR4Q7kNvwE0ctSi&_nc_oc=AdlQ8Ztu61UC6dlax5ngIonQP0B7wYNlGiMH_Ut_fIrHxisaWQIWbeYdQLDUCKfk1I8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_Afjiz-y9Sj4f_rzGT6vqQJWQ2cormA1ppwLMXd12ag7MYw&oe=692BE8F5)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701853_512510854620204_892051748843744519_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ra4HkJKNTXcQ7kNvwFGsZyc&_nc_oc=AdmCSQqt7SW2znHDX1YArI-WISDyaC_Q1qUambCFDC0IzwdDhESwGsgsNurZPeYlCIE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_Afj7grDOID6A7f9-TSx7Nl2jBizgdryWgjyawfv7FrUpUQ&oe=692BD89B)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652041_512510874620202_5192617623970710737_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=QXh6ADWLkZoQ7kNvwEjAe9D&_nc_oc=Adl0gb6dnOyn1lXkzNArQ_Ypyl7Mi640oFYj8-KsFxh89jUeABTIBGtmFoTTLBK8Odc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_AfgEgTEWsFb5IBI4e_JO8nOnMCjNmO3dbK8Rinw45zUk9w&oe=692C0E29)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908758_512510867953536_9205559531017446698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ee2qkuowz30Q7kNvwH9JMkh&_nc_oc=AdlPHx0aSQKDwpwQHE0OQMTpnd7pn7dmTkM9x8apgP3RMZh-PhAagbuqQu0T9bH8US8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=SVgRS4VVTMxABqd-zVsYHw&oh=00_Afisd_hGF9i4XqJDJB5EKHyEe_WpD2o5ASw8YZc_phLlHw&oe=692BEA8A)