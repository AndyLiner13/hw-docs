Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/noesis-ui-tutorial-world/module-5-advanced-stations

# Module 5 – Advanced Interactive Stations

This module covers stations that combine more advanced XAML UI with TypeScript scripting to create interactive, dynamic interfaces. These stations require both XAML files and corresponding TypeScript components.

## Station 08 – Quest Tracker

![Station 08 - Quest Tracker](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/574576803_855959396942013_10776428692853545_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=213xgUPyP8EQ7kNvwGxQUAQ&_nc_oc=AdlX67mdrIdQdQpxV5n3nlXacq2dU_JibXXAS7hx0p-wgsHsUEeiKdO4y2s69GZgr7w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=tfQ0ZssHRSgayZKrYWX4OQ&oh=00_Afj-b1sfPyAVEfqpDkK-zsMeUfvs-04SFkb3T25nBsSABQ&oe=692BE9DC)

### Description

This station demonstrates a complete quest tracking system with a split-pane interface. The left panel displays active and completed quests, while the right panel shows quest details, requirements, and rewards. Features custom scroll behavior, data templates, and dynamic state management.

**Files Required:**

* XAML: `AT_Station01_Quest_Tracker.xaml`
* TypeScript: `QuestTracker.ts`

### XAML Example

```vs
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

```_ar4n
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

![Station 09 - Item Grid](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/574102720_855959413608678_8371886677890113473_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=LnbJhW7o3QkQ7kNvwFuSlRP&_nc_oc=AdmWZZB9aBONKReXHF2CIqTvJxKZu-UC6PekNyWaDRWkd3noT_AtygbR9mkWjE-wpXE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=tfQ0ZssHRSgayZKrYWX4OQ&oh=00_AfimDB4FeyTTUKWwwx-wpZcKXACjKRzW15LUwXI9rg-Gcg&oe=692BE1B5)

### Description

This station demonstrates a paginated 3×3 inventory grid showing 9 items per page from a set of 17. Features dropdown sorting (All/Level/Rarity), navigation buttons, and item cards with level badges, rarity stars, and gradient backgrounds.

**Files Required:**

* XAML: `AT_Station02_Item_Grid.xaml`
* TypeScript: `ItemGrid.ts`

### XAML Example

```vs
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

```_ar4n
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

```vs
<TextBlock Text="{Binding Path=remaining}" FontFamily="Impact" FontSize="30"/>
<ListBox ItemsSource="{Binding Path=leaderboard}"
         ItemTemplate="{DynamicResource LeaderBoard_Entry_Template}"/>
<StackPanel DataContext="{Binding Path=reward}">
  <TextBlock Text="{Binding Path=name}" FontSize="35"/>
</StackPanel>
```

### TypeScript Integration

```_ar4n
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

## Station 11 – Tab Navigation

![Station 11 - Tab Navigation](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/575168592_855959370275349_9142199236291391855_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=YHa-5zSrE44Q7kNvwHee784&_nc_oc=AdkySkxZINNy3y2ZibiEVTM44dBSiBZR1zeg0zLlWyM5gQ3HCQSB_Qkos0jzolAODi8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=tfQ0ZssHRSgayZKrYWX4OQ&oh=00_Afjm8TB2OFUgvzdIQ_h9E3zm3J3M4syR59l_cTPk6FLLWA&oe=692BFE43)

### Description

This station demonstrates a three-tab ranking interface (League, World, Friends) with custom angled tab designs, icon shaders, and unique reward sets per tab. Each tab displays a leaderboard with player positions and reward icons.

**Files Required:**

* XAML: `AT_Station04_Tab_Navigation.xaml`
* TypeScript: `TabNavigation.ts`

### XAML Example

```vs
<TabControl TabStripPlacement="Left">
  <TabItem Header="League" />
  <TabItem Header="World" />
  <TabItem Header="Friends" />
</TabControl>

<ListBox ItemsSource="{Binding Path=leagueRankings.playerRankings}"
         ItemTemplate="{DynamicResource LeagueRanking_ItemTemplate}"/>
```

### TypeScript Integration

```_ar4n
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