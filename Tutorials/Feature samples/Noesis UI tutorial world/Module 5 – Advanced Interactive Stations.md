Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/noesis-ui-tutorial-world/module-5-advanced-stations

# Module 5 – Advanced Interactive Stations

This module covers stations that combine more advanced XAML UI with TypeScript scripting to create interactive, dynamic interfaces. These stations require both XAML files and corresponding TypeScript components.

## Station 08 – Quest Tracker

<details>
<summary>Station 08 - Quest Tracker</summary>

<p></p>

[Station 08 - Quest Tracker](../../../image_data/30db92d4179ec8142473a59b83e1f894ee91e7d2dd5c36c1a84ddc37ee0a5c8b.md)

### Overview
The image depicts a user interface (UI) screen titled "Quest Tracker." It displays a list of quests categorized into "Active" and "Complete" sections. On the right side, there is a section labeled "Tasks & Reward," showing details of a quest named "Iron Sword."

### Key Elements
- **Main Quest Section (Left Side)**:
  - **Title**: "Main Quest"
  - **Subheading**: "Active"
  - **Quest List**:
    - **First Quest**: "The First Blade" with a sword icon.
    - **Second Quest**: "Legendary Weapon" with a sword icon.
    - **Third Quest**: "Tool of Destruction" with a hammer icon.
  - **Subheading**: "Complete"

- **Tasks & Reward Section (Right Side)**:
  - **Quest Title**: "Iron Sword" with a sword icon and a star badge indicating completion.
  - **Reward**: "Common"
  - **Tasks**:
    - "Find the Blacksmith"
    - "Gather 10 Iron Ore"

### Visual Flow / Relationships
- The most prominent visual element is the "Main Quest" section, which is larger and takes up more space on the left side.
- There is a vertical line separating the "Main Quest" section from the "Tasks & Reward" section on the right.
- The tasks under "Tasks & Reward" are listed vertically beneath the quest title.

</details>

<p></p>



### Description

This station demonstrates a complete quest tracking system with a split-pane interface. The left panel displays active and completed quests, while the right panel shows quest details, requirements, and rewards. Features custom scroll behavior, data templates, and dynamic state management.

**Files Required:**

* XAML: `AT_Station01_Quest_Tracker.xaml`
* TypeScript: `QuestTracker.ts`

### XAML Example

```
<ListBox ItemsSource="{Binding Path=inProgressQuests}"
         ItemTemplate="{DynamicResource InProgressTemplate}"/>

<DataTemplate x:Key="RequirementPreview">
  <CheckBox Content="{Binding Path=description}"
            IsChecked="{Binding Path=IsCompleted}"
            Command="{Binding Path=events.requirementChecked}"/>
</DataTemplate>

<ItemsControl ItemsSource="{Binding Path=rarityStars}"
              ItemTemplate="{DynamicResource StarImageTemplate}"/>
```

### TypeScript Integration

```
// In QuestTracker.ts

private dataContext = {
    inProgressQuests: [], // Array of quest view models
    completedQuests: [],
    activePreview: null,
    events: {
        requirementChecked: (questId, reqIndex) => this.toggleRequirement(questId, reqIndex)
    }
};

private toggleRequirement(questId: string, reqIndex: number): void {
    // Mark requirement complete, update quest state, call updateUI()
}

private updateUI(): void {
    this.entity.as(NoesisGizmo).dataContext = this.dataContext;
}
```

## Station 09 – Item Grid

<details>
<summary>Station 09 - Item Grid</summary>

<p></p>

[Station 09 - Item Grid](../../../image_data/1172483efb5303cccf8ecd57dd7de78d1d6b8f56585c72a4811c9e84071da183.md)

### Overview
The image displays a user interface (UI) screen titled "CUSTOM UI GRIDS." It features an inventory grid layout showcasing various items, likely weapons, with level indicators and star ratings. The interface includes navigation controls and sorting options.

### Key Elements
- **Title Bar**: Located at the top, reads "CUSTOM UI GRIDS."
- **Inventory Grid**: A 3x3 grid displaying items labeled with "LVL" followed by a number indicating the item's level. Each item has a star rating underneath.
  - **Top Row**: 
    - LVL 3: A weapon with a yellow and black design.
    - LVL 2: A sword with a purple handle.
    - LVL 4: A weapon with a brown and gold design.
  - **Middle Row**: 
    - LVL 5: A colorful rocket-like item.
    - LVL 1: A white and blue weapon.
    - LVL 1: Another colorful weapon with a pink and orange design.
  - **Bottom Row**: 
    - LVL 1: A weapon with a yellow and black design.
    - LVL 5: A colorful weapon with a purple and pink design.
    - LVL 4: A weapon with a red and gold design.
- **Sorting Dropdown**: Positioned above the grid, labeled "SORT BY: ALL."
- **Navigation Controls**: At the bottom, showing "PAGE 1 / 2" with left and right arrow buttons.
- **Background**: A gradient blue background with some text partially visible on the left side.

### Visual Flow / Relationships
The grid is the most prominent visual element, arranged in a 3x3 layout. The sorting dropdown is positioned above the grid, and the navigation controls are at the bottom. The items within the grid are evenly spaced and aligned horizontally and vertically. There are no arrows or lines connecting elements, suggesting a simple, direct reading order from left to right and then top to bottom.

</details>

<p></p>



### Description

This station demonstrates a paginated 3×3 inventory grid showing 9 items per page from a set of 17. Features dropdown sorting (All/Level/Rarity), navigation buttons, and item cards with level badges, rarity stars, and gradient backgrounds.

**Files Required:**

* XAML: `AT_Station02_Item_Grid.xaml`
* TypeScript: `ItemGrid.ts`

### XAML Example

```
<ComboBox SelectedIndex="{Binding Path=sortIndex}">
  <ComboBoxItem Content="ALL" Command="{Binding Path=events.sortByAllCommand}"/>
  <ComboBoxItem Content="LEVEL" Command="{Binding Path=events.sortByLevelCommand}"/>
  <ComboBoxItem Content="RARITY" Command="{Binding Path=events.sortByRarityCommand}"/>
</ComboBox>

<ListBox ItemsSource="{Binding Path=itemList}"
         ItemTemplate="{DynamicResource ItemGridItemTemplate}"
         ItemsPanel="{DynamicResource ItemsPanelGridTemplate}"/>

<StackPanel Orientation="Horizontal">
  <Button Command="{Binding Path=events.pagePreviousEvent}"/>
  <TextBlock Text="{Binding Path=currentPageNumber}"/>
  <TextBlock Text=" / "/>
  <TextBlock Text="{Binding Path=maxPageNumber}"/>
  <Button Command="{Binding Path=events.pageNextEvent}"/>
</StackPanel>
```

### TypeScript Integration

```
// In ItemGrid.ts

private dataContext = {
    itemList: [], // 9 items for current page
    currentPageNumber: 1,
    maxPageNumber: 2,
    sortIndex: 0,
    events: {
        sortByAllCommand: () => this.sortItems("all"),
        sortByLevelCommand: () => this.sortItems("level"),
        sortByRarityCommand: () => this.sortItems("rarity"),
        pagePreviousEvent: () => this.pageBackward(),
        pageNextEvent: () => this.pageForward()
    }
};

private sortItems(criteria: string): void {
    // Sort items, update UI
}

private pageForward(): void {
    // Go to next page, update UI
}

private pageBackward(): void {
    // Go to previous page, update UI
}

private updateUI(): void {
    this.entity.as(NoesisGizmo).dataContext = this.dataContext;
}
```

## Station 10 – Rankings

### Description

This station demonstrates a paginated 3×3 inventory grid showing 9 items per page from a set of 17. Features dropdown sorting (All/Level/Rarity), navigation buttons, and item cards with level badges, rarity stars, and gradient backgrounds.

**Files Required:**

* XAML: `AT_Station03_Rankings (2).xaml`
* TypeScript: `Rankings.ts`

### XAML Example

```
<TextBlock Text="{Binding Path=remaining}" FontFamily="Impact" FontSize="30"/>
<ListBox ItemsSource="{Binding Path=leaderboard}"
         ItemTemplate="{DynamicResource LeaderBoard_Entry_Template}"/>
<StackPanel DataContext="{Binding Path=reward}">
  <TextBlock Text="{Binding Path=name}" FontSize="35"/>
</StackPanel>
```

### TypeScript Integration

```
// In Rankings.ts

private dataContext = {
    leaderboard: [], // Array of player entries
    remaining: "05:00",
    reward: null,
    events: {}
};

private update(deltaTime: number): void {
    // Update timer, refresh leaderboard/reward if needed, call updateUI()
}

private updateUI(): void {
    this.entity.as(NoesisGizmo).dataContext = this.dataContext;
}
```

<details>
<summary>Station 11 - Tab Navigation</summary>

<p></p>

[Station 11 - Tab Navigation](../../../image_data/dc80d7a6d405e9ff9de98e4e8520f024e2aa1fe3ac553f53b1c4e712781ae766.md)

### Overview
The image depicts a user interface element showing a tab navigation system within a game or application. The central focus is a tab labeled "ROOKIE LEAGUE," which displays a league ranking table. The left side of the image contains a partially visible menu with text related to navigation instructions.

### Key Elements
- **Tab Navigation Header**: Located at the top of the central panel, the header reads "TAB NAVIGATION." It has a dark blue background with white text.
- **Rookie League Image**: Below the header, there is a rectangular image with a futuristic cityscape background. Overlaid on the image is the text "ROOKIE LEAGUE" in bold white letters against a magenta backdrop.
- **League Ranking Table**: Positioned beneath the Rookie League image, this section lists player rankings. Each row includes:
  - **Position**: Displayed as "1" in a magenta box.
  - **Player Name**: "Jaguar321" repeated across rows.
  - **Rating**: All entries show "9999."
  - **Reward**: An icon resembling a gun is displayed next to each entry.
- **Left Menu**: On the left side, there is a vertical menu with text that reads "excellent your menus, switch screens." The menu has a dark gray background with white text.
- **Navigation Icons**: At the top-left corner of the left menu, there are two circular icons: one arrow pointing left and another with three horizontal lines stacked vertically.
- **Background**: The overall background of the image is a gradient transitioning from light blue to white, suggesting a virtual environment or a game setting.

### Visual Flow / Relationships
The visual hierarchy is clear, with the Rookie League image and ranking table being the most prominent elements. The tab navigation header establishes the context, while the left menu provides additional navigation options. The layout follows a standard grid structure, with elements arranged in a logical sequence from top to bottom and left to right.

</details>

<p></p>



### Description

This station demonstrates a three-tab ranking interface (League, World, Friends) with custom angled tab designs, icon shaders, and unique reward sets per tab. Each tab displays a leaderboard with player positions and reward icons.

**Files Required:**

* XAML: `AT_Station04_Tab_Navigation.xaml`
* TypeScript: `TabNavigation.ts`

### XAML Example

```
<TabControl TabStripPlacement="Left">
  <TabItem Header="League" />
  <TabItem Header="World" />
  <TabItem Header="Friends" />
</TabControl>

<ListBox ItemsSource="{Binding Path=leagueRankings.playerRankings}"
         ItemTemplate="{DynamicResource LeagueRanking_ItemTemplate}"/>
```

### TypeScript Integration

```
// In TabNavigation.ts

private dataContext = {
    leagueRankings: { playerRankings: [] },
    worldRankings: { playerRankings: [] },
    friendRankings: { playerRankings: [] },
    events: {
        switchTab: (tabName) => this.switchTab(tabName)
    }
};

private switchTab(tabName: string): void {
    // Change active tab, update UI
}

private updateUI(): void {
    this.entity.as(NoesisGizmo).dataContext = this.dataContext;
}
```