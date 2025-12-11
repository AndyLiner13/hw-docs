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
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652782_512510851286871_6380904805576974054_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ndqpOx9wjtwQ7kNvwHWOE0O&_nc_oc=AdmlJhRBUAnN41Z7YE6gVMjTk42B03VJT0WzaSmhavMcfekTfrWr22WWRxccFKrTjJxbUVB0U1JTboAPFpwLq-H3&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_AfnnnA65f7OY6MvKyPr4fziO32DJN4X0m3BpHypDwAhQig&oe=6955A02E)
- The filter provides the following filter categories:
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653140_512510847953538_1821291780153166643_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=2vDFQ3GqlBMQ7kNvwGqcuEJ&_nc_oc=AdmJgXtntepOkQpLjpGmOQKtmBq_XGAcnn3dyWbRbWsevd9zl1dpoZPEL9o2sua8LMAwf0w4u105IOxYKklWYAQ7&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_Afnlngre3XL6zUvF2rsebQcuVuBp9TWrKDoYzwxIxUZyHg&oe=695579A0)

  * **Properties:** The Properties section allows filtering by the properties of assets, and supports filtering to show only “Tri-Mesh” assets and only “SubD” assets. All Tri-Mesh assets are labeled “Tri-Mesh” so you can verify them.
  * **Attached Scripts:** The Attached Scripts section allows filtering to show only the objects that have the specific selected script attached.
  * **Gizmo types:** Similar to above, the Gizmo Types section allows filtering to gizmos that match the gizmo type selected.
  * **NOTE that filtering uses OR Logic** : Filtering uses “OR” logic across all categories. For example, if you filter by “Script 1” and “Tri-Mesh,” it will display all objects that are “Tri-Mesh” OR have “Script 1” attached OR have *both* “Tri-Mesh” and “Script 1” attached.
    ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452521526_512510857953537_4081630876740288461_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=y3w83-VOUT0Q7kNvwEQSnbJ&_nc_oc=Adk8H-8rlEY3bkqPghFuu4DR_oNkE2tiNQ1H3eskmjQ76erovbYLmK3B6KkPto5Gy2oVeosRkUaFo7mtSBCEx_3C&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_AflCLTvbeGxLgftBa1f1RaiRPSHWRdDwciWQKirnR7GAow&oe=69558925)

## Using filters to search for object attached to scripts

- Select the Filter button ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452598609_512510861286870_1480627862075770503_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=8HMSjVbDnCYQ7kNvwFSkMtl&_nc_oc=Adkyq5wBoMjdYhlYUD7iDVwuftlm85jCEzCVqbeQoXzIckMyQU1pQaVXAnWddh0Ns4G89P94p2OuGRnlhbWwLuG1&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_Afmw-6fwixE0JEeUN6I6puBQVobbuC2Xx33VzSwrq8wu3g&oe=69557AF8) next to the Hierarchy Search Bar. A list  of scripts available within the world appears.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512510871286869_5743455761445978088_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=SRbEOAbCRNUQ7kNvwGv3l4X&_nc_oc=Admx7jN-rCy546Apqr6w5w7S7HDZTXoPhrnYJd6d7yarLgsZQ2VmZoCmL-2PlA1qzonXXS6E_sppr30aLG2NaDgO&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_AfkURDc3znRuPTUq96V9ntd4Q2zZL_zT4UNAjEAnpNA9-Q&oe=69557035)
- Selecting one of the script names will update the Hierarchy to show objects attached to the selected script.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452701853_512510854620204_892051748843744519_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=tCdG3kHxDnIQ7kNvwEFuh-8&_nc_oc=AdmCp6hL57CHo9M79XRJ1JxiScSjX7pTCGGF0wIih5L8HDRPn0eM3zU5OtTDU8plcgzbHLadn5uLbl2GUKxhZ3v1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_Afm_HG2mywyvpUDjuNTCpgppX12N0i2FvNGEd8Abey57Gg&oe=6955981B)
- If multiple scripts are selected within this filter, all objects attached with one of the selected scripts will be shown.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652041_512510874620202_5192617623970710737_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=NXQunbIqLmoQ7kNvwHaYpgL&_nc_oc=Adk6La74oBn98m8yZskFYTj2BSdN-_yUngcSR_FUukZy1KLyYHNgc7J5J94V0wHzCR5r0cnLBHOvpRDVSTHL1Yjh&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_AfmzMMNsVDFqOnI3e-AzqWhPF-vwT7m1kmItiVlD7Bv8zw&oe=69559569)

## Searching for scripts

- Within the Desktop Editor, view the Hierarchy on the left-hand side of the application.
- Type in the name of the script you’d like to search for - the editor will automatically filter for relevant Scripts matching the keyword provided.
- When selected in the Hierarchy, press the **F key** to automatically move the camera towards the Script Gizmo in-world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908758_512510867953536_9205559531017446698_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=3P13brsStbYQ7kNvwHEkgr2&_nc_oc=AdkfCZDWxRecVDt7rPF69f187NBB2xi-SDBvuEQlAr60hETXaR0SrPHqT2OH3RVV20lqNRv3Pro-G53hPSeFhrn-&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ZrDXN1qnG5-szTlDm-4PAg&oh=00_AfnZjDW9swTqODFC0fRVb9POhS11RSpwLkFaqmXBnL6MyA&oe=695571CA)