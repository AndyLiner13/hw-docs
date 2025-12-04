Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-5-advanced-stations

# Module 5 – Advanced Interactive Stations

This module covers stations that combine more advanced XAML UI with TypeScript scripting to create interactive, dynamic interfaces. These stations require both XAML files and corresponding TypeScript components.

## Station 08 – Quest Tracker

![Station 08 - Quest Tracker](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574576803_855959396942013_10776428692853545_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=zuSFA4EkQQYQ7kNvwHh3zS9&_nc_oc=Adl-sGp7uK-1BveMQyfe69nP5UxoKbKbOolJAuwiPdVlFW0YKFntk63reD1uB1z02i8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=b8SQR6yCGYJYAS-otMOc2Q&oh=00_Afmom43Qy5dcYccqo1pp8P3CTOTtjPPXAmTDhhf9_nUbAA&oe=694BC61C)

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

![Station 09 - Item Grid](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/574102720_855959413608678_8371886677890113473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=XzQfW7Eg7OwQ7kNvwGcJgPz&_nc_oc=AdmpYm5gVAKfkgwP6Sxt7N9WwqDMUwIlmdsUqPAfza4OVWdlQsc_SUaBTooW4kvDBlc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=b8SQR6yCGYJYAS-otMOc2Q&oh=00_AflYCDOM8dLx2ZIGZSoWW-7mT_udiyet9Jb2JN3AWF1-Iw&oe=694BBDF5)

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

![Station 11 - Tab Navigation](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/575168592_855959370275349_9142199236291391855_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=4imwUpM_tVYQ7kNvwHHKd6H&_nc_oc=AdlDVEsUahjXEgIbng97Ayq1kLv7pQ3OMS6-IbQlHhmwPMCsaiKK6q2X9rM_SzRd6tk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=b8SQR6yCGYJYAS-otMOc2Q&oh=00_AfmT6U28MFVTCS5R0cn9jcCfr9alXHK1KApBFIQbsQvf2w&oe=694BDA83)

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